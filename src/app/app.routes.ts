import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { PlaysComponent } from './plays/plays.component';

export const routes: Routes = [
    {
      path: "",
      component: LayoutComponent,
      children: [
        {
          path: "dashboard",
          component: DashboardComponent,
        },
        {
          path: "plays",
          component: PlaysComponent,
        },
      ],
    },
    // {
    //   path: "free-playbook-register",
    //   component: FreePlaybookComponent,
    // },
  ];
