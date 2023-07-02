import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateprojPageRoutingModule } from './createproj-routing.module';

import { CreateprojPage } from './createproj.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateprojPageRoutingModule
  ],
  declarations: [CreateprojPage]
})
export class CreateprojPageModule {}
