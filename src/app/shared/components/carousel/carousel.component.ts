import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent implements OnInit {
  ngOnInit(): void {}

  showSlider() {
    let listItemDom = document.querySelector('.carousel .list');
    let thumDom = document.querySelector('.carousel .thumbnail');
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumb = document.querySelectorAll('.carousel .thumbnail .item');

    listItemDom?.appendChild(itemSlider[0]);

    thumDom?.appendChild(itemThumb[0]);
    console.log(itemThumb[0]);
  }
}
