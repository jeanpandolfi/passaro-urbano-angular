import { Component, OnInit } from '@angular/core';

import { OfertaService } from '../services/oferta.service'
import { Oferta } from '../model/oferta.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertaService ]
})
export class HomeComponent implements OnInit {

  private ofertaService: OfertaService;
  private ofertas: Array<Oferta>;

  constructor(ofertaService: OfertaService) {
    this.ofertaService = ofertaService;
   }

  ngOnInit() {
    // this.ofertas = this.ofertaService.getOfertas();
    // console.log(this.ofertas);

    this.ofertaService.getOfertas()
      .then( (ofertas: Array<Oferta>) => { // O THEN vai responder a função 'resolve' da Promise
        this.ofertas = ofertas; 
        
      })
      .catch( (erro: any ) => { // O CATCH vai responder a função 'reject' da Promisse
        console.log(erro);
        
      })
      
  }

}
