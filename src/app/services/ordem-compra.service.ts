import { Pedido } from '../model/pedido.model';

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { URL_API } from '../app.api';
import { Observable } from 'rxjs';

import { map, retry } from 'rxjs/operators';


@Injectable()
export class OrdemCompraService {

    constructor( private http: HttpClient){}

    // Headers
    private httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    public efetivarCompra(pedido: Pedido): Observable<Pedido> {
        
        return this.http.post(
            `${URL_API}/pedidos`,
            JSON.stringify(pedido),
            this.httpOptions 
        ).pipe(
            retry(1),
            map((response: Pedido) => {
                return response;
            })
        )
    }
}