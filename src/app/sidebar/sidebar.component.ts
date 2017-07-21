import { Component } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css', '../app.component.css']
})
export class SidebarComponent {
  title: string = 'Christopher Perkins';
  subtitle: string = 'Web Dev & Wizard Tamer';
  linkText: string[] = [
    'Work',
    'About',
    'Resume',
    'Contact'
  ];
}
