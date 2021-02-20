import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalhesContatoComponent } from './detalhes-contato/detalhes-contato.component';
import { ContatosComponent } from './listar-contatos/contatos.component';

const routes: Routes = [{
  path: '',
  component: ContatosComponent
},{
  path:':id',
  component:DetalhesContatoComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatosRoutingModule { }
