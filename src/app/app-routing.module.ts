import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () =>
      import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

  {
    path: 'item-detail',
    loadChildren: () =>
      import('./pages/pages-detail/pages-detail.module').then(
        m => m.PagesDetailPageModule
      )
  },

  {
    path: 'item-detail/:id',
    loadChildren: () =>
      import('./pages/pages-detail/pages-detail.module').then(
        m => m.PagesDetailPageModule
      )
  },

  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
