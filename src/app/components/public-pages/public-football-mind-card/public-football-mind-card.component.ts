import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { Page } from '../../../data/models/page';
import { FootballMindService } from '../../../data/services/global/football-mind.service';
import { SearchFocusService } from '../../../data/services/global/search-focus.service';
import { environment } from '../../../../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-public-football-mind-card',
  standalone: true,
  imports: [CommonModule, NgbModule, ReactiveFormsModule],
  templateUrl: './public-football-mind-card.component.html',
  styleUrls: ['./public-football-mind-card.component.css']
})
export class PublicFootballMindCardComponent implements OnInit {
  page = new Page();
  rows = new Array<any>();
  public openSidebar: boolean = false;
  public listView: boolean = false;
  public col: string = '6';

  searchForm: FormGroup;
  selected: any;
  public files: any[] = [];
  public isDocLoad: boolean = false;
  id: any;
  scrWidth: number;
  searchText: any;
  @ViewChild("searchBox") searchBox: any;
  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: any) {
    if (event) {
      event.preventDefault();
      this.searchBox.nativeElement.focus();
    }
  }

  constructor(
    private formBuilder: FormBuilder,
    public toster: ToastrService,
    private viewScroller: ViewportScroller,
    private footballMindService: FootballMindService,
    private searchFocusService: SearchFocusService
  ) {
    this.scrWidth = window.innerWidth;

    this.page.offset = 0;
    this.page.limit = 20;

    this.searchForm = this.formBuilder.group({
      searchText: [''],
      accountId: [environment.publicAcCessPlayBookId],
    });
  }

  ngOnInit() {
    this.loadPage(1);
    this.searchFocusService.modalOpen$.subscribe(isOpen => {
      if (this.searchBox) {
        if (isOpen) {
          this.searchBox.nativeElement.disabled = true;
        }
        else {
          this.searchBox.nativeElement.disabled = false;
        }
      }
    });
  }

  loadPage(page: number) {
    if (page !== this.page.offset) {
      this.page.offset = page;
      this.reloadTable();
    }
  };

  reloadTable() {
    const searchParam = this.searchForm.value;
    searchParam.limit = this.page.limit;
    searchParam.page = this.page.offset;
    searchParam.order = "";
    searchParam.searchText = this.searchForm.controls["searchText"].value;
    searchParam.accountId = this.searchForm.controls["accountId"].value;

    this.footballMindService.cardViewSearch(searchParam)
      .pipe(first())
      .subscribe((resp: any) => {
        if (resp.success) {
          this.rows = resp.result;
          this.page.count = resp.count;
          this.viewScroller.scrollToPosition([0, 0]);
        }
        else {
          this.toster.error("!Failed to load data.");
        }
      },
        error => {
          this.toster.error("!Failed to load data.");
        });
  };

  getEditUrl(id: string) {
    return '/offense-public/offense-details;id=' + id + ';origin=C' + ';ref=tab-4';
  };

  search() {
    this.reloadTable();
  };
}
