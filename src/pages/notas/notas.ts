import { Component } from '@angular/core'

import { NavController } from 'ionic-angular';

import {NotaInterface} from '../../interfaces/notaInterface';

import {WebService} from '../../providers/web-service';
//Declaração da interface
//interface NotaInterface{
 //   Id?: number;
  //  Title: string;
   // Body: string;
//}

@Component({
    templateUrl: 'notas.html'
})

export class NotasPage {
    public abreForm: boolean = false;
    public tituloPagina: string = "Notas";
    //Utilização da interface
    public nota: NotaInterface = {Title:"", Body:""};

    constructor(public navCtrl: NavController, public WebService: WebService){}

//Método de abre o formulário
        AbreFormulario() {
            console.log('AbreFormulario');
            this.abreForm = !this.abreForm;
            if (this.abreForm) {
                this.tituloPagina = "Adicionar Nota";
            }else{
                this.tituloPagina = "Notas"
            }
        }

    adicionaNota(){
        console.log(this.nota);
        this.WebService.addNota(this.nota).then(data => console.log(data));
    }
}