import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserprojPageRoutingModule } from './userproj-routing.module';

import { UserprojPage } from './userproj.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserprojPageRoutingModule
  ],
  declarations: [UserprojPage]
})
export class UserprojPageModule {}
