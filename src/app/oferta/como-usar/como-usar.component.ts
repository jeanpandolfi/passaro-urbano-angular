import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertaService } from 'src/app/services/oferta.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [ OfertaService ]
})
export class ComoUsarComponent implements OnInit {

  private route: ActivatedRoute;
  private ofertaService: OfertaService;

  private comoUsar: string = "";

  constructor(route: ActivatedRoute, ofertaService: OfertaService) {
      this.route = route;
      this.ofertaService = ofertaService;
  }

  ngOnInit() {
    this.ofertaService.getComoUsarOfertaById( this.route.parent.snapshot.params["id"] )
      .then( ( descricao: string) => {
        this.comoUsar = descricao;

      })
      .catch( (erro: any) => {
        console.log(erro);
      })
   
    
  }

}
