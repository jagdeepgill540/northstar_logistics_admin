import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { environment } from '../../../../environments/environment';

interface ContactRequest {
  _id: string;
  name: string;
  email: string;
  messages: string;
  phone: string;
  website: string;
}

@Component({
  selector: 'app-contact-us-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-us-table.component.html',
  styleUrl: './contact-us-table.component.css'
})
export class ContactUsTableComponent implements OnInit {
  rows: ContactRequest[] = [];
  selected: ContactRequest[] = [];
  editing: { [key: string]: boolean } = {};
  editedRow: Partial<ContactRequest> = {};
  apiRoute=environment.apiUrls.master
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    console.log(`${this.apiRoute}/contact-us/getall`)
    this.http.get<ContactRequest[]>(`${this.apiRoute}/contact-us/getall`).subscribe((data:any) => {
      console.log("data",data)
      this.rows = data.data;
    });
  }

  editRow(row: ContactRequest) {
    this.editing[row._id] = true;
    this.editedRow = { ...row };
  }

  saveRow(row: ContactRequest) {
    this.http.put(`${this.apiRoute}/contact-us/update/${row._id}`, this.editedRow).subscribe(() => {
      this.editing[row._id] = false;
      this.getAll();
    });
  }

  cancelEdit(row: ContactRequest) {
    this.editing[row._id] = false;
    this.editedRow = {};
  }

  deleteRow(row: ContactRequest) {
    if (confirm('Are you sure you want to delete this contact request?')) {
      this.http.delete(`${this.apiRoute}/contact-us/remove/${row._id}`).subscribe(() => {
        this.getAll();
      });
    }
  }
}
