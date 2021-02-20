import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


    email!: string;
    password!: string;
  

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any){
    if(!form.valid){
      console.log('Formulario invalido !!!');
      
    }
    console.log(form.value);
    console.log(this.email);
    console.log(this.password);

    
    
  }

}
