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
        return this.http.get(URL_API)
            .toPromise()
    }

    public getOfertasByCategoria(categoria: string): Promise<any> {
        return this.http.get(`${URL_API}?categoria=${categoria}`)
            .toPromise();
    } 

    public getOfertaById(id: number): Promise<Oferta> {
        return this.http.get(`${URL_API}?id=${id}`)
            .toPromise()
            .then( (resposta: Oferta) => {
                return resposta[0];
            } )
    }

}