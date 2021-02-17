import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //esta linkando meu html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Seja bem-vindo! ????';
  pudim= 'uma palavra';
  favoriteColor = 'green';
  

  constructor(){

  }

  eventoRecebido(_$event: any){
    console.log('Appcomponent EVENTO RECEBIDO ', _$event);
    
  }

 
 
}
