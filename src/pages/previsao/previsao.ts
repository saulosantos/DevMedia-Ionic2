import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {NotaInterface} from '../../interfaces/notaInterface';

import {WebService} from '../../providers/web-service';

/*
  Generated class for the Previsao page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-previsao',
  templateUrl: 'previsao.html'
})
export class PrevisaoPage {

  public cidade : string = 'sao paulo';
  public notaPrevisao : NotaInterface = {Title: '', Body: ''}

  constructor(public navCtrl: NavController, public navParams: NavParams, public WebService: WebService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrevisaoPage');
            this.WebService.getPrevisao(this.cidade).then(data => {
              console.log(data);
              this.notaPrevisao.Title = 'Previsão em  '+data.name;
              this.notaPrevisao.Body = 'Temperatura em '+data.main.temp+ ' e ' +data.weather[0].description;
            });
  }

}
