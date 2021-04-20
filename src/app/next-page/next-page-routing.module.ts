import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NextPagePage } from './next-page.page';

const routes: Routes = [
  {
    path: '',
    component: NextPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NextPagePageRoutingModule {}
