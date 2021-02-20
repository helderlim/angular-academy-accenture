import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

import { LoginService } from './login.service';

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

  estaCarregando!: boolean;
  erroNoLogin!: boolean;


  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    this.erroNoLogin = false;
    //  this.emailInput.nativeElement.focus();

    if (!form.valid) {

      form.controls.email.markAsTouched();
      form.controls.password.markAsTouched();



    }
    console.log(form.value);
    console.log(this.email);
    console.log(this.password);


    this.login();
  }

  login() {
    this.estaCarregando = true;
    this.loginService.logar(this.email, this.password)
      .pipe(
        finalize(() => this.estaCarregando = false)
      )
      .subscribe(
        response => this.onLoginSuccess(),
        error => this.onErrorLogin(),
      )
  }

  onLoginSuccess() {
    this.router.navigate(['home'])
  }

  onErrorLogin() {

    this.erroNoLogin = true;



  }

  exibeErro(nomeControle: string, form: NgForm) {
    if (!form.controls[nomeControle]) {
      return false
    }
    return form.controls[nomeControle]?.invalid && form.controls[nomeControle]?.touched;
  }

}
