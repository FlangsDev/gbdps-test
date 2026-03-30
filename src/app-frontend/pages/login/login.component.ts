import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  showPassword = false;

  constructor(private router: Router) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
    if (this.username && this.password) {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Silakan masukkan ID Pengguna dan Kata Sandi');
    }
  }
}
