import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css', '../app.component.css']
})
export class SidebarComponent {
  @Output() notifyHideSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  title: string = 'Christopher Perkins';
  subtitle: string = 'Web Dev & Wizard Tamer';
  linkText: any = [
    {text: 'Work', link: '/work'},
    {text: 'About', link: '/about'},
    {text: 'Contact', link: '/contact'}
  ];

  hideSidebarMobile(): void {
    console.log('hi');
    this.notifyHideSidebar.emit(false);
  }
}
