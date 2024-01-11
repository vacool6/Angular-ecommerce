import { Injectable } from '@angular/core';

@Injectable()
export class SearchResultService {
  prevResults: number = 0;

  setPrevResults(val: number) {
    this.prevResults = val;
  }
}
