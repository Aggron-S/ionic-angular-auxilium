import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserprojContentPage } from './userproj-content.page';

const routes: Routes = [
  {
    path: '',
    component: UserprojContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserprojContentPageRoutingModule {}
