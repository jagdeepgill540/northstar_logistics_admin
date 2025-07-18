import { afterNextRender, Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'northstar_admin';
  isLoggedIn = false;
  constructor(private router:Router){
    afterNextRender(() => {
    // Check login state on app start
    this.isLoggedIn = !!localStorage.getItem('user');
    // Listen for login event
  })
  }
  login() {
    // TODO: Implement real login logic
    this.router.navigate(['/login'])
  }

  logout() {
    // Clear user info and update state
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}
