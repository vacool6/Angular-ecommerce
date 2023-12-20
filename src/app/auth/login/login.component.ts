import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isLoginModalOpen: boolean = false;
  constructor(private authService: AuthService) {}

  ngDoCheck(): void {
    this.isLoginModalOpen = this.authService.isLoginModalOpen;
  }

  closeLoginModal() {
    return this.authService.closeLoginModal();
  }
}
