import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cartService';

@Component({
  selector: 'app-product-promotion-card',
  templateUrl: './product-promotion-card.component.html',
  styleUrls: ['./product-promotion-card.component.css'],
})
export class ProductPromotionCardComponent {
  itemsIdInCart: any[] = [];

  @Input() title: string = '';
  @Input() data: any[] = [];

  constructor(private cartService: CartService) {}

  ngDoCheck() {
    for (let item of this.cartService.cartItems) {
      if (!this.itemsIdInCart.includes(item.id))
        this.itemsIdInCart.push(item.id);
    }
  }

  addToCart(id: string) {
    const item = this.data.filter((item) => item.id === id)[0];

    for (let i of this.cartService.cartItems) {
      if (i.id === item.id) return alert('Item already added to cart 😄');
    }

    return this.cartService.addItemToCart({ ...item, isAddedToCart: true });
  }
}
