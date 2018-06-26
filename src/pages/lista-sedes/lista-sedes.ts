import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ListaSedes } from "../../data/data.ListaSedes";
import { ListaSedesInterface } from "../../interfaces/listaSedes.interface";

import { ListaServiciosPage } from "../lista-servicios/lista-servicios";

@IonicPage()
@Component({
  selector: 'page-lista-sedes',
  templateUrl: 'lista-sedes.html',
})
export class ListaSedesPage {

  listSedes:ListaSedesInterface[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.listSedes = this.navParams.get("nombreEmpresa");
  }

  verServicios(){
    this.navCtrl.push("ListaServiciosPage");
  }

}
