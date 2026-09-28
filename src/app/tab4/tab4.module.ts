import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';

import { Tab4Page } from './tab4.page';
import { Tab4PageRoutingModule } from './tab4-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Tab4PageRoutingModule,

    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent
  ],
  declarations: [Tab4Page]
})
export class Tab4PageModule {}
