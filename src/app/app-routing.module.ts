import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExtratoComponent } from './extrato/extrato.component';
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
  loadChildren: () =>import('./home/home.module').then(m => m.HomeModule),
  canActivate: [EstaLogadoGuard]
}, {
  path: 'extrato',
  component: ExtratoComponent,
  canActivate: [EstaLogadoGuard]
}, {
  path: 'contatos',
  loadChildren: () =>import('./contatos/contatos.module').then(m => m.ContatosModule),
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
