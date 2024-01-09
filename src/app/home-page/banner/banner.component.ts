// banner.component.ts
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  @Input() imageSources: string[] = [];
  currentIndex: number = 0;
  previousIndex: number = this.imageSources.length - 1;

  constructor() {}

  ngOnInit() {
    this.startImageSlideShow();
  }

  startImageSlideShow() {
    setInterval(() => {
      this.previousIndex = this.previousIndex;
      this.currentIndex = (this.currentIndex + 1) % this.imageSources.length;
    }, 5000);
  }
}
