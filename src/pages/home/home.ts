import { Component } from '@angular/core';
import { NavController, AlertController, MenuController } from 'ionic-angular';
import { ListaTurnos } from "../../data/data.ListaTurnos";
import { ListaTurnosInterface } from "../../interfaces/listaTurnos.interface";
import { DetallesTurnoPage } from "../detalles-turno/detalles-turno";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  listaTurnos: ListaTurnosInterface[] = [];
  
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public menuCtrl: MenuController) {
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

  navegarDetallesTurno(Empresa: any) {
    this.navCtrl.push(DetallesTurnoPage, { 'listaTurnos': Empresa });
  }

}
