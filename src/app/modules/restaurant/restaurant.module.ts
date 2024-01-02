import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantHomePageComponent } from './restaurant-home-page/restaurant-home-page.component';
import { RestaurantSearchPageComponent } from './restaurant-search-page/restaurant-search-page.component';
import { RestaurantDetailsPageComponent } from './restaurant-details-page/restaurant-details-page.component';
import { BannerComponent } from './banner/banner.component';
import { RestaurantComponent } from './restaurant.component';
import { FilterRestaurantsComponent } from './filter-restaurants/filter-restaurants.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ListFeaturedRestaurantsComponent } from './restaurant-home-page/list-featured-restaurants/list-featured-restaurants.component';
import { NewRestaurantListComponent } from './restaurant-home-page/new-restaurant-list/new-restaurant-list.component';
import { RestaurantsRecentlyViewedComponent } from './restaurant-home-page/restaurants-recently-viewed/restaurants-recently-viewed.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    RestaurantHomePageComponent,
    RestaurantSearchPageComponent,
    RestaurantDetailsPageComponent,
    RestaurantComponent,
    BannerComponent,
    FilterRestaurantsComponent,
    ListFeaturedRestaurantsComponent,
    NewRestaurantListComponent,
    RestaurantsRecentlyViewedComponent,
    ReviewsComponent,
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    SlickCarouselModule,
    SharedModule
  ],
  exports: [
    BannerComponent,
  ]
})
export class RestaurantModule { }
