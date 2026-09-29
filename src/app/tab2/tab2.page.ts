import { Component } from "@angular/core";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
  standalone: false,
})
export class Tab2Page {
  pastas = [
    {
      nome: "Looks de Trabalho",
      desc: "Combinações para o escritório",
      looks: 3,
      fav: true,
      tags: ["trabalho", "social"],
      img: "1581044777550-4cfa60707c03",
    },
    {
      nome: "Noite e Balada",
      desc: "Para arrasar nas saídas noturnas",
      looks: 2,
      fav: true,
      tags: ["noite", "festa"],
      img: "1515886657613-9f3515b0c78f",
    },
    {
      nome: "Casual do Dia a Dia",
      desc: "Confortável e despojado",
      looks: 3,
      fav: false,
      tags: ["casual", "conforto"],
      img: "1529139574466-a303027c1d8b",
    },
    {
      nome: "Streetwear Urbano",
      desc: "Estilo das ruas",
      looks: 2,
      fav: false,
      tags: ["streetwear"],
      img: "1552902865-b72c031ac5ea",
    },
  ];

  img(id: string, w = 400, h = 500) {
    return `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;
  }

  novaPasta() {
    const nome = prompt("Nome da pasta:");
    if (nome) {
      this.pastas.push({
        nome,
        desc: "Nova pasta",
        looks: 0,
        fav: false,
        tags: [],
        img: "1483985988355-763728e1935b",
      });
    }
  }
}
