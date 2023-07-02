import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscoverContentPageRoutingModule } from './discover-content-routing.module';

import { DiscoverContentPage } from './discover-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscoverContentPageRoutingModule
  ],
  declarations: [DiscoverContentPage]
})
export class DiscoverContentPageModule {}
