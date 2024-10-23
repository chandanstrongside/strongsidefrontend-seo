import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PlaysComponent } from './components/plays/plays.component';
import { PlayDetailsComponent } from './components/play-details/play-details.component';

export const routes: Routes = [{
  path: "",
  component: LayoutComponent,
  children: [
    {
      path: "",
      component: DashboardComponent,
    },
    {
      path: "dashboard",
      component: DashboardComponent,
    },
    {
      path: "plays",
      component: PlaysComponent,
    },
    {
      path: "play-details",
      component: PlayDetailsComponent,
    },
  ],
}
];

