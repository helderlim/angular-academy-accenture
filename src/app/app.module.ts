import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { SharedModule } from './shared/shared.module';
import { ContatosComponent } from './contatos/contatos.component';

registerLocaleData(localePt, 'pt')

@NgModule({
  declarations: [
    
    AppComponent,
    HomeComponent,
    LoginComponent,
    ExtratoComponent,
    NaoEncontradoComponent,
    ContatosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [{
    provide: LOCALE_ID, 
    useValue: 'pt'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
