import { Component } from '@angular/core'

import { NavController, ItemSliding } from 'ionic-angular';

import {NotaInterface} from '../../interfaces/notaInterface';

import {WebService} from '../../providers/web-service';

import {DetalhePage} from '../detalhe/detalhe';
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
    public listaNotas: NotaInterface[];
    public editando: boolean = false;

    constructor(public navCtrl: NavController, public WebService: WebService){}

//Quando abrir a página - fica no cache
    ionViewDidLoad() {
        console.log('ionViewDidLoad');
    }

//Quando abrir o formulário - Não fica no cache
    ionViewDidEnter() {
        console.log('ionViewDidEnter');
        //this.WebService.getNotas().then(data => console.log(data));
        //Criamos a lista de notas, chamando a interface a cima
        this.WebService.getNotas().then(data => this.listaNotas = data);
    }

//Método de abre o formulário
        AbreFormulario() {
            this.editando = false;
            console.log('AbreFormulario');
            this.abreForm = !this.abreForm;
            this.nota = {Title:'', Body:''};
            if (this.abreForm) {
                this.tituloPagina = "Adicionar Nota -";
            }else{
                this.tituloPagina = "Notas -"
            }
        }

    adicionaNota(){
        console.log(this.nota);
        //this.WebService.addNota(this.nota).then(data => console.log(data));
        //limpa o formulário
        let nota = this.nota;
        this.nota = {Title:'', Body:''};
        //Fecha o formulário
        this.abreForm = false;

        this.WebService.addNota(nota).then(data => this.listaNotas.push(data));
    }

    abreDetalhe(nota: NotaInterface){
        this.navCtrl.push(DetalhePage, {nota:nota});   

    }

    abreEditar(nota: NotaInterface, listaopcoes:ItemSliding) {
        this.editando = true;
        listaopcoes.close();
        this.abreForm = true;
        this.tituloPagina = "Editar Nota";
        this.nota = nota;
    }

    editarNota() {
    this.WebService.editNota(this.nota).then(data => this.atualizarNota(this.nota));

}

    atualizarNota(nota: NotaInterface) {
        this.abreForm = false;
        for(let k in this.listaNotas) {
            if(this.listaNotas[k].Id == nota.Id) {
                this.listaNotas[k] = nota;
            }
        }
    }
}