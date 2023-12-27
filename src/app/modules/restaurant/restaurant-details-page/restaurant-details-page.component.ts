import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-details-page',
  templateUrl: './restaurant-details-page.component.html',
  styleUrls: ['./restaurant-details-page.component.scss']
})
export class RestaurantDetailsPageComponent implements OnInit {
  public heart:boolean = false;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public toggleHeart(){
    this.heart = !this.heart
  }

  public amenities = [1,1,1,1,1,1,1,1,1];
  public menu = [1,2,3,1,1,1,1];
  public dishs = [
    'Magarita (Nàng thơ Magarita)',
    'Combo Sliver',
    'Magarita (Nàng thơ Magarita)',
    'Combo Sliver',
    'Magarita (Nàng thơ Magarita)',
    'Combo Sliver',
    'Magarita (Nàng thơ Magarita)',
    'Combo Sliver',
  ];
}
