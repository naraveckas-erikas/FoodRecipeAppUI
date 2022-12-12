import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {
  constructor(private router: Router) {}

  title = 'Food recipe app';
  showFiller = false;
  isMenuVisible = true;

  ngDoCheck() {
    const currentRoute = this.router.url;
    if (currentRoute == '/login' || currentRoute == '/register') {
      this.isMenuVisible = false;
    } else {
      this.isMenuVisible = true;
    }
  }

  handleLogout() {
    localStorage.clear();
  }
}
