import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { InicioComponent } from './features/inicio/inicio.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, // contiene header y footer
    children: [
      {
        path: '',
        component: InicioComponent // se carga dentro del <router-outlet> del layout
      },
      // puedes agregar más secciones aquí:
      // { path: 'productos', component: ProductosComponent },
      // { path: 'contacto', component: ContactoComponent },
    ]
  }
];
