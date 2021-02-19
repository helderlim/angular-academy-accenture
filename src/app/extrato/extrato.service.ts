import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  constructor(
    private http: HttpClient,
    ) { }
   
    getTransacoes() {
      return this.http.get('https://my-json-server.typicode.com/vitorfgsantos/fake-api/db')
    
    }

}
