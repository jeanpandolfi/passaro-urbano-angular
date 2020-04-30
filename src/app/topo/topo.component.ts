import { Component, OnInit } from '@angular/core';
import { OfertaService } from '../services/oferta.service';
import { Oferta } from '../model/oferta.model';


import { Observable, Subject } from 'rxjs';

import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';

import 'rxjs/add/observable/of' 
import { error } from 'protractor';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertaService ]
})
export class TopoComponent implements OnInit {

  private ofertaService: OfertaService;
  private ofertasObservable: Observable<Oferta[]>;
  private ofertas: Oferta[];

  //O subject ele funciona como observador e observável. 
  // É utilizado para manipular dados antes de reenviar ao fluxo de eventos
  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(ofertaservice: OfertaService) { this.ofertaService = ofertaservice }

  ngOnInit() {
    this.ofertasObservable = this.subjectPesquisa
      .pipe(
        debounceTime(1000), // vai definir a partir de quanto tempo o switchMap vai ser executado
        distinctUntilChanged(), // verifica as mudanças do termo da pesquisa
        switchMap(  //O switchMap vai ser executado sempre quando o next() do subject é executado
          (termo: string) => {
            if(termo.trim() === ''){
              return Observable.of<Oferta[]>([]);
            }
            return this.ofertaService.pesquisaOfertas(termo)
          }
        ),
        catchError( 
          (err: any) => {
            console.log(err)
            return Observable.of<Oferta[]>([]);
          }
        )
      )
    
      this.ofertasObservable.subscribe(
        ( ofertas: Oferta[] ) => {   //capturando o método next() do observável
          this.ofertas = ofertas; 
        },
        ( erro: any ) => {          // capturando o método error() do observável
          console.log("Erro status: " + erro)
        },
        ( ) => {//capturando o método complete() do observável.OBS: esse método não tem retorno
          console.log("Steam de eventos finalizada")
        }
      )
  }

 
  public pesquisa(termoDaBusca: string): void {
    console.log("keyup", termoDaBusca)
    this.subjectPesquisa.next(termoDaBusca) 



    // this.ofertasObservable = this.ofertaService.pesquisaOfertas(termo)
    
    // this.ofertasObservable.subscribe(
    //   ( ofertas: Oferta[] ) => {   //capturando o método next() do observável
    //     console.log(ofertas) 
    //   },
    //   ( erro: any ) => {          // capturando o método error() do observável
    //     console.log("Erro status: " + erro.status)
    //   },
    //   ( ) => {//capturando o método complete() do observável.OBS: esse método não tem retorno
    //     console.log("Steam de eventos finalizada")
    //   }
    // )
  }
}
