import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { InicioComponent } from './features/inicio/inicio.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: InicioComponent
      },
    ]
  }
];
