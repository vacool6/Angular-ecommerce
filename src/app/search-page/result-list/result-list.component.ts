import { Component } from '@angular/core';
import { headlessResultList } from '../../coveo/controllers';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css'],
})
export class ResultListComponent {
  results: any[] = [];

  ngDoCheck() {
    this.results = headlessResultList.state.results;
  }
}
