import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, AlertController } from 'ionic-angular';

import { ListaTurnos } from "../../data/data.ListaTurnos";
import { ListaTurnosInterface } from "../../interfaces/listaTurnos.interface";

import { ListaEmpresasPage } from "../lista-empresas/lista-empresas";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  listaTurnos:ListaTurnosInterface[] = [];
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public menuCtrl: MenuController) {
      
    this.listaTurnos = ListaTurnos.slice(0);
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Nuevo Turno',
      subTitle: 'Esta opción contara con varias opciones que te permitirán crear nuevos turnos.',
      buttons: ['Ok']
    });
    alert.present();
  }

  verEmpresas(){
    this.navCtrl.push("ListaEmpresasPage");
  }

}