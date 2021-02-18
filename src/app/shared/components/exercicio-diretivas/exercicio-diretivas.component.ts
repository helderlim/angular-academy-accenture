import { Component } from '@angular/core';

import { MEMES_AGRUPADOS_POR_CATEGORIA } from './exexcicio-diretivas.constants';

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

  MEMES_AGRUPADOS_POR_CATEGORIA = MEMES_AGRUPADOS_POR_CATEGORIA;

  trocarValor(){
    this.deveExibir = !this.deveExibir
  }

  soma(numero1: any, numero2: any){
    return numero1 + numero2;
  }
}
