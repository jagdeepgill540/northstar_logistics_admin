import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

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
  router = inject(Router);
  private apiUrl = environment.apiUrls.master;

  constructor(private http: HttpClient) {}

  onLogin() {
    this.errorMessage = '';
    this.http.post(`${this.apiUrl}/User/login`, {
      email: this.email,
      password: this.password
    }).subscribe({
      next: (res: any) => {
        console.log('Login success:', res);
        // Store user info (token or user object) in localStorage
        localStorage.setItem('user', JSON.stringify(res.data));
        // Redirect to home
        this.router.navigate(['/'])
      },
      error: (err) => {
        this.errorMessage = err?.error?.message || 'Login failed';
      }
    });
  }
} 