import { NgModule } from '@angular/core';

import { HomePageComponent } from './home-page/home-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { ProductDetailsPageComponent } from './product-details-page/product-details-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';

const appRouter: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'search',
    component: SearchPageComponent,
  },
  {
    path: 'product-details',
    component: ProductDetailsPageComponent,
  },

  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '*',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRouter)],
  exports: [RouterModule],
})
export class AppRouter {}
