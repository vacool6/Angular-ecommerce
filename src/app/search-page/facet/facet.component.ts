import { Component, Input, OnInit } from '@angular/core';
import {
  buildFacet,
  Facet,
  FacetValue,
  buildSearchEngine,
  SearchEngine,
  getOrganizationEndpoints,
} from '@coveo/headless';
import { headlessFacet, setFieldValue } from '../../coveo/controllers';

@Component({
  selector: 'app-facet',
  templateUrl: './facet.component.html',
  styleUrls: ['./facet.component.css'],
})
export class FacetComponent implements OnInit {
  @Input()
  public field!: string;
  @Input()
  public title: String = 'Source';

  private headlessFacet!: Facet;

  // private headlessEngineForFacets!: SearchEngine;

  public constructor() {
    setFieldValue(this.field);
  }

  public showMore() {
    this.headlessFacet.showMoreValues();
  }

  public showLess() {
    this.headlessFacet.showLessValues();
  }

  public canShowLess() {
    return this.headlessFacet.state.canShowLessValues;
  }

  public canShowMore() {
    return this.headlessFacet.state.canShowMoreValues;
  }

  public isFacetValueSelected(value: FacetValue): boolean {
    return this.headlessFacet.isValueSelected(value);
  }

  public get facetValues(): FacetValue[] {
    console.log(
      'Facet values in facet component----------> ',
      this.headlessFacet
    );
    return this.headlessFacet.state.values;
    // return headlessFacetController.state.values;
  }

  public ngOnInit() {
    console.log(
      'controller from the controllers file in facet component ==========================> ',
      headlessFacet
    );
  }
}
