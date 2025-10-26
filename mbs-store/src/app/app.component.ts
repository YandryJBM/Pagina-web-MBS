// src/app/app.component.ts

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// 🌟 Import your new components
import { HeaderComponent } from './header/header.component'; 
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // 🔽 Add your components to the imports array 🔽
  imports: [RouterOutlet, HeaderComponent, FooterComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mbs-store';
}