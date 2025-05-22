import { Component } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";
import { Animale } from "../../models/Animale";
import { Prodotto } from '../../models/Prodotto';

@Component({
  selector: 'app-header',
  imports: [LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  nome = 'Jotaro Kujo'; //type inference, se scrivo così in automatico è stringa e non c'è bisogno di esplicitare il type come sotto. nel caso di una variabile istanziata ma non valorizzata dobbiamo indicare il tipo altrimenti mette any in automatico e diventa debolmente tipizzata 
  anno:number = 1987;

  animale:Animale = {nome: 'JoJo', razza: 'PitBull'}
  prodotto?: Prodotto;
  bici?: Prodotto = {
    nome: "Bicicletta",
    prezzo: 120,
    desc: "Test",
    foto: ""
  };
  esempio() {
    this.prodotto = {
      desc: "Test",
      foto: "",
      nome: "Bicicletta",
      prezzo: 120,
    };
    let eta = 16;
    let patentato = false;
    if (eta >= 18) {
      patentato = true;
    } else {
      patentato = false;
    }
    patentato = eta >= 18 ? true : false; // operatore ternario
  }
}

// let eta:number;
// eta = 35; //se non inizializzo la variabile ma la dichiaro, devo specificare il tipo altrimenti diventa any