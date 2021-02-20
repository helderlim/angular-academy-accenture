import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setUsuario(usuario: any){
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  getUsuario(){
    const usuarioGuardado = localStorage.getItem('usuario');
    if (usuarioGuardado){
      return JSON.parse(usuarioGuardado);
    }
    return null;
  }
}
