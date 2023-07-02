import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscoverContentPage } from './discover-content.page';

const routes: Routes = [
  {
    path: '',
    component: DiscoverContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscoverContentPageRoutingModule {}
