import { Component, HostListener } from '@angular/core';

import {
  headlessPager,
  headlessResultsPerPage,
  headlessResultList,
} from 'src/app/coveo/controllers';
import { SearchResultService } from 'src/app/services/searchResults.service';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css'],
})
export class PagerComponent {
  headless_pager: any = headlessPager.state;
  headless_results_per_page: any = headlessResultsPerPage.state;
  results_per_page_value: string = `${headlessResultsPerPage.state.numberOfResults}`;

  constructor(private searchResultService: SearchResultService) {}

  paginationHandler(type: string) {
    if (type === 'next') headlessPager.nextPage();
    else if (type === 'prev') headlessPager.previousPage();
    else return;
  }

  onClickHandle(value: string) {
    console.log('Value on click item => ', value);
  }

  onResultsPerPageChange(newValue: string): void {
    headlessResultsPerPage.set(parseInt(newValue));
  }

  // HostListener is used to listen to any events that user performs
  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const windowHeight = window.innerHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollPosition =
      document.body.scrollTop +
      ((document.documentElement && document.documentElement.scrollTop) || 0);

    const isAtBottom = scrollPosition > scrollHeight - windowHeight - 10;

    if (isAtBottom) {
      const availableResults =
        headlessResultsPerPage.state.numberOfResults + 10;

      headlessResultsPerPage.set(availableResults);
      this.results_per_page_value = `${availableResults}`;
      this.searchResultService.setPrevResults(
        headlessResultList.state.results.length
      );
    }
  }
}
