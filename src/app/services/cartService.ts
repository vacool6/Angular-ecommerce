import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  cartItems: any[] = localStorage.getItem('cart-items')
    ? JSON.parse(localStorage.getItem('cart-items') as any)
    : [];

  addItemToCart(item: any) {
    this.cartItems.push(item);
    localStorage.setItem('cart-items', JSON.stringify(this.cartItems));
  }
}
