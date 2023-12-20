import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-promotion-card',
  templateUrl: './product-promotion-card.component.html',
  styleUrls: ['./product-promotion-card.component.css'],
})
export class ProductPromotionCardComponent {
  itemsIdInCart: any[] = [];

  @Input() title: string = '';
  @Input() data: any[] = [];

  constructor(
    private readonly router: Router,
    private cartService: CartService
  ) {}

  ngDoCheck() {
    for (let item of this.cartService.cartItems) {
      if (!this.itemsIdInCart.includes(item.id))
        this.itemsIdInCart.push(item.id);
    }
  }

  addToCart(id: string) {
    const item = this.data.filter((item) => item.id === id)[0];

    for (let i of this.cartService.cartItems) {
      if (i.id === item.id) return alert('Item already added to cart 😄');
    }

    return this.cartService.addItemToCart({
      ...item,
      isAddedToCart: true,
      quantity: 1,
    });
  }

  redirectToDetails(item: any) {
    console.log(item);
    this.router.navigate([`/product-details/${item.name}`], {
      queryParams: { id: item.id, name: item.name },
    });
  }
}
