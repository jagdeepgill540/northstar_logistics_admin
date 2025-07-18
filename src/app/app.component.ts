import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  isLoggedIn = false;
  constructor(private router:Router){

  }
  login() {
    // TODO: Implement real login logic
    this.router.navigate(['/login'])
  }

  logout() {
    // TODO: Implement real logout logic
    this.isLoggedIn = false;
  }
}
