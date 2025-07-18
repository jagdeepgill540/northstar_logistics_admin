import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="auth-container">
      <h2>Login</h2>
      <form (ngSubmit)="onLogin()">
        <input [(ngModel)]="email" name="email" type="email" placeholder="Email" required />
        <input [(ngModel)]="password" name="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <div *ngIf="errorMessage" class="error">{{ errorMessage }}</div>
    </div>
  `,
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private http: HttpClient) {}

  onLogin() {
    this.errorMessage = '';
    this.http.post('http://localhost:4774/User/login', {
      email: this.email,
      password: this.password
    }).subscribe({
      next: (res) => {
        console.log('Login success:', res);
        // TODO: Store token, emit event, or redirect
      },
      error: (err) => {
        this.errorMessage = err?.error?.message || 'Login failed';
      }
    });
  }
} 