import { Component, OnInit } from '@angular/core';
import { BreadCrumb } from '../../../breadcrumb/bread-crumb';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  title: string = 'Часовник';
  breadcrumbs: BreadCrumb[] = [new BreadCrumb('Начало', '/'), new BreadCrumb(this.title, '/часовник')];

  clocks: { time: string, img: string }[] = [];
  
  constructor(private titleService: Title) {
    this.clocks = [
      { time: 'Η ώρα είναι πέντε', img: 'assets/imgs/lessons/clocks/5.jpg' },
      { time: 'Η ώρα είναι έντεκα και τέταρτο', img: 'assets/imgs/lessons/clocks/tetarto.webp' },
      { time: 'Η ώρα είναι έξι και είκοσι πέντε', img: 'assets/imgs/lessons/clocks/25.gif' },
      { time: 'Η ώρα είναι δέκα παρά τέταρτο', img: 'assets/imgs/lessons/clocks/quarter-to.png' },
      { time: 'Η ώρα είναι έξι παρά πέντε', img: 'assets/imgs/lessons/clocks/5-to.gif' }
    ];

    this.titleService.setTitle(this.title);
  }

  ngOnInit() {
  }

}
