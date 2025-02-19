package com.projet_sige.projet_sige.Dto;
import  com.projet_sige.projet_sige.Entity.Eleve;


import java.util.Date;

public class EleveDto {

    private Long id;
    private  String nom;

    private  String prenom;

    private Date date_naissance;

    private  String residence_eleve;

    private  String matricule;

    public EleveDto(eleve updatedEleve) {
    }

    public EleveDto(Long id,String nom, String prenom, Date date_naissance, String residence_eleve, String matricule) {
        this.id =id;
        this.nom = nom;
        this.prenom = prenom;
        this.date_naissance = date_naissance;
        this.residence_eleve = residence_eleve;
        this.matricule = matricule;
    }
    public EleveDto(Eleve eleve){
        this.id =eleve  .getId();
        this.nom = eleve.getNom();
        this.prenom = eleve.getPrenom();
        this.date_naissance = eleve.getDate_naissance();
        this.residence_eleve = eleve.getResidence_eleve();
        this.matricule = eleve.getMatricule();


    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public Date getDate_naissance() {
        return date_naissance;
    }

    public void setDate_naissance(Date date_naissance) {
        this.date_naissance = date_naissance;
    }

    public String getResidence_eleve() {
        return residence_eleve;
    }

    public void setResidence_eleve(String residence_eleve) {
        this.residence_eleve = residence_eleve;
    }

    public String getMatricule() {
        return matricule;
    }

    public void setMatricule(String matricule) {
        this.matricule = matricule;
    }
}
