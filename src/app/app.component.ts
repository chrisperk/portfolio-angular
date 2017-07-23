import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displaySidebar: boolean;

  ngOnInit(): void {
    this.displaySidebar = false;
  }

  hideNavMenu() {
    document.getElementById('mobile-sidebar').classList.add('mobile-sidebar');
    document.getElementById('mobile-sidebar').classList.remove('reveal-mobile-sidebar');
    this.displaySidebar = false;
  }

  revealNavMenu() {
    document.getElementById('mobile-sidebar').classList.remove('mobile-sidebar');
    document.getElementById('mobile-sidebar').classList.add('reveal-mobile-sidebar');
    this.displaySidebar = true;
  }
}
