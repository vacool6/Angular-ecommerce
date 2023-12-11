import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// Home
import { HomePageComponent } from './home-page/home-page.component';
import { BannerComponent } from './home-page/banner/banner.component';
import { ProductPromotionCardComponent } from './home-page/product-promotion-card/product-promotion-card.component';
//
import { SearchPageComponent } from './search-page/search-page.component';
import { ProductDetailsPageComponent } from './product-details-page/product-details-page.component';
import { AppRouter } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsService } from './services/productsService';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchPageComponent,
    ProductDetailsPageComponent,
    NotFoundComponent,
    BannerComponent,
    ProductPromotionCardComponent,
  ],
  imports: [BrowserModule, AppRouter, FormsModule],
  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
