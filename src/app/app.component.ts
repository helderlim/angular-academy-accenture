import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  //esta linkando meu html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Seja bem-vindo! ????';
  pudim= 'uma palavra';
  favoriteColor = 'green';


  constructor(){

  }
//realiza coisas na inicialização da aplicação  
  ngOnInit(){
      }

  eventoRecebido(_$event: any){
    console.log('Appcomponent EVENTO RECEBIDO ', _$event);
    
  }

 
 
}
