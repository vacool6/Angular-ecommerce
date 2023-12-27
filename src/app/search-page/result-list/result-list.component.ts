import { Component } from '@angular/core';
import { headlessResultList } from '../../coveo/controllers';
import { headlessEngine } from '../../coveo/engine';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css'],
})
export class ResultListComponent {
  public images: String[] = [];

  p: number = 1;
  itemsPerPage: number = 10;
  totalNumberOfResults: any;

  public get results() {
    return headlessResultList.state.results;
  }

  ngDoCheck() {
    console.log(
      'headless result list controller => ',
      headlessResultList.state
    );
    this.totalNumberOfResults = headlessResultList.state.results.length;
  }
}
