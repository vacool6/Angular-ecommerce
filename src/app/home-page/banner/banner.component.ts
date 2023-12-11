import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent {
  @Input() imgSource: string = '';

  constructor() {}

  ngOnInit(): void {
    this.imgSource = this.imgSource;
  }
}
