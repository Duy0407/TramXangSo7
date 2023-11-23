import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantHomePageComponent } from './restaurant-home-page/restaurant-home-page.component';
import { RestaurantSearchPageComponent } from './restaurant-search-page/restaurant-search-page.component';
import { RestaurantDetailsPageComponent } from './restaurant-details-page/restaurant-details-page.component';



@NgModule({
  declarations: [
    RestaurantHomePageComponent,
    RestaurantSearchPageComponent,
    RestaurantDetailsPageComponent
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
  ]
})
export class RestaurantModule { }
