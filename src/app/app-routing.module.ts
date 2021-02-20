import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatosComponent } from './contatos/contatos.component';
import { DetalhesContatoComponent } from './contatos/detalhes-contato/detalhes-contato.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { EstaLogadoGuard } from './shared/guards/esta-logado/esta-logado.guard';
import { NaoEstaLogadoGuard } from './shared/guards/nao-esta-logado/nao-esta-logado.guard';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent,
  canActivate: [NaoEstaLogadoGuard]
}, {
  path: 'home',
  component: HomeComponent,
  canActivate: [EstaLogadoGuard]
}, {
  path: 'extrato',
  component: ExtratoComponent,
  canActivate: [EstaLogadoGuard]
}, {
  path: 'contatos',
  component: ContatosComponent,
  canActivate: [EstaLogadoGuard]
},{
  path: 'contatos/:id',
  component: DetalhesContatoComponent,
  canActivate: [EstaLogadoGuard]
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
