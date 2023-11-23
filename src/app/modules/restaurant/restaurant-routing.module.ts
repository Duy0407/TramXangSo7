import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantComponent } from './restaurant.component';
import { RestaurantHomePageComponent } from './restaurant-home-page/restaurant-home-page.component';
import { RestaurantSearchPageComponent } from './restaurant-search-page/restaurant-search-page.component';
import { RestaurantDetailsPageComponent } from './restaurant-details-page/restaurant-details-page.component';

const routes: Routes = [
    {
        path: '',
        component: RestaurantComponent,
        children: [
            {
                path:'',
                redirectTo:'home-page',
                pathMatch: 'full',
            },
            {
                path: 'home-page',
                component: RestaurantHomePageComponent,
            },
            {
                path: 'search-page',
                component: RestaurantSearchPageComponent,
            },
            {
                path: 'detail-page',
                component: RestaurantDetailsPageComponent,
            },
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RestaurantRoutingModule { }