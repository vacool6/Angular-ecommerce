import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent {
  accordionItems: any = [];

  @Input() accordionContents: any = {};

  ngOnInit() {
    const productDetails = this.accordionContents.productDetails;
    this.accordionItems = [
      {
        title: 'Description',
        content: '● ' + productDetails.Description,
      },
      {
        title: 'Fit & sizing',
        content: '● ' + Object.values(productDetails['Fit_and_sizing']),
      },
      { title: ' Composition', content: '● ' + productDetails.Composition },
      {
        title: 'Additional',
        content: '● ' + `${Object.values(productDetails.Additional)}`,
      },
    ];
    console.log(this.accordionContents.productDetails.Description);
  }
}
