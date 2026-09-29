import { Component } from "@angular/core";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"],
  standalone: false,
})
export class Tab3Page {
  filtros = ["Tudo", "Tops", "Calças", "Vestidos", "Calçados"];
  filtro = "Tudo";

  pecas = [
    {
      nome: "Blusa linho off-white",
      cat: "Tops",
      img: "1594938298603-c8148c4b4a3b",
    },
    {
      nome: "Calça wide leg bege",
      cat: "Calças",
      img: "1584464491033-06628f3a6b7b",
    },
    {
      nome: "Vestido midi lavanda",
      cat: "Vestidos",
      img: "1595777457583-95e059d581b8",
    },
    { nome: "Jaqueta jeans", cat: "Tops", img: "1551537482-f2075a1d41f2" },
    {
      nome: "Saia midi plissada",
      cat: "Vestidos",
      img: "1583496661160-fb5218afa9a9",
    },
    {
      nome: "Tênis chunky branco",
      cat: "Calçados",
      img: "1542291026-7eec264c27ff",
    },
  ];

  looks = [
    {
      nome: "Minimalista Clean",
      estilo: "Minimalista",
      ocasiao: "Trabalho",
      ia: true,
      img: "1581044777550-4cfa60707c03",
    },
    {
      nome: "Fim de Semana Fácil",
      estilo: "Casual",
      ocasiao: "Lazer",
      ia: false,
      img: "1529139574466-a303027c1d8b",
    },
    {
      nome: "Noite Romântica",
      estilo: "Romântico",
      ocasiao: "Noite",
      ia: true,
      img: "1515886657613-9f3515b0c78f",
    },
  ];

  pecasFiltradas() {
    return this.filtro === "Tudo"
      ? this.pecas
      : this.pecas.filter((p) => p.cat === this.filtro);
  }

  img(id: string, w = 400, h = 500) {
    return `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format&q=80`;
  }

  gerar() {
    alert("Gerando look com IA... (em breve)");
  }
}
