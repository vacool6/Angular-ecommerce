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
    return this.cartService.quantityChanger(this.item, 'INCREASE').subscribe();
  }

  decreaseQty() {
    return this.cartService.quantityChanger(this.item, 'DECREASE').subscribe();
  }

  removeItem() {
    this.cartService
      .removeItemToCart(this.id)
      .subscribe(() => location.reload());
  }
}
