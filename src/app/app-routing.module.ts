import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { TabsPageModule } from './tabs/tabs.module';
// import { TabsPage } from './tabs/tabs.page';

// const routes: Routes = [
//   {
//     path: '',
//     component: TabsPage,
//     // children: [{path: 'home'}],
//     loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
//   },
//   {
//     path: '',
//     redirectTo: 'home',
//     pathMatch: 'full'
//   },
//   {
//     path: 'next-page',
//     loadChildren: () => import('./next-page/next-page.module').then( m => m.NextPagePageModule)
//   }
// ];

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'graph',
    loadChildren: () => import('./graph/graph.module').then( m => m.GraphPageModule)
  },
  {
    path: 'file',
    loadChildren: () => import('./file/file.module').then( m => m.FilePageModule)
  },
  {
    path: 'abstract-class',
    loadChildren: () => import('./abstract-class/abstract-class.module').then( m => m.AbstractClassPageModule)
  },
  {
    path: 'module-one',
    loadChildren: () => import('./module-one/module-one.module').then( m => m.ModuleOnePageModule)
  },
  {
    path: 'interfaces',
    loadChildren: () => import('./interfaces/interfaces.module').then( m => m.InterfacesPageModule)
  },
  {
    path: 'database',
    loadChildren: () => import('./database/database.module').then( m => m.DatabasePageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'exam',
    loadChildren: () => import('./exam/exam.module').then( m => m.ExamPageModule)
  },
  {
    path: 'exam',
    loadChildren: () => import('./exam/exam.module').then( m => m.ExamPageModule)
  }
 ];
 
// const routes: Routes = [
//   {
//     path: 'home',
//     loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
//   },
//   {
//     path: '',
//     redirectTo: 'home',
//     pathMatch: 'full'
//   },
//   {
//     path: 'next-page',
//     loadChildren: () => import('./next-page/next-page.module').then( m => m.NextPagePageModule)
//   },
//   {
//     path: 'tabs',
//     loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
//   },
// ];

// import { HotToastModule } from '@ngneat/hot-toast';

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    // ,HotToastModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
