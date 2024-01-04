import { Component } from '@angular/core';
import { headlessResultList } from '../../coveo/controllers';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css'],
})
export class ResultListComponent {
  results: any[] = [];
  selectedSize: string = '';
  selectedColorInfo: any = {};

  resetData() {
    this.selectedSize = '';
    this.selectedColorInfo = {};
  }

  constructor(private cartService: CartService) {}

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
  addToCart(item: any) {
    if (!this.selectedSize) return alert('Select a size');

    if (
      !this.selectedColorInfo.swatch ||
      !this.selectedColorInfo.code ||
      !this.selectedColorInfo.label
    )
      return alert('Select a color');

    const data = {
      id: Math.random(),
      title: item.title,
      image: item.raw['ec_images'][0],
      size: this.selectedSize,
      colorInfo: this.selectedColorInfo,
      quantity: 1,
      price: 1000,
    };

    this.cartService.addItemToCart(data);

    this.selectedSize = '';
    this.selectedColorInfo = {};

    alert('Item added to cart');
  }

  mouseLeaveEvent() {
    this.selectedSize = '';
    this.selectedColorInfo = {};
  }
}
