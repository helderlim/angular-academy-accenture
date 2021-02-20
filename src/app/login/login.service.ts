import { Injectable } from '@angular/core';
import { of, throwError, timer } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  logar(email: string, senha: string){
    //return this.post(this.API_URL + '/auth', {})
    if (email === 'helderfelima16@gmail.com' && senha === '123'){
      return of({

        usuario: {
          nome: 'helder',
          sobrenome: 'Farias', 
          email: 'helderfelima16@gmail.com',
        },
        token: 'DKFNSO32NO54JN3I5N4%V%v5',
      }).pipe(
        delay(2000)
      )
    }
    return timer(3000).pipe(mergeMap(()=> throwError('USUARIO OU SENHA INVALIDOS '))); 
  }
}
