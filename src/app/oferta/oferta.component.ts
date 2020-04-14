import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OfertaService } from '../services/oferta.service';
import { Oferta } from '../model/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertaService ]
})
export class OfertaComponent implements OnInit {

  private route: ActivatedRoute;
  private ofertaService: OfertaService;
  private id: number;
  private oferta: Oferta;

  constructor( route: ActivatedRoute, ofertaService: OfertaService) {
      this.route = route;
      this.ofertaService = ofertaService;
  }

  ngOnInit() {
    // this.route.params.subscribe( (parametro: any ) => { // Pegando a rota com o subscribe
    //   console.log(parametro.id);
    // })
    this.id = this.route.snapshot.params["id"];

    this.ofertaService.getOfertaById(this.id)
      .then( (oferta: Oferta) => {
        this.oferta = oferta;

      })
      .catch( (erro: any) => {
        console.log(erro);

      } )
  }

}
