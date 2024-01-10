import { Component, HostListener, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { CartService } from './services/cart.service';
//
import { searchBox } from './coveo/controllers';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'levis_POC';
  searchValue = '';
  isLoginModalOpen: boolean = false;
  cartLength: number = 0;

  constructor(
    private readonly router: Router,
    private authService: AuthService,
    private cartService: CartService
  ) {}

  ngDoCheck(): void {
    this.isLoginModalOpen = this.authService.isLoginModalOpen;
    this.cartLength = this.cartService.cartItems.length;
  }

  onSearch() {
    searchBox.subscribe(() => {
      searchBox.state;
    });

    if (this.searchValue) {
      this.router.navigate([`/search`], {
        queryParams: { q: this.searchValue },
      });

      searchBox.updateText(this.searchValue);
      searchBox.submit();
    } else {
      return;
    }
  }

  onEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.onSearch();
    }
  }

  openLoginModal() {
    return this.authService.openLoginModal();
  }
}
