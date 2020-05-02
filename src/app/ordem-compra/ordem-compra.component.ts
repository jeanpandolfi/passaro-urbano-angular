import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdemCompraService } from '../services/ordem-compra.service';
import { NgForm } from '@angular/forms';
import { Pedido } from '../model/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  @ViewChild('formulario', { static: false }) public form: NgForm;

  private idPedidoCompra: number;

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    
  }

  public confirmarCompra(): void {
    let pedido = new Pedido(
      this.form.value.endereco,
      this.form.value.numero,
      this.form.value.complemento,
      this.form.value.formaPagamento
    )

    this.ordemCompraService.efetivarCompra(pedido)
      .subscribe(
        (pedidoSalvo: Pedido) => {
          this.idPedidoCompra = pedidoSalvo.id
        }
      )
  }
}
