import { Injectable } from '@angular/core';

Injectable();

export class SpinnerService {
  isSpinning: boolean = false;

  triggerSpinner() {
    this.isSpinning = true;
    return;
  }

  stopSpinner(message?: string) {
    this.isSpinning = false;
    if (message) {
      setTimeout(() => alert(message), 250);
      return;
    }
    return;
  }
}
