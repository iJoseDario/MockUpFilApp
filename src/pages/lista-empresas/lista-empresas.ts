import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ListaEmpresas } from "../../data/data.ListaEmpresas";
import { ListaEmpresasInterface } from "../../interfaces/listaEmpresas.interface";

import { ListaSedesPage } from "../lista-sedes/lista-sedes";

@IonicPage()
@Component({
  selector: 'page-lista-empresas',
  templateUrl: 'lista-empresas.html',
})
export class ListaEmpresasPage {

  listEmpresas:ListaEmpresasInterface[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.listEmpresas = ListaEmpresas.slice(0);
  }

  verSedes(){
    this.navCtrl.push("ListaSedesPage");
  }

}
