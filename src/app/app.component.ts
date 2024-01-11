import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { CartService } from './services/cart.service';
//
import { headlessResultsPerPage, searchBox } from './coveo/controllers';
import { SearchResultService } from './services/searchResults.service';
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
    private cartService: CartService,
    private searchResultService: SearchResultService
  ) {}

  ngDoCheck(): void {
    this.isLoginModalOpen = this.authService.isLoginModalOpen;
    this.cartLength = this.cartService.cartItems.length;
  }

  onSearch() {
    if (this.searchValue !== localStorage.getItem('prevValue')) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
      headlessResultsPerPage.set(10);
      this.searchResultService.setPrevResults(0);
    }

    searchBox.subscribe(() => {
      searchBox.state;
    });

    this.router.navigate([`/search`], {
      queryParams: { q: this.searchValue },
    });

    searchBox.updateText(this.searchValue);
    localStorage.setItem('prevValue', this.searchValue);
    searchBox.submit();
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
