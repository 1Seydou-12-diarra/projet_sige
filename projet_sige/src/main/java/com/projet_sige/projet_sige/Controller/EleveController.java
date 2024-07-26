package com.projet_sige.projet_sige.Controller;

import com.projet_sige.projet_sige.Dto.EleveDto;
import com.projet_sige.projet_sige.service.EleveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // Utilisez @RestController pour renvoyer des objets JSON
@RequestMapping("/eleve")
public class EleveController {

    private final EleveService eleveService;

    @Autowired
    public EleveController(EleveService eleveService){
        this.eleveService = eleveService;
    }

    @GetMapping("/getAll") // Ajoutez le slash avant getAll
    public List<EleveDto> listeEleve() {
        return eleveService.lister();
    }

    @PostMapping("/enregistrerOuModifier") // Ajoutez le slash avant enregistrerOuModifier
    public void enregistrerEleve(@RequestBody EleveDto eleveDto) {
        eleveService.enregistrerOuModifier(eleveDto);
    }
}
