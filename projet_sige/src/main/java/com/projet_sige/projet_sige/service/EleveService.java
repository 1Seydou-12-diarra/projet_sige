package com.projet_sige.projet_sige.service;

import com.projet_sige.projet_sige.Dto.EleveDto;
import com.projet_sige.projet_sige.Entity.Eleve;
import com.projet_sige.projet_sige.Repository.EleveRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;



@Service
public class EleveService {
    private final EleveRepository eleveRepository;

    @Autowired
    public EleveService(EleveRepository eleveRepository) {
        this.eleveRepository = eleveRepository;
    }

    public List<EleveDto> lister() {
        List<Eleve> eleves = eleveRepository.findAll();
        return eleves.stream().map(this::toDTO).collect(Collectors.toList());
    }
    public EleveDto obtenirDetails(Long id) {
        Eleve eleve = eleveRepository.findById(id).orElseThrow(() -> new RuntimeException("Élève non trouvé"));
        return toDTO(eleve);
    }
    @Transactional
    public void supprimerEleve(Long id) {
        eleveRepository.deleteById(id);
    }




    private EleveDto toDTO(Eleve eleve) {
        // Implémentez la conversion de Eleve à EleveDto
        EleveDto dto = new EleveDto(updatedEleve);
        dto.setId(eleve.getId());
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
    eleve = new Eleve(eleveDto.getId(),eleveDto.getNom(),eleveDto.getPrenom(),eleveDto.getDate_naissance(),eleveDto.getResidence_eleve(),eleveDto.getMatricule());
}
eleveRepository.save(eleve);
}


public EleveDto modifierEleve(Long id, EleveDto eleveDto) {
        Optional<Eleve> eleveOptional = eleveRepository.findById(id);
        if (eleveOptional.isPresent()) {
            Eleve eleve = eleveOptional.get();

            eleve.setNom(eleveDto.getNom());
            eleve.setPrenom(eleveDto.getPrenom());
            eleve.setResidence_eleve(eleveDto.getResidence_eleve());
            eleve.setDate_naissance(eleveDto.getDate_naissance());
            eleve.setMatricule(eleveDto.getMatricule());
            Eleve updatedEleve = eleveRepository.save(eleve);
            return new EleveDto(updatedEleve);
        }
        return null;
    }

}
