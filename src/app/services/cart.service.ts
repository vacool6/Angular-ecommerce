import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../env';

@Injectable()
export class CartService {
  baseURL = BASE_URL;
  cartLength: number = 0;
  cartItems: any[] = [];
  jwtToken: any = '';
  constructor(private http: HttpClient) {}

  // Cart functions
  getCartItems() {
    return this.http.get(this.baseURL + 'get-cart');
  }

  addItemToCart(cartName: any, cartInfo: any) {
    const postData = JSON.stringify({
      coveo_name: cartName,
      coveo_cartinfo: cartInfo,
    });

    return this.http.post(this.baseURL + 'add-to-cart', postData, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  removeItemToCart(id: string) {
    console.log(id);
    return this.http.delete(this.baseURL + `delete-from-cart/${id}`);
  }

  quantityChanger(data: any, id: string, type: string) {
    if (type === 'INCREASE') {
      data.quantity = data.quantity + 1;
    } else if (type === 'DECREASE') {
      data.quantity = data.quantity - 1;
    }

    const updatedQty = JSON.stringify({
      value: JSON.stringify(data).replace(/"/g, "'"),
    });

    return this.http.put(this.baseURL + `change-quantity/${id}`, updatedQty, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  subtotal() {
    let total = 0;

    for (let item of this.cartItems) {
      total += item.quantity * item.price;
    }

    return total;
  }
}
