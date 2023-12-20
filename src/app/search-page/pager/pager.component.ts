import { Component } from '@angular/core';
import { headlessResultsPerPage } from '../../coveo/controllers';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css'],
})
export class PagerComponent {
  constructor() {
    console.log('pagercontroller => ', headlessResultsPerPage);
  }
}
