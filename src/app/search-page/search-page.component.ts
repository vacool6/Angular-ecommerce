import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//
import { searchBox } from '../coveo/controllers';
import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent {
  searchedFor = '';
  isLoading: boolean = true;
  isSpinning: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private spinnerService: SpinnerService
  ) {}

  ngDoCheck() {
    this.isLoading = searchBox.state.isLoading;
    this.isSpinning = this.spinnerService.isSpinning;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.searchedFor = params['q'];
    });

    searchBox.updateText(this.searchedFor);
    searchBox.submit();

    this.isLoading = searchBox.state.isLoading;
  }
}
