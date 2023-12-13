import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {
  menuItems: string[] = ['Collections', 'Men', 'Women', 'Kids'];
  extraCollections: string[] = ['Hoodies', 'Hats', 'Boots'];
  activeLinkIndex: number | null = null;
  showDropdown = false;

  onMouseEnter(index: number): void {
    this.activeLinkIndex = index;
    this.showDropdown = true;
  }

  onMouseLeave(): void {
    this.activeLinkIndex = null;
    this.showDropdown = false;
  }
}
