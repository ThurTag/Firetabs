import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesDetailPage } from './pages-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PagesDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesDetailPageRoutingModule {}
