package com.projet_sige.projet_sige.Entity;

import jakarta.persistence.*;

import java.util.Date;

import static io.micrometer.common.util.StringUtils.isBlank;


@Entity
@Table(name = "eleve")
public class Eleve {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "nom")
    private  String nom;
    @Column(name = "prenom")
    private  String prenom;
    @Column(name = "date_naissance")
    private Date date_naissance;
    @Column(name = "residence_eleve")
    private  String residence_eleve;
    @Column(name = "matricule")
    private  String matricule;

    public Eleve() {
    }

    public Eleve( String nom, String prenom, Date date_naissance, String residence_eleve, String matricule) {

        this.nom = nom;
        this.prenom = prenom;
        this.date_naissance = date_naissance;
        this.residence_eleve = residence_eleve;
        this.matricule = matricule;
    }
    public void mettreAJour( String prenom,  String residence_eleve, String matricule){

        if(!isBlank(prenom)){
            this.prenom=prenom;

        }
        if(!isBlank(residence_eleve)){
            this.residence_eleve=residence_eleve;

        }
        if(!isBlank(matricule)){
            this.matricule=matricule;

        }
    }

    public Long getId() {
        return id;
    }

    public String getNom() {
        return nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public Date getDate_naissance() {
        return date_naissance;
    }

    public String getResidence_eleve() {
        return residence_eleve;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public void setDate_naissance(Date date_naissance) {
        this.date_naissance = date_naissance;
    }

    public void setResidence_eleve(String residence_eleve) {
        this.residence_eleve = residence_eleve;
    }

    public void setMatricule(String matricule) {
        this.matricule = matricule;
    }

    public String getMatricule() {
        return matricule;


    }
}

