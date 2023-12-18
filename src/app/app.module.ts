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
import { CartService } from './services/cartService';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AccordionItemComponent } from './accordion/accordion-item/accordion-item.component';
import { AccordionComponent } from './accordion/accordion.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { QuantitySwitchComponent } from './cart-page/quantity-switch/quantity-switch.component';

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
    NavBarComponent,
    AccordionItemComponent,
    AccordionComponent,
    CartPageComponent,
    QuantitySwitchComponent,
  ],
  imports: [BrowserModule, AppRouter, FormsModule],
  providers: [ProductsService, AuthService, CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
