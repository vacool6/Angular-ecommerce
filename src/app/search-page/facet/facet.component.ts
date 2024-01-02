import { Component, Input, OnInit } from '@angular/core';
import { Facet, FacetValue } from '@coveo/headless';
import {
  sourceFacetController,
  brandFacetController,
  categoryFacetController,
  sizesFacetController,
} from '../../coveo/controllers';

@Component({
  selector: 'app-facet',
  templateUrl: './facet.component.html',
  styleUrls: ['./facet.component.css'],
})
export class FacetComponent implements OnInit {
  @Input() field: string = '';
  @Input() title: string = 'Source';

  facetValues: FacetValue[] = [];
  private headlessFacet!: Facet;

  // get facetValues(): FacetValue[] {
  //   return this.headlessFacet.state.values;
  // }

  constructor() {}

  showMore() {
    this.headlessFacet.showMoreValues();
  }

  showLess() {
    this.headlessFacet.showLessValues();
  }

  canShowLess() {
    return this.headlessFacet.state.canShowLessValues;
  }

  canShowMore() {
    return this.headlessFacet.state.canShowMoreValues;
  }

  onChangeHandle(value: FacetValue) {
    console.log('On change!', value);
  }

  // display condition for clear facet button
  areFacetValuesSelected() {
    return this.headlessFacet.state.hasActiveValues;
  }

  // to clear the facet
  isFacetCleared() {
    this.headlessFacet.deselectAll();
  }

  // filter the results by selecting the facet value
  isFacetValueSelected(value: FacetValue): boolean {
    this.headlessFacet.toggleSelect(value);
    return this.headlessFacet.isValueSelected(value);
  }

  ngOnInit() {
    if (this.field == 'source') {
      this.headlessFacet = sourceFacetController;
    } else if (this.field == 'ec_brand') {
      this.headlessFacet = brandFacetController;
    } else if (this.field == 'ec_category') {
      this.headlessFacet = categoryFacetController;
    } else if (this.field == 'cat_available_sizes') {
      this.headlessFacet = sizesFacetController;
    }
  }

  ngDoCheck() {
    this.facetValues = this.headlessFacet.state.values;
  }
}
