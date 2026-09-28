import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';

import { Tab5Page } from './tab5.page';
import { Tab5PageRoutingModule } from './tab5-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Tab5PageRoutingModule,

    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent
  ],
  declarations: [Tab5Page]
})
export class Tab5PageModule {}
