import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ListaProdottiComponent } from "./components/lista-prodotti/lista-prodotti.component";
import { TitleComponent } from "./components/title/title.component";
import { Prodotto } from './models/Prodotto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ListaProdottiComponent, TitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-basics';
  
  prodotti_novita: Prodotto[] = [
    {
      nome: "Bici",
      desc: "Nera",
      prezzo: 100,
      foto: "https://picsum.photos/300/200"
    },
    {
      nome: "Friggitrice",
      desc: "Ad aria",
      prezzo: 80,
      foto: "https://picsum.photos/300/200"
    },
    {
      nome: "Sandali",
      desc: "Pelle",
      prezzo: 30,
      foto: "https://picsum.photos/300/200"
    },
    {
      nome: "Scooter",
      desc: "Ad aria",
      prezzo: 1200,
      foto: "https://picsum.photos/300/200"
    }
  ]
  prodotti_suggeriti: Prodotto[] = [
    {
      nome: "Bici",
      desc: "Rossa",
      prezzo: 300,
      foto: "https://picsum.photos/300/200"
    },
    {
      nome: "Chitarra",
      desc: "Elettrica",
      prezzo: 130,
      foto: "https://picsum.photos/300/200"
    },
    {
      nome: "Aspirapolvere",
      desc: "Senza filo",
      prezzo: 75,
      foto: "https://picsum.photos/300/200"
    },
    {
      nome: "Chitarra",
      desc: "Classica",
      prezzo: 110,
      foto: "https://picsum.photos/300/200"
    }
  ]
}
