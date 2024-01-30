import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BASE_URL, TOKEN_URL } from '../env';

@Injectable()
export class CartService {
  baseURL = BASE_URL;
  tokenURL = TOKEN_URL;

  cartLength: number = 0;
  cartItems: any[] = [];

  jwtToken: any = '';

  constructor(private http: HttpClient) {}

  hasTokenExpired(token: string) {
    if (!localStorage.getItem('JWT')) {
      return true;
    }
    const expiry = JSON.parse(atob(token.split('.')[1])).exp;
    return Math.floor(new Date().getTime() / 1000) >= expiry;
  }

  genToken() {
    return this.http.get(this.tokenURL, { headers: {} });
  }

  getCartItems(headers: any) {
    return this.http.get(
      this.baseURL + 'coveo_commercecarts?$select=coveo_name,coveo_cartinfo',
      {
        headers,
      }
    );
  }

  addItemToCart(postData: any, headers: any) {
    return this.http.post(this.baseURL + 'coveo_commercecarts', postData, {
      headers,
    });
  }

  removeItemToCart(id: string, headers: any) {
    return this.http.delete(this.baseURL + `coveo_commercecarts(${id})`, {
      headers,
    });
  }

  quantityChanger(data: any, type: string, headers: any) {
    if (type === 'INCREASE') {
      data.quantity = data.quantity + 1;
    } else if (type === 'DECREASE') {
      data.quantity = data.quantity - 1;
    }

    const updatedQty = JSON.stringify({
      value: JSON.stringify(data).replace(/"/g, "'"),
    });

    return this.http.put(
      this.baseURL + `coveo_commercecarts(${data.id})/coveo_cartinfo`,
      updatedQty,
      {
        headers,
      }
    );
  }

  subtotal() {
    let total = 0;

    for (let item of this.cartItems) {
      total += item.quantity * item.price;
    }

    return total;
  }

  safeApiCall(func: () => void): void {
    if (this.hasTokenExpired(`${localStorage.getItem('JWT')}`)) {
      this.genToken().subscribe((JWT) => {
        this.jwtToken = JWT;
        localStorage.setItem('JWT', this.jwtToken.token);
        func();
      });
    } else {
      func();
    }
  }
}
