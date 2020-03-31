import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'did-you-know',
  templateUrl: './did-you-know.component.html',
  styleUrls: ['./did-you-know.component.scss']
})
export class DidYouKnowComponent implements OnInit {

  facts: { img: string, content: string }[] = [];
  factIndex: number;

  constructor() {
    this.facts.push({
      img: 'https://greece.greekreporter.com/files/ethnikos_ymnos.jpg',
      content: '„Химнът на свободата“ е написан през 1823 г. от Дионисиос Соломос. Служи за текст на националния химн на Гърция от 1865 г. и на Република Кипър от 1966 г. Това е най-дългият текст на национален химн в света. Музиката е написана от Николаос Мандзарос през 1865 г.' });

    this.facts.push({
      img: 'assets/imgs/did-you-know/nafplio.jpg',
      content: 'Първата столица на модерната гръцка държава е град Нафплио. През 1834 г. столицата е преместена в Атина.'
    });

    this.factIndex = Math.floor(Math.random() * Math.floor(this.facts.length));
  }

  ngOnInit() {}

}
