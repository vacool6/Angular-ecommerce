import { Component, OnInit } from '@angular/core';
import { Pager, ResultsPerPage } from '@coveo/headless';

import { headlessResultsPerPage } from '../coveo/controllers';
import { headlessEngine } from '../coveo/engine';

@Component({
  selector: 'app-results-per-page',
  templateUrl: './results-per-page.component.html',
  styleUrls: ['./results-per-page.component.css'],
})
export class ResultsPerPageComponent {
  pager!: Pager;
  resultsPerPage: ResultsPerPage = headlessResultsPerPage;
  // engine: any = EngineService;

  // constructor(private engineService: EngineService) {}

  constructor() {}

  ngOnInit(): void {
    // Subscribe to changes in the ResultsPerPage state
    this.resultsPerPage.subscribe(() => {
      console.log('Results per page state:', this.resultsPerPage.state);
      headlessEngine.executeFirstSearch();
    });
  }

  // Function to set the number of results per page
  setResultsPerPage(event: any): void {
    const selectedValue = event?.target?.value;

    if (selectedValue) {
      console.log('Results per page changed to:', selectedValue);

      // Set the new number of results per page
      this.resultsPerPage.set(Number(selectedValue));

      // Trigger a new search with the updated number of results per page
      headlessEngine.executeFirstSearch();
    }
  }
  goToPreviousPage(): void {
    this.pager.previousPage();
  }

  goToNextPage(): void {
    if (this.pager.nextPage) {
      this.pager.nextPage();
    }
  }
}
