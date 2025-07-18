import { Component, OnInit } from '@angular/core';
import { BookingService, Booking } from '../booking.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-table.component.html',
  styleUrl: './booking-table.component.css'
})
export class BookingTableComponent implements OnInit {
  bookings: Booking[] = [];
  loading = false;
  error = '';

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.fetchBookings();
  }

  fetchBookings() {
    this.loading = true;
    this.bookingService.getAll().subscribe({
      next: (data:any) => {
        this.bookings = data.data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load bookings';
        this.loading = false;
      }
    });
  }

  deleteBooking(id: string) {
    if (!confirm('Are you sure you want to delete this booking?')) return;
    this.bookingService.remove(id).subscribe({
      next: () => this.fetchBookings(),
      error: () => this.error = 'Failed to delete booking'
    });
  }
}
