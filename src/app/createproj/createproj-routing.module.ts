import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateprojPage } from './createproj.page';

const routes: Routes = [
  {
    path: '',
    component: CreateprojPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateprojPageRoutingModule {}
