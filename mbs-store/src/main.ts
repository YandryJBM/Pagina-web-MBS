// src/main.ts

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router'; // ⚠️ Importar esto
import { routes } from './app/app.routes'; // ⚠️ Importar las rutas que definiste

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) // 🌟 Usar las rutas
  ]
}).catch(err => console.error(err));