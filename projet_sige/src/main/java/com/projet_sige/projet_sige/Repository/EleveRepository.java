package com.projet_sige.projet_sige.Repository;

import com.projet_sige.projet_sige.Entity.Eleve;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface EleveRepository extends JpaRepository<Eleve,Long> {

    Optional<Eleve>findByNom(String nom);
    Optional<Eleve> findById(Long id);
}
