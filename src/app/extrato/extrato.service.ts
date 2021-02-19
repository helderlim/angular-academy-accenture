import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  constructor() { }
   
    getTransacoes() {
      //TODO: CONSULTAR UMA API VERDADEIRA 
    return [
        {
            id: 1,
            data: "2020-02-04T13:00:24.744Z",
            descricao: "Salário",
            valor: 3500.00,
            categoria: "Salário"
        },
        {
            id: 2,
            data: "2020-02-05T14:21:24.744Z",
            descricao: "Sapato Verde",
            valor: -235.99,
            categoria: "Vestuário"
        },
        {
            id: 3,
            data: "2020-01-29T15:00:24.744Z",
            descricao: "Notebook",
            valor: -10231.99,
            categoria: "Eletrônicos"
        },
        {
            id: 4,
            data: "2020-01-28T13:00:24.744Z",
            descricao: "Armazem Central",
            valor: -25.99,
            categoria: "Restaurantes"
        },
        {
            id: 5,
            data: "2020-01-25T14:22:24.744Z",
            descricao: "Outback",
            valor: -120,
            categoria: "Restaurantes"
        },
      ]
    }

}
