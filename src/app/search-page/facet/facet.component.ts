import { Component, Input } from '@angular/core';
import { buildFacet, Facet, FacetValue } from '@coveo/headless';
import { headlessFacet as headlessFacetController } from '../../coveo/controllers';
import { headlessEngine } from 'src/app/coveo/engine';
// import { headlessEngine } from 'src/app/coveo/engine';

@Component({
  selector: 'app-facet',
  templateUrl: './facet.component.html',
  styleUrls: ['./facet.component.css'],
})
export class FacetComponent {
  @Input()
  public field!: string;
  @Input()
  public title!: String;

  private headlessFacet!: Facet;

  public constructor() {
    console.log(
      'headlessFacet controller=> ',
      headlessFacetController.state.values
    );

    // this.headlessFacet = headlessFacetController;
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
    // return this.headlessFacet.state.values;
    return headlessFacetController.state.values;
  }

  ngOnInit() {
    this.headlessFacet = buildFacet(headlessEngine, {
      options: {
        numberOfValues: 5,
        field: this.field || 'source',
      },
    });
    console.log('this.headlessFacet ------> ', this.headlessFacet);
  }
}
