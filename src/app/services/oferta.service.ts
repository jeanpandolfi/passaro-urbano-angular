import { Oferta } from '../model/oferta.model'
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

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
        return this.http.get("http://localhost:3000/ofertas")
            .toPromise()
    }

}