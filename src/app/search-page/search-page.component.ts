import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//
import { searchBox } from '../coveo/controllers';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent {
  searchedFor = '';
  isLoading: boolean = true;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.searchedFor = params['q'];
    });

    searchBox.updateText(this.searchedFor);
    searchBox.submit();

    this.isLoading = searchBox.state.isLoading;
  }

  ngDoCheck() {
    this.isLoading = searchBox.state.isLoading;
  }
}
