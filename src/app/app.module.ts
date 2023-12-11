import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// Home
import { HomePageComponent } from './home-page/home-page.component';
import { BannerComponent } from './home-page/banner/banner.component';
import { ProductPromotionCardComponent } from './home-page/product-promotion-card/product-promotion-card.component';
// Auth
import { LoginComponent } from './auth/login/login.component';
//
import { SearchPageComponent } from './search-page/search-page.component';
import { ProductDetailsPageComponent } from './product-details-page/product-details-page.component';
import { AppRouter } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsService } from './services/productsService';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/authService';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchPageComponent,
    ProductDetailsPageComponent,
    NotFoundComponent,
    BannerComponent,
    ProductPromotionCardComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRouter, FormsModule],
  providers: [ProductsService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
