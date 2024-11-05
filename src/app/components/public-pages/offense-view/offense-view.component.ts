import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from '../../../shared/services/loader.service';
import { PlaybookService } from '../../../data/services/offense';
import { NgbNav, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FormationStackComponent } from '../formation-stack/formation-stack.component';
import { FormationsComponent } from '../formations/formations.component';
import { ConceptsComponent } from '../concepts/concepts.component';
import { ModifiersComponent } from '../modifiers/modifiers.component';
import { PlaysComponent } from '../plays/plays.component';

@Component({
  selector: 'app-offense-view',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbNavModule],
  templateUrl: './offense-view.component.html',
  styleUrls: ['./offense-view.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OffenseViewComponent implements OnInit {
  public playbookId: any;
  public refTab: any;
  public isDefaultView: boolean = true;
  public playbook: any;
  //@ViewChild('ngbNavModule') ngbNavModule?: NgbNavModule;
  @ViewChild('ngbNavRef') ngbNavRef?: NgbNav;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loaderService: LoaderService,
    private playbookService: PlaybookService,
  ) {

  }

  ngOnInit(): void {
    this.playbookId = this.route.snapshot.paramMap.get('playbookId');
    this.refTab = this.route.snapshot.paramMap.get('ref');
    if (!this.playbookId) {
      this.isDefaultView = false;
    }

    if (this.playbookId) {
      this.playbookService.get(this.playbookId).subscribe(resp => {
        this.playbook = resp;
      });
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.ngbNavRef) {
        this.ngbNavRef.select(this.refTab || 'tab-1');
      }
    }, 0)
  }

  go_playbook() {
    this.router.navigate(["/offense-public/dashboard"]);
  };

  signIn() {
    this.router.navigate(["/auth/login"]);
  }

}
