import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {
  @Input()  // Decoratore inserito sopra alla prop testo per personalizzare il titolo 
  testo:string = "";
}
