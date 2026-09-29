import { Component } from "@angular/core";

@Component({
  selector: "app-tab5",
  templateUrl: "tab5.page.html",
  styleUrls: ["tab5.page.scss"],
  standalone: false,
})
export class Tab5Page {
  stats = [
    { n: "28", l: "Peças" },
    { n: "4", l: "Looks" },
    { n: "12", l: "Seguidores" },
    { n: "5", l: "Seguindo" },
  ];

  favoritos = [
    { nome: "Minimalista Clean", img: "1581044777550-4cfa60707c03" },
    { nome: "Noite Romântica", img: "1515886657613-9f3515b0c78f" },
  ];

  img(id: string, w = 400, h = 500) {
    return `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;
  }
}
