import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  // styleUrls: ['./cover.component.css', '../app.component.css']
})
export class ContactComponent implements OnInit {
  email: string;
  name: string;
  subject: string;
  message: string;

  ngOnInit(): void {
    this.email = null;
    this.name = null;
    this.subject = null;
    this.message = null;
  }
}
