package com.projet_sige.projet_sige.service;

import com.projet_sige.projet_sige.Dto.EleveDto;
import com.projet_sige.projet_sige.Entity.Eleve;
import com.projet_sige.projet_sige.Repository.EleveRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import java.util.stream.Collectors;



@Service
public class EleveService {
    @Autowired
private final EleveRepository eleveRepository;

public EleveService(EleveRepository eleveRepository){
    this.eleveRepository = eleveRepository;
}

    public List<EleveDto> lister() {
        List<Eleve> eleves = eleveRepository.findAll();
        return eleves.stream().map(this::toDTO).collect(Collectors.toList());
    }

    private EleveDto toDTO(Eleve eleve) {
        // Implémentez la conversion de Eleve à EleveDto
        EleveDto dto = new EleveDto();

        dto.setNom(eleve.getNom());
        dto.setPrenom(eleve.getPrenom());
        dto.setDate_naissance(eleve.getDate_naissance());
        dto.setResidence_eleve(eleve.getResidence_eleve());
        dto.setMatricule(eleve.getMatricule());

        // Ajoutez d'autres champs selon votre besoin
        return dto;
    }

    /**
 * créer un élève ou modifier un élève
 */
@Transactional
public void enregistrerOuModifier(EleveDto eleveDto){
    Eleve eleve = eleveRepository.findByNom(eleveDto.getNom().trim()).orElse(null);
if(eleve == null){
    eleve = new Eleve(eleveDto.getNom(),eleveDto.getPrenom(),eleveDto.getDate_naissance(),eleveDto.getResidence_eleve(),eleveDto.getMatricule());
}else{
    eleve.mettreAJour(eleveDto.getPrenom(),eleveDto.getResidence_eleve(),eleveDto.getMatricule());
}
eleveRepository.save(eleve);
}


}
