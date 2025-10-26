import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component'; // 🌟 Importa el componente de inicio

export const routes: Routes = [
  {
    // 1. Define la ruta:
    path: '', // <-- La ruta vacía (el "home" o la URL base, ej: http://localhost:4200/)
    
    // 2. Asigna el componente:
    component: InicioComponent // <-- El componente que se cargará para esa ruta
  }
  
  // Puedes agregar otras rutas aquí, por ejemplo:
  /*
  {
    path: 'productos',
    loadComponent: () => import('./productos/productos.component').then(m => m.ProductosComponent) 
  }
  */
];