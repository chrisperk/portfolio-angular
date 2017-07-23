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
    document.getElementById('sidebar').classList.add('hidden-xs-down');
    this.displaySidebar = false;
  }

  revealNavMenu() {
    document.getElementById('sidebar').classList.remove('hidden-xs-down');
    this.displaySidebar = true;
  }
}
