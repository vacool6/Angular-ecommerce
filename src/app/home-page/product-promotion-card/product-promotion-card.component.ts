import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/productsService';

@Component({
  selector: 'app-product-promotion-card',
  templateUrl: './product-promotion-card.component.html',
  styleUrls: ['./product-promotion-card.component.css'],
})
export class ProductPromotionCardComponent {
  @Input() title: string = '';
  @Input() data: { name: string; image: string }[] = [];

  constructor() {}

  // ngOnInit(): void {
  //   this.title = this.title;
  // }
}
