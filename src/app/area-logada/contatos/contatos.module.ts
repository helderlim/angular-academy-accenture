import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ContatosRoutingModule } from './contatos-routing.module';
import { DetalharContatoComponent } from './detalhar-contato/detalhar-contato.component';
import { ListarContatosComponent } from './listar-contatos/listar-contatos.component';
import { NovoContatoComponent } from './novo-contato/novo-contato.component';


@NgModule({
  declarations: [
    ListarContatosComponent,
    DetalharContatoComponent,
    NovoContatoComponent,
  ],
  imports: [
    CommonModule,
    ContatosRoutingModule
  ]
})
export class ContatosModule { }
