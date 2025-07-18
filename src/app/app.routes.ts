import { Routes } from '@angular/router';
import { authGuard } from './modules/auth/auth.guard';

export const routes: Routes = [
    { path: 'login', loadComponent: () => import('./modules/auth/auth.component').then(m => m.AuthComponent), },
    { path: 'contact-us', loadComponent: () => import('./modules/contact-us/contact-us-table/contact-us-table.component').then(m => m.ContactUsTableComponent), canActivate: [authGuard] },
    { path: 'booking', loadComponent: () => import('./modules/booking/booking-table/booking-table.component').then(m => m.BookingTableComponent), canActivate: [authGuard] },
    { path: '', redirectTo: 'contact-us', pathMatch: 'full' }, // Default route
    { path: '**', redirectTo: 'contact-us' } // Wildcard route
];
