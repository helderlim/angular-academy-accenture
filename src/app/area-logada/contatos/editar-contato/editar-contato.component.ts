import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize, take } from 'rxjs/operators';

import { Contato } from '../contatos.interfaces';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-novo-contato',
  templateUrl: './editar-contato.component.html',
  styleUrls: ['./editar-contato.component.scss']
})
export class EditarContatoComponent implements OnInit {

  idContato!: string;
  contatoForm!: FormGroup;

  estaCarregando!: boolean;
  erroNoCarregamento!: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private contatosService: ContatosService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
   this.inicializarFormulario();
    this.idContato = this.route.snapshot.paramMap.get('id') as any;
    if(this.estaEditando()){
      this.carregarContato();
    }
    
  }

  estaEditando = () => Boolean(this.idContato); 
   


  inicializarFormulario(){
    this.contatoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      dadosBancarios:this.formBuilder.group( {
        ag: ['', [Validators.required, Validators.minLength(4)]],
        cc: ['', [Validators.required, Validators.minLength(5)]],
        banco: ['', Validators.required],
      }),
      
      
    })
  }

  carregarContato() {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

    const idContato = this.route.snapshot.paramMap.get('id');
    this.contatosService.getContato(idContato as any)
      .pipe(
        take(1),
        finalize(() => this.estaCarregando = false)
      )
      .subscribe(
        response => this.onSuccessCarregarContato(response),
        error => this.onErrorCarregarContato(error),
      );
  }

  onSuccessCarregarContato(response: Contato) {
    this.contatoForm.patchValue(response)
  }

  onErrorCarregarContato(error: any) {
    this.erroNoCarregamento = true;
    console.error(error);
  }

  exibeErro(nomeControle: string) {
    if (!this.contatoForm.controls[nomeControle]) {
      return false;
    }
    return this.contatoForm.controls[nomeControle].invalid && this.contatoForm.controls[nomeControle].touched;
  }

  validarCamposDoFormulario(form: FormGroup){
    Object.keys(form.controls).forEach(field => {
     const control =  this.contatoForm.controls[field];
     if(control instanceof FormControl){
      control.markAsTouched();
     }else if(control instanceof FormGroup){
       this.validarCamposDoFormulario(control);
     }
    
    });
  }
  onSubmit(){
    if (this.contatoForm.invalid) {
      this.validarCamposDoFormulario(this.contatoForm);
      return;
    }

    if(this.estaEditando()){
      this.salvarContato();
      return;
    }

    this.criarContato();
    
  }

  salvarContato(){
    this.contatosService.updateContato(this.idContato, this.contatoForm.value)
    .subscribe(
      response => this.onSuccessSalvarContato(),
      error => this.onError(),
    );
  }
  onSuccessSalvarContato(){
    this.toastr.success('sucesso!', 'contato editado com sucesso '),
    this.router.navigate(['contatos']);
  }

 

  criarContato(){
    this.contatosService.createContato(this.contatoForm.value)
      .subscribe(
        response => this.onSuccessCriarContato(),
        error => this.onError(),
      );
  }

  onSuccessCriarContato(){
    this.toastr.success('sucesso!', 'contato criado com sucesso '),
    this.router.navigate(['contatos']);
  }

  onError(){
    this.toastr.error('Erro!', 'Alguma coisa deu errado ')

  }
}
