import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsPerPageComponent } from './results-per-page.component';

describe('ResultsPerPageComponent', () => {
  let component: ResultsPerPageComponent;
  let fixture: ComponentFixture<ResultsPerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsPerPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultsPerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
