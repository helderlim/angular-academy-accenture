import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-ngclass',
  templateUrl: './exercicio-ngclass.component.html',
  styleUrls: ['./exercicio-ngclass.component.scss'],
 
})
export class ExercicioNgclassComponent  {

  deveSerVerde = false;

  tornarVerde(){
    this.deveSerVerde = true;
  }

}
