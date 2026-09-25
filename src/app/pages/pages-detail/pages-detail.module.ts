import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { PagesDetailPageRoutingModule } from './pages-detail-routing.module';

import { PagesDetailPage } from './pages-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagesDetailPageRoutingModule
  ],
  declarations: [PagesDetailPage]
})
export class PagesDetailPageModule {}
