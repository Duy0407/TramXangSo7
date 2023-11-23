import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'restaurant', 
    pathMatch: 'full',
  },  
  {
    path: 'login',
    canActivate: [authGuard],
    loadChildren: () =>
    import('./modules/authencation/component/login/login.module').then((m) => m.LoginModule),
  },

  {
    path: 'register',
    canActivate: [authGuard],
    loadChildren: () =>
    import('./modules/authencation/component/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'restaurant',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
        import('./modules/restaurant/restaurant.module').then((m) => m.RestaurantModule),
        data: {
          preload: true,
        }
      }
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
