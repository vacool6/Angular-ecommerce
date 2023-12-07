import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ProductDetailsPageComponent } from './product-details-page/product-details-page.component';
import { AppRouter } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchPageComponent,
    ProductDetailsPageComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRouter],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
