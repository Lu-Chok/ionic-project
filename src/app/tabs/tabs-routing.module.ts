import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

// const routes: Routes = [
//   {
//     path: '',
//     component: TabsPage,
//     children: [{path: 'home'}],
//     loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
//   }
// ];

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: "home",
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: '',
        redirectTo: "home",
        pathMatch: "full"
        // loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'next-page',
        loadChildren: () => import('../next-page/next-page.module').then( m => m.NextPagePageModule)
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
