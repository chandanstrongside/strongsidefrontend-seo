import { afterNextRender, Component, OnInit } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
import { NgbModal, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { LayoutService } from "../../../../shared/services/layout.service";
import { NavService } from "../../../../shared/services/nav.service";
import { SearchFocusService } from "../../../../data/services/global/search-focus.service";
import { CommonModule } from "@angular/common";
import { ReportingIssueComponent } from "../../others/reporting-issue/reporting-issue.component";

@Component({
  selector: "app-offense-public-layout",
  standalone: true,
  imports: [CommonModule, NgbModule, RouterOutlet],
  templateUrl: "./offense-public-layout.component.html",
  styleUrls: ["./offense-public-layout.component.scss"],
})
export class OffensePublicLayoutComponent implements OnInit {
  public dark: boolean =
    this.layout.config.settings.layout_version == "dark-only" ? true : false;
  menus = [
    {
      name: "Formation Sets",
      routeUrl: "/offense-public/offense;ref=tab-1",
      icon: "icofont icofont-navigation-menu",
      isActive: false,
    },
    {
      name: "Modifiers",
      routeUrl: "/offense-public/offense;ref=tab-2",
      icon: "icofont icofont-ui-edit",
      isActive: false,
    },
    {
      name: "Formations",
      routeUrl: "/offense-public/offense;ref=tab-3",
      icon: "icofont icofont-cube",
      isActive: false,
    },
    {
      name: "Concepts",
      routeUrl: "/offense-public/offense;ref=tab-4",
      icon: "icofont icofont-layers",
      isActive: false,
    },
    {
      name: "Plays",
      routeUrl: "/offense-public/offense;ref=tab-5",
      src: "../../../../assets/images/strategy.png",
      isActive: false,
    },
    {
      name: "Depth Chart",
      routeUrl: "/offense-public/depth-chart",
      icon: "fa fa-bar-chart-o",
      isActive: false,
    },
    {
      name: "Football Mind",
      routeUrl: "/offense-public/football-mind-card",
      icon: "icofont icofont-brand-att",
      isActive: false,
    },
    {
      name: "FAQs",
      routeUrl: "/docs",
      icon: "fa fa-question-circle",
      isActive: false,
    },
  ];
  menuTogggle: boolean = false;
  constructor(private router: Router, public layout: LayoutService,
    public navServices: NavService, private modalService: NgbModal, private searchFocusService: SearchFocusService) {
    afterNextRender(() => {
      let themeColor = localStorage.getItem("__APP-THEME__");
      if (themeColor) {
        setTimeout(() => {
          this.layout.config.settings.layout_version = themeColor ?? "light";

          if (this.layout.config.settings.layout_version == "dark-only") {
            this.dark = true;
          }
        }, 0);
      }
    });
  }

  ngOnInit(): void { }

  ngAfterViewInit() {
  }

  searchToggle() {
    this.router.navigate(["/offense-public/search"]);
  }

  layoutToggle() {
    localStorage.removeItem("__APP-THEME__");
    this.dark = !this.dark;
    this.layout.config.settings.layout_version = this.dark
      ? "dark-only"
      : "light";
    localStorage.setItem("__APP-THEME__", this.dark ? "dark-only" : "light");
  };

  click_menu(menu: any) {
    this.menus.forEach((element) => {
      element.isActive = false;
    });
    menu.isActive = true;
  };

  sidebarToggle() {
    this.menuTogggle = !this.menuTogggle;
  };

  goToFacebook() {
    window.open('https://www.facebook.com/StrongsideApp', "_blank");
  };

  goToReportingIssue() {
    this.modalService.open(ReportingIssueComponent, { centered: true });
    this.searchFocusService.setModalOpen(true);
  };
}
