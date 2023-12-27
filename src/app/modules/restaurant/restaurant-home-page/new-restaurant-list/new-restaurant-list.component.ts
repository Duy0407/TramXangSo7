import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-restaurant-list',
  templateUrl: './new-restaurant-list.component.html',
  styleUrls: ['./new-restaurant-list.component.scss']
})
export class NewRestaurantListComponent implements OnInit{
  @Input() receiveData!: {image: string}[];

  ngOnInit(): void {
  }

}
