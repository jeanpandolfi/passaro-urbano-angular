import { Component, OnInit } from '@angular/core';

import { Oferta } from '../model/oferta.model'
import { OfertaService } from '../services/oferta.service'

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css'],
  providers: [ OfertaService ]
})
export class RestauranteComponent implements OnInit {

  private ofertas: Array<Oferta>;
  private ofertaService: OfertaService;
  
  constructor(ofertaService: OfertaService) {
      this.ofertaService = ofertaService;
  }

  ngOnInit() {
    this.ofertaService.getOfertasByCategoria("restaurante")
      .then( (ofertas: Array<Oferta>) => {
          this.ofertas = ofertas;
     
      } )
      .catch( (erro: any) => {
          console.log(erro);
      } )
  }

}
