import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatosComponent } from './contatos/contatos.component';
import { DetalhesContatoComponent } from './contatos/detalhes-contato/detalhes-contato.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent,
}, {
  path: 'home',
  component: HomeComponent,
}, {
  path: 'extrato',
  component: ExtratoComponent,
}, {
  path: 'contatos',
  component: ContatosComponent,
},{
  path: 'contatos/:id',
  component: DetalhesContatoComponent,
},

//define redirecionamento da rota raiz 
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
}, {
  //para qualquer rota que não for especificada 
  path: '**',
  component: NaoEncontradoComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
