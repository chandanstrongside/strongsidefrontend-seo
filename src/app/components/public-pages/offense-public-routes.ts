import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PublicOffenseDetailsComponent } from "./public-offense-details/public-offense-details.component";
import { OffensePublicDashboardComponent } from "./offense-public-dashboard/offense-public-dashboard.component";
import { OffenseViewComponent } from "./offense-view/offense-view.component";
import { FormationStackComponent } from "./formation-stack/formation-stack.component";
import { FormationsComponent } from "./formations/formations.component";
import { ModifiersComponent } from "./modifiers/modifiers.component";
import { PlaysComponent } from "./plays/plays.component";
import { ConceptsComponent } from "./concepts/concepts.component";
import { FormationStackDetailsComponent } from "./formation-stack-details/formation-stack-details.component";
import { OffensePublicLayoutComponent } from "./shared/offense-public-layout/offense-public-layout.component";
import { SearchComponent } from "./shared/search/search.component";
import { DepthChartComponent } from "./depth-chart/depth-chart.component";
import { PublicFootballMindCardComponent } from "./public-football-mind-card/public-football-mind-card.component";

export const OffensePublicRoutes: Routes = [
  {
    path: "",
    component: OffensePublicLayoutComponent,
    children: [
      {
        path: "dashboard",
        component: OffensePublicDashboardComponent,
      },
      {
        path: "offense",
        component: OffenseViewComponent,
      },
      {
        path: "formation-stack",
        component: FormationStackComponent,
      },
      {
        path: "modifiers",
        component: ModifiersComponent,
      },
      {
        path: "formations",
        component: FormationsComponent,
      },
      {
        path: "concepts",
        component: ConceptsComponent,
      },
      {
        path: "plays",
        component: PlaysComponent,
      },
      {
        path: "offense-details",
        component: PublicOffenseDetailsComponent,
      },
      {
        path: "formation-stack-details",
        component: FormationStackDetailsComponent,
      },
      {
        path: "depth-chart",
        component: DepthChartComponent,
      },
      {
        path: "search",
        component: SearchComponent,
      },
      {
        path: "football-mind-card",
        component: PublicFootballMindCardComponent,
      },
    ],
  },
];