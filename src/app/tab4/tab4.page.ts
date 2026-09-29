import { Component } from "@angular/core";

@Component({
  selector: "app-tab4",
  templateUrl: "tab4.page.html",
  styleUrls: ["tab4.page.scss"],
  standalone: false,
})
export class Tab4Page {
  filtros = [
    "Todos",
    "Minimalista",
    "Casual",
    "Streetwear",
    "Y2K",
    "Romântico",
  ];
  filtro = "Todos";

  imagens = [
    "1469334031218-e382a71b716b",
    "1483985988355-763728e1935b",
    "1445205170230-053b83016050",
    "1490481651871-ab68de25d43d",
    "1509631179647-0177331693ae",
    "1434389677669-e08b4cac3105",
    "1487222477271-d7943e72ca5a",
    "1515886657613-9f3515b0c78f",
  ];

  img(id: string, w = 400, h = 500) {
    return `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;
  }
}
