import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { OfertaService } from '../services/oferta.service';
import { Oferta } from '../model/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertaService ]
})
export class OfertaComponent implements OnInit, OnDestroy {

  private route: ActivatedRoute;
  private ofertaService: OfertaService;
  private id: number;
  private oferta: Oferta;

  constructor( route: ActivatedRoute, ofertaService: OfertaService) {
      this.route = route;
      this.ofertaService = ofertaService;
  }

  ngOnInit() {
    this.route.params.subscribe( (parametro: Params ) => { // Pegando a rota com o subscribe
      
      this.ofertaService.getOfertaById(parametro.id)
      .then( (oferta: Oferta) => {
        this.oferta = oferta;

      })
      .catch( (erro: any) => {
        console.log(erro);
      } )

    })
  }

  ngOnDestroy(){

  }
}







      // //Observável
      // let meuObservavel = Observable.create( (observer: Observer<string>) => {
      //   observer.next("Faça 1");
      //   observer.next("E faça 2");
      //   //observer.error("ERRO - FINALIZANDO A STREAM");
      //   observer.complete();
      // })

      // //Observador
      // meuObservavel.subscribe(
      //   (resultado: string) => { //pegando o que vem de "next()"
      //     console.log(resultado);
      //   },
      //   (erro: any) => {  //pegando o que vem de "error()"
      //     console.log(erro);
      //   },
      //   () => {     // caiu no método "complete()"
      //     console.log("FINALIZADA")
      //   }
      // )