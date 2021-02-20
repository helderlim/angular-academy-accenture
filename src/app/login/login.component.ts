import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    // @ViewChild('emailInput')
    // emailInput: any = ElementRef ;
    email!: string;
    password!: string;
  

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any){
  //  this.emailInput.nativeElement.focus();
    
    if(!form.valid){
      
      form.controls.email.markAsTouched();
      form.controls.password.markAsTouched();

     
      
    }
    console.log(form.value);
    console.log(this.email);
    console.log(this.password);

    
    
  }

  exibeErro(nomeControle: string, form: NgForm){
    if(!form.controls[nomeControle]){
      return false
    }
    return form.controls[nomeControle]?.invalid && form.controls[nomeControle]?.touched;
  }

}
