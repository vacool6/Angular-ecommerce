import { Component, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'levis_POC';
  searchValue = '';

  constructor(private readonly router: Router) {}

  onSearch() {
    if (this.searchValue) {
      this.router.navigate([`/search`], {
        queryParams: { q: this.searchValue },
      });
    } else {
      return;
    }
  }
}
