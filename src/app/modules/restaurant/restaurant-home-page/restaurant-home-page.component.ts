import { Component, OnInit } from '@angular/core';
import { Categories } from '../../../shared/Categories/Categories';

@Component({
  selector: 'app-restaurant-home-page',
  templateUrl: './restaurant-home-page.component.html',
  styleUrls: ['./restaurant-home-page.component.scss']
})
export class RestaurantHomePageComponent implements OnInit {
  public slideCategories = {
    slidesToShow: 8,
    slidesToScroll: 2,
    prevArrow: '<button class="slick-prev prev-arrow"><img src="assets/image/icon/SlickPrev.svg" alt="" /></button>',
    nextArrow: '<button class="slick-next next-arrow"><img src="assets/image/icon/SlickNext.svg" alt="" /></button>',
    // infinite: true
  }
  public categories = Categories;

  public listItemRestaurantNew = [
    {image: 'assets/image/restaurant/Item1.png'},
    {image: 'assets/image/restaurant/Item2.png'},
    {image: 'assets/image/restaurant/Item3.png'},
    {image: 'assets/image/restaurant/Item4.png'},
    {image: 'assets/image/restaurant/Item1.png'},
    {image: 'assets/image/restaurant/Item2.png'},
    {image: 'assets/image/restaurant/Item3.png'},
    {image: 'assets/image/restaurant/Item4.png'},
  ];

  constructor(){}

  ngOnInit(): void {
    
  }
}
