import { Component, OnInit } from '@angular/core';

import { Oferta } from '../model/oferta.model'
import { OfertaService } from '../services/oferta.service'

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [ OfertaService ]
})
export class DiversaoComponent implements OnInit {

  private ofertas: Array<Oferta>;
  private ofertaService: OfertaService;

  constructor( ofertaService: OfertaService ) {
    this.ofertaService = ofertaService;
  }

  ngOnInit() {
    this.ofertaService.getOfertasByCategoria("diversao")
      .then( ( ofertas: Array<Oferta> ) => {
        this.ofertas = ofertas;

      })
      .catch( ( erro: any) => {
        console.log(erro);
        
      })

  }

}
