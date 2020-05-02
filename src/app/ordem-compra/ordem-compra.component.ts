import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../services/ordem-compra.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Pedido } from '../model/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  private idPedidoCompra: number;

  public form: FormGroup = new FormGroup({
    endereco:  new FormControl('', [ Validators.required, Validators.minLength(5), Validators.maxLength(200) ]),
    numero: new FormControl('', [ Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
    complemento: new FormControl('', [ Validators.minLength(3), Validators.maxLength(200)]),
    formaPagamento: new FormControl('', [ Validators.required, Validators.minLength(1), Validators.maxLength(20)])
  });
  

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    
  }

  public confirmarCompra(): void {
    let pedido: Pedido = new Pedido(
      this.form.value.endereco,
      this.form.value.numero,
      this.form.value.complemento,
      this.form.value.formaPagamento
    );

    this.ordemCompraService.efetivarCompra(pedido)
      .subscribe(
        (pedidoSalvo: Pedido) => {
          console.log(pedidoSalvo);
          this.idPedidoCompra = pedidoSalvo.id;
        }
      )
    
  }

  public isValid(controlName: string): boolean {
    return this.form.get(controlName).valid;
  }

  public isTouched(controlName: string): boolean {
    return this.form.get(controlName).touched;
  }
}
