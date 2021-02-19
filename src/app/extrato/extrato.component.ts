import { Component, OnInit } from '@angular/core';

import { Transacao } from './extrato.interface';
import { ExtratoService } from './extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {


  transacoes!: Array<Transacao>;

  estaCarregando!: boolean;

  erroNoCarregamento!: boolean;


  constructor(private extratoService: ExtratoService) { 
  }

  ngOnInit(){
    this.carregarExtrato();
  }

  carregarExtrato(){
    this.estaCarregando = true;
    this.erroNoCarregamento= false;
    this.extratoService.getTransacoes()
    .subscribe(response=>{
    this.estaCarregando = false;
      this.transacoes = response;
    }, error=>{
      //fazer algo se der erro ,
      this.estaCarregando = false;
      this.erroNoCarregamento= true;
      
    })
  }

}
