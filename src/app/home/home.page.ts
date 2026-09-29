import { Component, OnInit } from "@angular/core";

import { DataService, Item } from "../services/data";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";

import { addIcons } from "ionicons";
import {
  addOutline,
  sparklesOutline,
  calendarOutline,
  chevronForwardOutline,
  chatbubbleOutline,
  shirtOutline,
  bodyOutline,
  womanOutline,
  footstepsOutline,
  diamondOutline,
  trashOutline,
  reorderTwoOutline,
} from "ionicons/icons";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
  standalone: false,
})
export class HomePage implements OnInit {
  items: Item[] = [];

  dataHoje = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  categorias = [
    { nome: "Tops", icone: "shirt-outline" },
    { nome: "Calças", icone: "reorder-two-outline" },
    { nome: "Vestidos", icone: "woman-outline" },
    { nome: "Calçados", icone: "footsteps-outline" },
    { nome: "Acessórios", icone: "diamond-outline" },
  ];

  constructor(
    private dataService: DataService,
    private router: Router,
    private alertController: AlertController,
  ) {
    addIcons({
      addOutline,
      sparklesOutline,
      calendarOutline,
      chevronForwardOutline,
      chatbubbleOutline,
      shirtOutline,
      bodyOutline,
      womanOutline,
      footstepsOutline,
      diamondOutline,
      trashOutline,
    });
  }

  ngOnInit() {
    this.dataService.getItems().subscribe((res) => {
      this.items = res;
    });
  }

  irPara(rota: string) {
    this.router.navigateByUrl(rota);
  }

  addItem() {
    this.router.navigateByUrl("/item-detail");
  }

  editItem(item: Item) {
    this.router.navigateByUrl(`/item-detail/${item.id}`);
  }

  async deleteItem(id: string) {
    const alert = await this.alertController.create({
      header: "Confirmar Exclusão",
      message: "Tem certeza que deseja excluir?",
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          cssClass: "secondary",
        },
        {
          text: "Excluir",
          handler: () => {
            this.dataService.deleteItem(id);
          },
        },
      ],
    });

    await alert.present();
  }
}
