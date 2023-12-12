import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/productsService';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  top: any[] = [];
  newReleases: any[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.top = this.productsService.top;
    this.newReleases = this.productsService.newReleases;
  }
}
