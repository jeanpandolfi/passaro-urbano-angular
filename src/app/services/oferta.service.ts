import { Oferta } from '../model/oferta.model'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { URL_API } from '../app.api';

@Injectable()
export class OfertaService {

    private http: HttpClient;
    

    constructor(http: HttpClient){
        this.http = http;
    }
   
    /**
     * getOfertas
     */
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
            .then( (reposta: any) => {
                return reposta[0].descricao;
            })
    }

    public getOndeFicaOfertaById(id: number): Promise<any> {
        return this.http.get(`${URL_API}/onde-fica?id=${id}`)
            .toPromise()
            .then( (resposta: any) => {
                return resposta[0].descricao;
            })

    }
}