import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() logoutEvent = new EventEmitter<void>();

  constructor(private router: Router) {}

  logout(): void {
    this.router.navigate(['/welcome']);
    this.logoutEvent.emit();
  }
}
