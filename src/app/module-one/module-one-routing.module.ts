import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModuleOnePage } from './module-one.page';

const routes: Routes = [
  {
    path: '',
    component: ModuleOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleOnePageRoutingModule {}
