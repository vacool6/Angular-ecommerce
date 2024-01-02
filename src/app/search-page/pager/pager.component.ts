import { Component } from '@angular/core';
import {
  headlessPager,
  headlessResultsPerPage,
} from 'src/app/coveo/controllers';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css'],
})
export class PagerComponent {
  headless_pager: any = headlessPager.state;
  headless_results_per_page: any = headlessResultsPerPage.state;
  results_per_page_value: string = `${headlessResultsPerPage.state.numberOfResults}`;

  constructor() {}

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
}
