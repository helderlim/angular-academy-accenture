import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss']
})
export class ExercicioDataBindingComponent implements OnInit {

  @Input()
  palavra!: string;
  @Input()
  color!: string;
  @Input()
  meuTitulo!: string;

  //envia informações para o componente pai
  @Output() clicado = new EventEmitter();

  botaoClicado(){
    alert('Botão clicado! ');
  }

  imageURL = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  initalValue =  'valor inicial';
  isDisabled = true;
  accessibilityText= 'Um texto acessivel a ser lido ';

  constructor() { 
    setTimeout(() => {
      console.log('isDisabled: ', this.isDisabled);
      this.isDisabled= false;
      console.log('isDisabled: ', this.isDisabled);
    },3000 );

  }

  ngOnInit(): void {
  }

  getImageURL() {
   return this.imageURL;
  }

  onClickBotaoEmissor(_$event: any){
    console.log('Devo emitir informações para o componente pai. ');
    //emitindo o evento 
    this.clicado.emit(_$event);
    
  }

}
