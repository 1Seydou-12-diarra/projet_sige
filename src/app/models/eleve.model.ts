
export class Eleve {
  id?: number
  nom?: string
  prenom?: string
  date_naissance?: string
  residence_eleve?: string
  matricule?: string


  constructor(id?: number, nom?: string, prenom?: string, date_naissance?: string, residence_eleve?: string, matricule?: string) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.date_naissance = date_naissance;
    this.residence_eleve = residence_eleve;
    this.matricule = matricule;
  }
}

