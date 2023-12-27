import {
  Component,
  Input,
  ElementRef,
  Output,
  EventEmitter,
  NgModule,
} from '@angular/core';
// import { headlessResultsPerPage } from '../../coveo/controllers';
// for pagination

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css'],
})
export class PagerComponent {
  onClickHandle(value: string) {
    console.log('Value on click item => ', value);
  }
}
