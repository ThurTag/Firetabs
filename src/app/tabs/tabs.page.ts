import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import {
  homeOutline, shirtOutline, starOutline, compassOutline, personOutline,
  addOutline, sparklesOutline, calendarOutline, chevronForwardOutline,
  chatbubbleOutline, bodyOutline, womanOutline, footstepsOutline,
  diamondOutline, trashOutline, reorderTwoOutline, pricetagOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: false,
})
export class TabsPage {
  constructor() {
    addIcons({
      homeOutline, shirtOutline, starOutline, compassOutline, personOutline,
      addOutline, sparklesOutline, calendarOutline, chevronForwardOutline,
      chatbubbleOutline, bodyOutline, womanOutline, footstepsOutline,
      diamondOutline, trashOutline, reorderTwoOutline, pricetagOutline
    });
  }
}