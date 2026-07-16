// Step 102: Add <router-outlet> in app.component.html
// Step 102: Update header links to use [routerLink]

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <!-- Header with routerLink navigation -->
    <app-header></app-header>

    <!-- Step 102: router-outlet renders the active route component -->
    <router-outlet></router-outlet>

    <footer>
      <p>© 2026 Student Portal. All Rights Reserved.</p>
    </footer>
  `,
  styles: [`
    footer {
      text-align: center;
      padding: 1.5rem;
      background: #1a237e;
      color: rgba(255,255,255,0.7);
      margin-top: 3rem;
      font-size: 0.9rem;
    }
  `]
})
export class AppComponent {
  title = 'student-portal-angular';
}
