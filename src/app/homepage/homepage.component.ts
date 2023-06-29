import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit, AfterViewInit {
  ngOnInit() {
    AOS.init();
  }
  slides = [
    { img: '../../assets/hero1.png' },
    { img: '../../assets/hero2.png' },
    { img: '../../assets/hero3.png' },
    { img: '../../assets/hero2.png' },
    { img: '../../assets/bg.png' },
  ];
  slideConfig = { slidesToShow: 4, slidesToScroll: 1 };

  ngAfterViewInit() {
    AOS.init();
  }
}
