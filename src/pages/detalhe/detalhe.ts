import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {NotaInterface} from '../../interfaces/notaInterface';

/*
  Generated class for the Detalhe page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html'
})
export class DetalhePage {
    public nota: NotaInterface = {Title:"", Body:""};

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log(this.navParams.get('nota'));
    console.log('ionViewDidLoad DetalhePage');
    this.nota = this.navParams.get('nota');
  }

}
