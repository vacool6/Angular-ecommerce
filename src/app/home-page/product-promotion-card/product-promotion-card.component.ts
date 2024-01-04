import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-promotion-card',
  templateUrl: './product-promotion-card.component.html',
  styleUrls: ['./product-promotion-card.component.css'],
})
export class ProductPromotionCardComponent {
  itemsIdInCart: any[] = [];

  @Input() title: string = '';
  @Input() data: any[] = [];

  constructor(private readonly router: Router) {}

  redirectToDetails(item: any) {
    this.router.navigate([`/product-details/${item.name}`], {
      queryParams: { id: item.id, name: item.name },
    });
  }
}
