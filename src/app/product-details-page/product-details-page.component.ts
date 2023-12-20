import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css'],
})
export class ProductDetailsPageComponent {
  productDetails: any = {};

  constructor(
    private readonly route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    this.route.queryParams.subscribe((params) => {
      for (let item of [
        ...this.productService.top,
        ...this.productService.newReleases,
      ]) {
        if (params['id'] === item.id && params['name'] === item.name) {
          this.productDetails = item;
        }
      }
    });
  }

  getObjectKeys(obj: any) {
    return Object.keys(obj);
  }
}
