import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-pipes',
  templateUrl: './exercicio-pipes.component.html',
  styleUrls: ['./exercicio-pipes.component.scss']
})
export class ExercicioPipesComponent  {

  filme ={
    titulo:'harry poter- A pedra filosofal',
    estrelas: 4.5554546,
    precoAluguel: 15.45,
    dataLancamento: new Date(2019, 5, 30),
  }
  
}
