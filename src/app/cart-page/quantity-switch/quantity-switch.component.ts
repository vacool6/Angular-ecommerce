import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-quantity-switch',
  templateUrl: './quantity-switch.component.html',
  styleUrls: ['./quantity-switch.component.css'],
})
export class QuantitySwitchComponent {
  @Input() id: string = '';
  @Input() quantity: string = '';
  @Input() item: any;

  constructor(private cartService: CartService) {}

  increaseQty() {
    const plus = () => {
      return this.cartService
        .quantityChanger(this.item, 'INCREASE', {
          'Content-Type': 'application/json',
          Authorization: JSON.parse(
            this.cartService.decodeFromBase64(
              localStorage.getItem('JWT') as string
            )
          ),
        })
        .subscribe();
    };

    this.cartService.safeApiCall(plus);
  }

  decreaseQty() {
    const minus = () => {
      if (this.item.quantity <= 1) {
        return alert('Quantity cannot be less that 1');
      }

      return this.cartService
        .quantityChanger(this.item, 'DECREASE', {
          'Content-Type': 'application/json',
          Authorization: JSON.parse(
            this.cartService.decodeFromBase64(
              localStorage.getItem('JWT') as string
            )
          ),
        })
        .subscribe();
    };

    this.cartService.safeApiCall(minus);
  }

  removeItem() {
    const removeCartItem = () => {
      return this.cartService
        .removeItemToCart(this.id, {
          'Content-Type': 'application/json',
          Authorization: JSON.parse(
            this.cartService.decodeFromBase64(
              localStorage.getItem('JWT') as string
            )
          ),
        })
        .subscribe(() => location.reload());
    };

    this.cartService.safeApiCall(removeCartItem);
  }
}
