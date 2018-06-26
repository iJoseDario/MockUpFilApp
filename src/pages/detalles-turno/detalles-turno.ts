import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListaTurnosInterface } from "../../interfaces/listaTurnos.interface";

@Component({
  selector: 'page-detalles-turno',
  templateUrl: 'detalles-turno.html',
})
export class DetallesTurnoPage {

  listaTurnos: ListaTurnosInterface[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.listaTurnos = this.navParams.get("Empresa");
  }

}
