import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css'],
})
export class AccordionItemComponent {
  isOpen: boolean = false;

  @Input() title: string = '';
  @Input() content: string = '';

  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }
}
