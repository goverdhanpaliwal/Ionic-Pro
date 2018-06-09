import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriversListPage } from './drivers-list';

@NgModule({
  declarations: [
    DriversListPage,
  ],
  imports: [
    IonicPageModule.forChild(DriversListPage),
  ],
})
export class DriversListPageModule {}
