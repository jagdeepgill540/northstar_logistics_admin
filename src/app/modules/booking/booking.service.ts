import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface Booking {
  _id?: string;
  timeStart: Date;
  timeEnd: Date;
  fullName: string;
  mobile: string;
  pickUpFrom: string;
  dropOffLocation: string;
  orderNo: string;
  contactDetails: string;
  loadType: string;
  specialRequirements: string;
}

@Injectable({ providedIn: 'root' })
export class BookingService {
  private apiUrl = environment.apiUrls.master;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.apiUrl}/booking/getall`);
  }

  getById(id: string): Observable<Booking> {
    return this.http.get<Booking>(`${this.apiUrl}/booking/getById/${id}`);
  }

  remove(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/booking/remove/${id}`);
  }
} 