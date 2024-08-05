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

    public Eleve( Long id,String nom, String prenom, Date date_naissance, String residence_eleve, String matricule) {
        this.id =id;
        this.nom = nom;
        this.prenom = prenom;
        this.date_naissance = date_naissance;
        this.residence_eleve = residence_eleve;
        this.matricule = matricule;
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

