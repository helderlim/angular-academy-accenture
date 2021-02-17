import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss']
})
export class ExercicioDiretivasComponent  {
  //array a ser exibido com ngFor
  listaFrutas = [
    'Maçã',
    'Laranja',
    'Mamão',
    'Pêra',
  ];

  carrosLista =[{
    placa:'jnd-4515',
    cor:'preto vulcano'
  },
  {
    placa:'jnd-888',
    cor:'vermelho vulcano'
  },
  {
    placa:'hjh-4515',
    cor:'preto carbono'
  },
];

  deveExibir = true;

  trocarValor(){
    this.deveExibir = !this.deveExibir
  }

  soma(numero1: any, numero2: any){
    return numero1 + numero2;
  }
}
