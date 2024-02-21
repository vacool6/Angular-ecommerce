import { Component } from '@angular/core';
import { headlessResultList } from '../../coveo/controllers';
import { CartService } from 'src/app/services/cart.service';
import { customEventAnalytics } from 'src/app/coveo/analytics';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css'],
})
export class ResultListComponent {
  results: any[] = [];
  selectedSize: string = '';
  selectedColorInfo: any = {};
  cartFromDB: any;
  subscribeResponse: any = {};

  resetData() {
    this.selectedSize = '';
    this.selectedColorInfo = {};
  }

  constructor(
    private cartService: CartService,
    private spinnerService: SpinnerService
  ) {}

  ngDoCheck() {
    this.results = headlessResultList.state.results;
  }

  jsonParser(data: any) {
    return JSON.parse(data);
  }

  sizeSelector(size: string) {
    this.selectedSize = size;
  }

  colorSelector(colorInfo: any) {
    this.selectedColorInfo.swatch = colorInfo.swatch;
    this.selectedColorInfo.code = colorInfo.code;
    this.selectedColorInfo.label = colorInfo.label;
  }

  usPriceExtractor(inpString: string) {
    const usValue = parseInt(inpString.split('=')[1].split(',')[0]);
    return usValue;
  }

  addToCart(item: any) {
    if (!this.selectedSize) return alert('Select a size');

    if (
      !this.selectedColorInfo.swatch ||
      !this.selectedColorInfo.code ||
      !this.selectedColorInfo.label
    )
      return alert('Select a color');

    this.spinnerService.triggerSpinner();

    const data = {
      id: Math.random(),
      title: item.title,
      image: item.raw['ec_images'][0],
      size: this.selectedSize,
      colorInfo: this.selectedColorInfo,
      quantity: 1,
      price: this.usPriceExtractor(item.raw['ec_price_whsl_dict'])! * 82,
    };

    const cartAsString = JSON.stringify(data).replace(/"/g, "'");

    this.cartService
      .addItemToCart('Testing@gmail.com', `[${cartAsString}]`)
      .subscribe((response) => {
        this.subscribeResponse = response;
        this.cartService.cartLength = this.subscribeResponse.cartLength;

        this.cartService.cartItems = [];
        for (let item of this.subscribeResponse.data) {
          const correctedString = item['coveo_cartinfo'].replace(/'/g, '"');
          const parsedObject = JSON.parse(correctedString)[0];
          parsedObject.id = item['coveo_commercecartid'];
          this.cartService.cartItems.push(parsedObject);
        }

        this.spinnerService.stopSpinner(this.subscribeResponse.message);
      });

    // Add to cart analytics
    customEventAnalytics('click', 'addToCart', {
      pa: 'add',
      category: item.raw['ec_category'][2],
      id: item.raw['ec_product_id'],
      quantity: 1,
    });
  }

  mouseLeaveEvent() {
    this.selectedSize = '';
    this.selectedColorInfo = {};
  }
}
