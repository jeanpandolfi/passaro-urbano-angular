import { Oferta } from '../model/oferta.model'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { URL_API } from '../app.api';
import { Observable, throwError } from 'rxjs';

import { map, retry, catchError } from 'rxjs/operators';
import 'rxjs/operators/map';

@Injectable()
export class OfertaService {

    private http: HttpClient;
    

    constructor(http: HttpClient){
        this.http = http;
    }
   

    public getOfertas(): Promise<any> {
        return this.http.get(`${URL_API}/ofertas`)
            .toPromise()
    }

    public getOfertasByCategoria(categoria: string): Promise<any> {
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
            .toPromise();
    } 

    public getOfertaById(id: number): Promise<Oferta> {
        return this.http.get(`${URL_API}/ofertas?id=${id}`)
            .toPromise()
            .then( (resposta: Oferta) => {
                return resposta[0];
            } )
    }

    public getComoUsarOfertaById(id: number):Promise<any> {
        return this.http.get(`${URL_API}/como-usar?id=${id}`)
            .toPromise()
            .then( (reposta: Response) => {
                return reposta[0].descricao;
            })
    }

    public getOndeFicaOfertaById(id: number): Promise<any> {
        return this.http.get(`${URL_API}/onde-fica?id=${id}`)
            .toPromise()
            .then( (resposta: Response) => {
                return resposta[0].descricao;
            })

    }   

    public pesquisaOfertas(termo: string): Observable<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
        .pipe(
            retry(1),
            map((response: Oferta[]) => {
                return response
            })
        )
      
            
    }

  
}