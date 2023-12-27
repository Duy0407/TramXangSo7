import { Component } from '@angular/core';

@Component({
  selector: 'app-list-featured-restaurants',
  templateUrl: './list-featured-restaurants.component.html',
  styleUrls: ['./list-featured-restaurants.component.scss']
})
export class ListFeaturedRestaurantsComponent {
  public slideOutstanding = {
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev prev-arrow"><img src="assets/image/icon/SlickPrev.svg" alt="" /></button>',
    nextArrow: '<button class="slick-next next-arrow"><img src="assets/image/icon/SlickNext.svg" alt="" /></button>',
  }
  public outstanding = [1,2,3,4];
}
