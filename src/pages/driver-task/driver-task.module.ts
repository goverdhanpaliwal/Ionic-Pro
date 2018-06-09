import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverTaskPage } from './driver-task';

@NgModule({
  declarations: [
    DriverTaskPage,
  ],
  imports: [
    IonicPageModule.forChild(DriverTaskPage),
  ],
})
export class DriverTaskPageModule {}
