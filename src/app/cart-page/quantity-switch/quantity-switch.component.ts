import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-quantity-switch',
  templateUrl: './quantity-switch.component.html',
  styleUrls: ['./quantity-switch.component.css'],
})
export class QuantitySwitchComponent {
  @Input() id: string = '';
  @Input() quantity: string = '';
  @Input() item: any;

  responseForRemove: any = {};
  responseForIncrement: any = {};
  responseForDecrement: any = {};

  constructor(
    private cartService: CartService,
    private spinnerService: SpinnerService
  ) {}

  increaseQty() {
    this.spinnerService.triggerSpinner();
    this.cartService
      .quantityChanger(this.item, this.id, 'INCREASE')
      .subscribe((response) => {
        this.responseForIncrement = response;
        this.spinnerService.stopSpinner(this.responseForIncrement.message);
      });
  }

  decreaseQty() {
    if (this.item.quantity <= 1) return alert('Quantity cannot be less that 1');
    this.spinnerService.triggerSpinner();
    this.cartService
      .quantityChanger(this.item, this.id, 'DECREASE')
      .subscribe((response) => {
        this.responseForDecrement = response;
        this.spinnerService.stopSpinner(this.responseForDecrement.message);
      });
  }

  removeItem() {
    this.spinnerService.triggerSpinner();
    this.cartService.removeItemToCart(this.id).subscribe((response) => {
      this.responseForRemove = response;
      this.spinnerService.stopSpinner();
      location.reload();
    });
  }
}
