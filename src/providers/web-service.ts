import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { NotaInterface } from '../interfaces/notaInterface';

/*
  Generated class for the WebService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WebService {

  private url: string = "http://devmedianotesapi.azurewebsites.net/";

  private urlPrevisao: string = 'http://api.openweathermap.org/data/2.5/weather?APPID=6eb4a902c1efee0e576b2bfc34965085&lang=pt&units=metric&q=';
  //Tem que incluir o Headers no import do angular http, em cima dessa pagina
  private headers = new Headers({ 'Accept': 'application/json' })

  constructor(public http: Http) {
    console.log('Hello WebService Provider');
  }

  addNota(nota: NotaInterface) {

    return this.http.post(this.url + 'api/notes', nota, { headers: this.headers })
      //pesquisar a diferenca entre toPromise e map
      .toPromise()
      .then(res => res.json());
  }

  getNotas() {

    return this.http.get(this.url + 'api/notes')
      //pesquisar a diferenca entre toPromise e map
      .toPromise()
      .then(res => res.json());
  }


  editNota(nota: NotaInterface) {

    return this.http.put(this.url + 'api/notes/' + nota.Id, nota, { headers: this.headers })
      //pesquisar a diferenca entre toPromise e map
      .toPromise()
      .then(res => res.json());
  }

    deletaNota(nota: NotaInterface) {

    return this.http.delete(this.url + 'api/notes/' + nota.Id, { headers: this.headers })
      //pesquisar a diferenca entre toPromise e map
      .toPromise()
      .then(res => res.json());
  }


  getPrevisao(cidade: string) {
        return this.http.get(this.urlPrevisao + cidade)
      .toPromise()
      .then(res => res.json());
  }



}
