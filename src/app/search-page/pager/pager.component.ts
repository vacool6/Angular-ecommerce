import {
  Component,
  Input,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { headlessResultsPerPage } from '../../coveo/controllers';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css'],
})
export class PagerComponent {
  //   @Input()
  //   values!: [];
  //   @Input()
  //   value!: string[];
  //
  //   @Output()
  //   valueChange!: EventEmitter<any>;
  //
  //   constructor(private elementRef: ElementRef) {
  //     this.valueChange = new EventEmitter();
  //   }
  //
  //   select(value: string) {
  //     this.valueChange.emit(value);
  //   }

  onClickHandle(value: string) {
    console.log('Value on click item => ', value);
  }
}
