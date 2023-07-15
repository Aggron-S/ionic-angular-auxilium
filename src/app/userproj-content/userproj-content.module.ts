import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserprojContentPageRoutingModule } from './userproj-content-routing.module';

import { UserprojContentPage } from './userproj-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserprojContentPageRoutingModule
  ],
  declarations: [UserprojContentPage]
})
export class UserprojContentPageModule {}
