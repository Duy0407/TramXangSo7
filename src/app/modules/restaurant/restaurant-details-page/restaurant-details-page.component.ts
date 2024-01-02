import { Component, OnInit } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';

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

  public position: TooltipPosition = "below";
  // ['after', 'before', 'above', 'below', 'left', 'right'];
  public progressBar = [
    {title: 'Giá cả', value: 70, quantity: 70},
    {title: 'Dịch vụ', value: 30, quantity: 30},
    {title: 'Không gian', value: 10, quantity: 10},
    {title: 'Đồ ăn', value: 2, quantity: 2}, 
  ]
}
