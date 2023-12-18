import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class CartService {
  constructor(private readonly router: Router) {}

  cartItems: any[] = localStorage.getItem('cart-items')
    ? JSON.parse(localStorage.getItem('cart-items') as any)
    : [];

  addItemToCart(item: any) {
    this.cartItems.push(item);
    localStorage.setItem('cart-items', JSON.stringify(this.cartItems));
  }

  removeItemToCart(id: string) {
    const updatedCart = this.cartItems.filter((e: any) => {
      return e.id !== id;
    });
    localStorage.setItem('cart-items', JSON.stringify(updatedCart));
    location.reload();
  }

  increaseQuantity(id: string) {
    const updatedCart = this.cartItems.map((e: any) => {
      if (e.id === id) {
        return { ...e, quantity: e.quantity + 1 };
      } else {
        return e;
      }
    });

    localStorage.setItem('cart-items', JSON.stringify(updatedCart));
    location.reload();
  }

  decreaseQuantity(id: string) {
    const updatedCart = this.cartItems.map((e: any) => {
      if (e.id === id) {
        if (e.quantity > 1) {
          return { ...e, quantity: e.quantity - 1 };
        } else {
          return e;
        }
      } else {
        return e;
      }
    });

    localStorage.setItem('cart-items', JSON.stringify(updatedCart));
    location.reload();
  }

  subtotal() {
    let total = 0;

    for (let item of this.cartItems) {
      total += item.quantity * item.price;
    }

    return total;
  }
}
