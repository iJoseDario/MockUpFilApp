import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaTurnos } from "../../data/data.ListaTurnos";
import { ListaTurnosInterface } from "../../interfaces/listaTurnos.interface";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  listaTurnos:ListaTurnosInterface[]=[];

  constructor(public navCtrl: NavController) {
    this.listaTurnos = ListaTurnos.slice(0);
  }

}
