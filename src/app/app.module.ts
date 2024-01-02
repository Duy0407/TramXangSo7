import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './modules/authencation/component/login/login.component';
import { RegisterComponent } from './modules/authencation/component/register/register.component';
import { InformationComponent } from './layout/information/information.component';
import { RestaurantModule } from './modules/restaurant/restaurant.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    InformationComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    RestaurantModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
