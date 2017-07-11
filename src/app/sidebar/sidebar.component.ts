import { Component } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  title = 'Christopher Perkins';
  subtitle = 'Web Dev & Wizard Tamer';
  linkText = [
    'Work',
    'About',
    'Contact'
  ];
}
