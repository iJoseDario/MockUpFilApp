import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaSedesPage } from './lista-sedes';

@NgModule({
  declarations: [
    ListaSedesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaSedesPage),
  ],
})
export class ListaSedesPageModule {}
