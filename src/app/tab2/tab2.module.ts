import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonContent, IonIcon } from "@ionic/angular";

import { Tab2Page } from "./tab2.page";
import { Tab2PageRoutingModule } from "./tab2-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    IonContent,
    IonIcon,
  ],
  declarations: [Tab2Page],
})
export class Tab2PageModule {}
