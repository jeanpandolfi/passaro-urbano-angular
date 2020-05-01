import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertaService } from 'src/app/services/oferta.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [ OfertaService ]
})
export class OndeFicaComponent implements OnInit {

  private route: ActivatedRoute;
  private ofertaService: OfertaService; 

  private ondeFica: string = "";

  constructor(route: ActivatedRoute, ofertaService: OfertaService) {
      this.route = route;
      this.ofertaService = ofertaService;
  }

  ngOnInit() {

    this.route.parent.params.subscribe(
      ( parametro: Params ) => {

        this.ofertaService.getOndeFicaOfertaById( parametro.id )
          .then( (descricao: string) => {
            this.ondeFica = descricao;
          })
          .catch( (erro: any) => {
            console.log('ERRO: ', erro);
          } )
      }
    )
    
  }

}
