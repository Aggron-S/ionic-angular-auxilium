import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserprojPage } from './userproj.page';

const routes: Routes = [
  {
    path: '',
    component: UserprojPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserprojPageRoutingModule {}
