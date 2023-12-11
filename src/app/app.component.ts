import { Component, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './services/authService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'levis_POC';
  searchValue = '';
  isLoginModalOpen: boolean = false;

  constructor(
    private readonly router: Router,
    private authService: AuthService
  ) {}

  ngDoCheck(): void {
    this.isLoginModalOpen = this.authService.isLoginModalOpen;
  }

  onSearch() {
    if (this.searchValue) {
      this.router.navigate([`/search`], {
        queryParams: { q: this.searchValue },
      });
    } else {
      return;
    }
  }

  openLoginModal() {
    return this.authService.openLoginModal();
  }
}
