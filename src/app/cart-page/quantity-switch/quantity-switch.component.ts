import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cartService';

@Component({
  selector: 'app-quantity-switch',
  templateUrl: './quantity-switch.component.html',
  styleUrls: ['./quantity-switch.component.css'],
})
export class QuantitySwitchComponent {
  @Input() id: string = '';
  @Input() quantity: string = '';

  constructor(private cartService: CartService) {}

  increaseQty() {
    return this.cartService.increaseQuantity(this.id);
  }

  decreaseQty() {
    return this.cartService.decreaseQuantity(this.id);
  }

  removeItem() {
    return this.cartService.removeItemToCart(this.id);
  }
}
