import { Routes } from '@angular/router';
import { OffensePublicLayoutComponent } from './components/public-pages/shared/offense-public-layout/offense-public-layout.component';

export const routes: Routes = [
  {
    path: 'offense-public',
    component: OffensePublicLayoutComponent,
    loadChildren: () => import('./components/public-pages/offense-public-routes').then((rt) => rt.OffensePublicRoutes)
  }
];

