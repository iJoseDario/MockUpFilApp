import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ListaEmpresas } from "../../data/data.ListaEmpresas";
import { ListaEmpresasInterface } from "../../interfaces/listaEmpresas.interface";

import { ListaSedes } from "../../data/data.ListaSedes";
import { ListaSedesInterface } from "../../interfaces/listaSedes.interface";

import { ListaSedesPage } from "../lista-sedes/lista-sedes";

@IonicPage()
@Component({
  selector: 'page-lista-empresas',
  templateUrl: 'lista-empresas.html',
})
export class ListaEmpresasPage {

  listEmpresas:ListaEmpresasInterface[]=[];
  listSedes:ListaSedesInterface[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.listEmpresas = ListaEmpresas.slice(0);
    this.listSedes = ListaSedes.slice(0);
  }

  verSedes(nombreEmpresa:string = "BBVA"){
    console.log("El nombre de la empresa es: " + nombreEmpresa);
    this.navCtrl.push(ListaSedesPage, {'NombreEmpresa': nombreEmpresa} );
  }

}
