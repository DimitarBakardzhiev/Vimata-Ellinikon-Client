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
      img: 'assets/imgs/did-you-know/ethn-imnos.jpg',
      content: '„Химнът на свободата“ е написан през 1823 г. от Дионисиос Соломос. Служи за текст на националния химн на Гърция от 1865 г. и на Република Кипър от 1966 г. Това е най-дългият текст на национален химн в света. Музиката е написана от Николаос Мандзарос през 1865 г.'
    });

    this.facts.push({
      img: 'assets/imgs/did-you-know/nafplio.jpg',
      content: 'Първата столица на модерната гръцка държава е град Нафплио. През 1834 г. столицата е преместена в Атина.'
    });

    this.facts.push({
      img: 'assets/imgs/did-you-know/sfragida-ellhnikhs-dhmokratias.png',
      content: 'Официалното име на Гърция е Елинска република. Гърците наричат себе си елини, а езика си елинки.'
    });

    this.facts.push({
      img: 'assets/imgs/did-you-know/crete.jpg',
      content: 'На територията на Гърция няма точка, която да е отдалечена на повече от 137 километра от морето.'
    });

    this.facts.push({
      img: 'assets/imgs/did-you-know/fantaros.jpg',
      content: 'Военната служба в Гърция е задължителна за всички младежи. Тя продължава между 6 и 9 месеца.'
    });

    this.facts.push({
      img: 'assets/imgs/did-you-know/mountza.PNG',
      content: 'Жестът с отворена длан е обиден в Гърция. Старайте се да го избягвате.'
    });

    this.facts.push({
      img: 'assets/imgs/did-you-know/tourists.jpg',
      content: 'Туризмът генерира около 18% от БВП на Гърция. Около 1/5 от работната сила на страната е концентрирана в този сектор.'
    });

    this.facts.push({
      img: 'assets/imgs/did-you-know/couple-silhouette-umbrella-kissing.png',
      content: 'Гърция е най-сексуалноактивната страна в света според производителите на презервативи.'
    });

    this.facts.push({
      img: 'assets/imgs/did-you-know/fleet.png',
      content: 'Гърция притежава най-големия по тонаж търговски флот на света.'
    });

    this.facts.push({
      img: 'assets/imgs/did-you-know/drahmes.jpg',
      content: 'Драхмата е най-старата европейска валута. Тя бе заменена с еврото през 2002 година.'
    });

    this.factIndex = Math.floor(Math.random() * Math.floor(this.facts.length));
  }

  ngOnInit() {}

}
