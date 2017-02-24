import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {NotaInterface} from '../interfaces/notaInterface';

/*
  Generated class for the WebService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WebService {

  private url: string = "http://devmedianotesapi.azurewebsites.net/";
  //Tem que incluir o Headers no import do angular http, em cima dessa pagina
  private headers = new Headers({'Accept':'application/json'})

  constructor(public http: Http) {
    console.log('Hello WebService Provider');
  }

  addNota(nota: NotaInterface) {

      return this.http.post(this.url+'api/notes',nota, {headers:this.headers})
      //pesquisar a diferenca entre toPromise e map
      .toPromise()
      .then(res => res.json());
  }

}
