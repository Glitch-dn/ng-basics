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

  prodotto:Prodotto = {id: 1, nome: 'Cibo per cani', descrizione: 'Cibo per cani di alta qualità', prezzo: 20.99, inOfferta: true}

  prodotto2?:Prodotto; //prodotto2 è opzionale, se non lo valorizzo non da errore
  // ? è un operatore che indica che la proprietà è opzionale, quindi può essere presente o meno nell'oggetto. Se non viene valorizzata, il valore di prodotto2 sarà undefined.
  bici?: Prodotto = {id: 3, nome: 'Bici', descrizione: 'Bici da corsa', prezzo: 500, inOfferta: false}

  esempio(){
    this.prodotto2 = {id: 2, nome: 'Cibo per gatti', descrizione: 'Cibo per gatti di alta qualità', prezzo: 15.99, inOfferta: false}//se mettessi undefined non darebbe errore, ma se mettessi null darebbe errore perchè null non è un tipo di dato accettato per prodotto2. Se volessi accettare anche null dovrei scrivere Prodotto | null
    let eta = 16;
    let patentato = false;
    // if (eta >= 18) {
    //   patentato = true;
    // }
    // else {
    //   patentato = false;
    // }
    patentato = (eta >= 18) ? true : false; //operatore ternario che è diverso dal ? del prodotto2
  }
}

// let eta:number;
// eta = 35; //se non inizializzo la variabile ma la dichiaro, devo specificare il tipo altrimenti diventa any