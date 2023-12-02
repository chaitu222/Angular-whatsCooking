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
    // Perform logout operations if any
    // For example, clearing user session, etc.
    // Then navigate back to the welcome page or login page
    this.router.navigate(['/welcome']);
    // Emitting the logout event
    this.logoutEvent.emit();
  }
}
