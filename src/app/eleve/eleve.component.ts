import { Component } from '@angular/core';
import {
  ConfirmEventType,
  ConfirmationService,
  FilterMatchMode,
  MessageService,
  PrimeNGConfig,
} from 'primeng/api';
import { Eleve } from '../models/eleve.model';
import { EleveService } from '../services/eleve.service';
@Component({
  selector: 'app-eleve',
  templateUrl: './eleve.component.html',
  styleUrls: ['./eleve.component.scss'],
  providers: [MessageService]
})
export class EleveComponent {

  visible !: boolean;
  submitted !: boolean;
  isLoading = false;
  detailVisible!: boolean; // Ajoutez cette l
  btnText !: any;
  selectedEleve: Eleve | null = null;
  eleves: Eleve[] = [];

  eleve !: Eleve;
  listeEleve !: Eleve[];
  constructor(
    private _eleveService: EleveService,
    private _messageService: MessageService,

    private _confirmationService: ConfirmationService,
    private _config: PrimeNGConfig
  ) { }

  ngOnInit() {

    this.getListeEleve();

  }
  // Cette fonction permet d'afficher le formulaire de saisie de personne
  showDialog() {
    this.visible = true;
    this.submitted = false;
    this.eleve = {};
    this.btnText = 'Ajouter';
  }
  getListeEleve() {
    this._eleveService.getEleve().subscribe({
      next: (reponse) => {
        this.listeEleve = reponse;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  // Cette fonction permet de pré-remplir le formulaire avec les données d'une personne existante pour la modifier
  editEleve(eleve: Eleve) {
    this.eleve = { ...eleve, };
    this.visible = true;
    this.btnText = 'Modifier';
  }
  viewEleve(id: number) {
    console.log("Id student ==>", id);
    this._eleveService.detailsEleve(id).subscribe({
      next: (reponse) => {
        this.selectedEleve = reponse;
        console.log("Detail student ==>", this.selectedEleve);
        this.detailVisible = true; // Affiche la fenêtre modale des détails
      },
      error: (error) => {
        console.log(error);
        this._messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'Erreur lors de la récupération des détails de l\'élève.',
          life: 5000,
        });
      },
    });
  }
  saveEleve(id: any, eleve: Eleve) {
    this.submitted = true; // On indique que le formulaire a été soumis

    // Vérification des champs du formulaire
    if (!eleve.nom || !eleve.prenom || !eleve.date_naissance || !eleve.residence_eleve || !eleve.matricule) {

      // Si un champ est manquant, on affiche un message d'erreur avec l'objet MessageService et on quitte la fonction
      this._messageService.add({
        severity: 'error',
        summary: 'Erreur',
        detail: 'Veuillez remplir tous les champs.',
        life: 5000, // La durée pendant laquelle le message doit être affiché (en millisecondes)
      });
      return;
    }

    if (this.btnText === 'Ajouter') { // Si on est en train d'ajouter une nouvelle personne
      // On appelle le service pour créer la nouvelle personne
      this._eleveService.enregistrerUtilisateur(eleve).subscribe({
        complete: () => { // Si la création est complétée avec succès
          // On recharge la liste des personnes pour mettre à jour l'affichage
          this.visible = false;
          // On affiche un message de succès avec l'objet MessageService
          this._messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Elève Ajouté',
            life: 5000, // La durée pendant laquelle le message doit être affiché (en millisecondes)
          });
          this.getListeEleve();
        },
        error: (error: any) => { // Si une erreur se produit pendant la création
          console.log(error); // On affiche l'erreur dans la console
        },
      });
    }
    else { // Si on est en train de modifier une personne existante
      const index = this.listeEleve.findIndex((p) => p.id === id); // On récupère l'index de la personne dans la liste

      // Vérification si l'index est valide
      if (index === -1) {
        console.error('eleve non trouvée dans la liste.');
        return;
      }

      // On appelle le service pour mettre à jour la personne avec l'identifiant et les données fournies
      this._eleveService.enregistrerUtilisateur(eleve).subscribe({
        next: (enregistrerUtilisateur) => { // Si la mise à jour est réussie, on obtient les données mises à jour
          this.listeEleve[index] = enregistrerUtilisateur; // On met à jour la personne dans la liste locale avec les données reçues

          // On affiche un message de succès avec l'objet MessageService
          this._messageService.add({
            severity: 'success',
            summary: 'Succès',
            detail: 'Eleve modifié avec succès',
            life: 5000, // La durée pendant laquelle le message doit être affiché (en millisecondes)
          });

          this.visible = false; // On masque la fenêtre modale après la mise à jour
        },
        error: (error: any) => { // Si une erreur se produit pendant la mise à jour
          console.error('Erreur lors de la mise à jour de la personne :', error); // On affiche l'erreur dans la console

          // On affiche un message d'erreur avec l'objet MessageService
          this._messageService.add({
            severity: 'error',
            summary: 'Erreur',
            detail: "La mise à jour de l'élève a échoué",
            life: 5000, // La durée pendant laquelle le message doit être affiché (en millisecondes)
          });
        },
        complete: () => {
          // Optionnel : Actions à réaliser après la complétion de l'opération
        }
      });

    }

  }
  deleteEleve(id: number) {
    // On ouvre une boîte de confirmation pour demander à l'utilisateur s'il est sûr de supprimer la personne sélectionnée
    this._confirmationService.confirm({
      message: 'Etes vous sûr de supprimer l"élève selectionné ?', // Le message à afficher dans la boîte de confirmation
      header: 'Confirmer', // Le titre de la boîte de confirmation
      icon: 'pi pi-exclamation-triangle', // L'icône à afficher dans la boîte de confirmation
      accept: () => { // Si l'utilisateur accepte la confirmation
        // On appelle le service pour supprimer la personne avec l'identifiant passé en paramètre
        this._eleveService.deleteEleve(id).subscribe({
          complete: () => { // Si la suppression est complétée avec succès
            // On recharge la liste des personnes pour mettre à jour l'affichage
            this.getListeEleve();
            // On affiche un message de succès avec l'objet MessageService
            this._messageService.add({
              severity: 'success',
              summary: 'success',
              detail: 'Eleve supprimée.',
              life: 5000, // La durée pendant laquelle le message doit être affiché (en millisecondes)
            });
          },
          error: (error: any) => { // Si une erreur se produit pendant la suppression
            console.log(error); // On affiche l'erreur dans la console
          },
        });
      },
      reject: (type: any) => { // Si l'eleve rejette la confirmation ou annule l'action
        switch (type) {
          case ConfirmEventType.REJECT: // Si l'utilisateur rejette la confirmation
            // On affiche un message d'erreur avec l'objet MessageService
            this._messageService.add({
              severity: 'error',
              summary: 'Rejet',
              detail: 'vous avez rejecté la suppression',
            });
            break;
          case ConfirmEventType.CANCEL: // Si l'utilisateur annule l'action
            // On affiche un message d'avertissement avec l'objet MessageService
            this._messageService.add({
              severity: 'warn',
              summary: 'Annulation',
              detail: 'vous avez annulé la suppression',
            });
            break;
        }
      },
    });
  }

}

