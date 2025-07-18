import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const user =JSON.parse(localStorage.getItem('user')||'');
  if (user && user.role=='admin') {
    return true;
  } else {
    // Redirect to login
    const router = inject(Router);
    router.navigate(['/login']);
    return false;
  }
}; 