import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  isLoginModalOpen: boolean = false;

  openLoginModal() {
    this.isLoginModalOpen = true;
  }

  closeLoginModal() {
    this.isLoginModalOpen = false;
  }
}
