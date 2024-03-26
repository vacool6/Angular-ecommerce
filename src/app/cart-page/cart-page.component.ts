import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent {
  cartItems: any[] = [];
  isSpinning: boolean = false;

  constructor(
    private cartService: CartService,
    private spinnerService: SpinnerService
  ) {}

  ngDoCheck() {
    this.isSpinning = this.spinnerService.isSpinning;
  }

  ngOnInit(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    this.cartItems = this.cartService.cartItems;
    console.log(this.cartService);
  }

  getSubtotal() {
    return this.cartService.subtotal();
  }
}
