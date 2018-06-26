import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TurnosDetallesPage } from './turnos-detalles';

@NgModule({
  declarations: [
    TurnosDetallesPage,
  ],
  imports: [
    IonicPageModule.forChild(TurnosDetallesPage),
  ],
})
export class TurnosDetallesPageModule {}
