import { Component } from '@angular/core';
import { headlessFacet } from '../../coveo/controllers';

@Component({
  selector: 'app-facet',
  templateUrl: './facet.component.html',
  styleUrls: ['./facet.component.css'],
})
export class FacetComponent {
  public constructor() {
    console.log('headlessFacet => ', headlessFacet);
  }
}
