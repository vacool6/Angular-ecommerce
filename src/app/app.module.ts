import { NgModule } from '@angular/core';

// Modules
import { BrowserModule } from '@angular/platform-browser';
import { AppRouter } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

// Auth
import { LoginComponent } from './auth/login/login.component';

// Services
import { ProductsService } from './services/products.service';
import { AuthService } from './services/auth.service';
import { CartService } from './services/cart.service';
import { ApiService } from './services/api.service';

// Components
import { HomePageComponent } from './home-page/home-page.component';
import { BannerComponent } from './home-page/banner/banner.component';
import { ProductPromotionCardComponent } from './home-page/product-promotion-card/product-promotion-card.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ProductDetailsPageComponent } from './product-details-page/product-details-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AccordionItemComponent } from './accordion/accordion-item/accordion-item.component';
import { AccordionComponent } from './accordion/accordion.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { QuantitySwitchComponent } from './cart-page/quantity-switch/quantity-switch.component';
import { ResultListComponent } from './search-page/result-list/result-list.component';
import { FacetComponent } from './search-page/facet/facet.component';
import { PagerComponent } from './search-page/pager/pager.component';
import { FacetListComponent } from './search-page/facet-list/facet-list.component';

// for pagination
import { ResultsPerPageComponent } from './results-per-page/results-per-page.component';
import { SearchResultService } from './services/searchResults.service';

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
    ResultListComponent,
    FacetComponent,
    PagerComponent,
    FacetListComponent,
    ResultsPerPageComponent,
  ],
  imports: [BrowserModule, AppRouter, FormsModule, HttpClientModule],
  providers: [
    ProductsService,
    AuthService,
    CartService,
    ApiService,
    SearchResultService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
