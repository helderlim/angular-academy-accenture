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



  constructor(private extratoService: ExtratoService) { 
  }

  ngOnInit(){
    this.extratoService.getTransacoes()
    .subscribe(response=>{
      this.transacoes = response;
    })
  }

}
