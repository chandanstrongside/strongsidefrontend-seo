import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { distinctUntilChanged, first, pairwise } from 'rxjs/operators';
import { Modifier } from '../../../data/models/offense';
import { Page } from '../../../data/models/page';
import { OffenseSearchService } from '../../../data/services/offense/offense-search.service';
import { OffensePublicService } from '../../../data/services/offense-public/offense-public.service';
import { SearchFocusService } from '../../../data/services/global/search-focus.service';
import { environment } from '../../../../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-modifiers',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgbModule, NgSelectModule],
  templateUrl: './modifiers.component.html',
  styleUrls: ['./modifiers.component.scss']
})
export class ModifiersComponent implements OnInit {
  @Input() playbookId: any;

  items: any[] = ['Offense'];
  modifiers: Modifier[] = [];
  page = new Page();
  rows = new Array<Modifier>();

  viewType: string = "List";

  public validate = false;
  public tooltipValidation = false;

  public openSidebar: boolean = false;
  public listView: boolean = false;
  public col: string = '6';

  searchForm: FormGroup;
  tags: any[] = [];
  selectedRow: any[] = [];
  updateOptions = [{ 'value': 1, 'label': 'Yesterday' }, { 'value': 7, 'label': 'Week' }, { 'value': 14, 'label': '2 Weeks' }, { 'value': 0, 'label': 'Date Range' }];
  sortBy = [{ label: 'Name: a-z', value: 'Name:asc' }, { label: 'Name: z-a', value: 'Name:desc' }, { label: 'ModifiedAt: Newest', value: 'ModifiedAt:desc' }, { label: 'ModifiedAt: Oldest', value: 'ModifiedAt:asc' }];
  scrWidth: number;

  chboxArray = [{ id: 0, value: 'archive', label: 'Archive' }, { id: 1, value: 'favorite', label: 'Favorite' }]
  selected: any;
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
    private router: Router,
    private formBuilder: FormBuilder,
    public toster: ToastrService,
    private viewScroller: ViewportScroller,
    private offenseSearchService: OffenseSearchService,
    private offensePublicService: OffensePublicService,
    private searchFocusService: SearchFocusService
  ) {
    this.page.offset = 0;
    this.page.limit = 20;
    this.scrWidth = window.innerWidth;

    this.searchForm = this.formBuilder.group({
      archive: [false],
      favorite: [false],
      default: [true],
      searchText: [''],
      names: [],
      mustTags: [],
      dateFilterType: [],
      lastUpdatedFrom: [],
      lastUpdatedto: [],
      order: [''],
      accountId: [environment.publicAcCessPlayBookId],
    });
  }

  ngOnInit(): void {
    this.viewType = window.innerWidth < 480 ? "Grid" : "List";
    if (window.innerWidth > 2500) {
      this.sidebarToggle();
    }

    this.searchForm.get("archive")?.valueChanges.pipe(distinctUntilChanged(), pairwise()).subscribe(([oldValue, newValue]) => {
      if (oldValue && oldValue !== newValue) {
        this.searchForm.controls["favorite"].setValue(false);
        this.searchForm.controls["default"].setValue(false);
      }
      this.reloadTable();
    });
    this.searchForm.get("favorite")?.valueChanges.pipe(distinctUntilChanged(), pairwise()).subscribe(([oldValue, newValue]) => {
      if (oldValue && oldValue !== newValue) {
        this.searchForm.controls["archive"].setValue(false);
        this.searchForm.controls["default"].setValue(false);
      }
      this.reloadTable();
    });
    this.searchForm.controls["default"]?.valueChanges.pipe(distinctUntilChanged(), pairwise()).subscribe(([oldValue, newValue]) => {
      if (oldValue && oldValue !== newValue) {
        this.searchForm.controls["archive"].setValue(false);
        this.searchForm.controls["favorite"].setValue(false);
      }
      this.reloadTable();
    });

    this.searchForm.get("dateFilterType")?.valueChanges.pipe(distinctUntilChanged(), pairwise()).subscribe(([oldValue, newValue]) => {
      if (oldValue && oldValue !== newValue && newValue != 0) {
        this.searchForm.controls["lastUpdatedFrom"].setValue(null);
        this.searchForm.controls["lastUpdatedto"].setValue(null);
        this.reloadTable();
      }
      else {
        this.reloadTable();
      }
    });
    this.searchForm.get("lastUpdatedFrom")?.valueChanges.pipe(distinctUntilChanged(), pairwise()).subscribe(([oldValue, newValue]) => {
      if (oldValue && oldValue !== newValue) {
        this.reloadTable();
      }
    });
    this.searchForm.get("lastUpdatedto")?.valueChanges.pipe(distinctUntilChanged(), pairwise()).subscribe(([oldValue, newValue]) => {
      if (oldValue && oldValue !== newValue) {
        this.reloadTable();
      }
    });
    this.searchForm.controls["order"]?.valueChanges.pipe(distinctUntilChanged(), pairwise()).subscribe(([oldValue, newValue]) => {
      if (oldValue && oldValue !== newValue) {
        this.reloadTable();
      }
    });

    this.loadPage(1);

    this.offenseSearchService.getSearch().subscribe((resp: any) => {
      this.searchText = resp;
      this.searchForm.controls['searchText'].setValue(this.searchText);
    });

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

  onInputSearch(evt: any) {
    return this.offenseSearchService.setSearch(evt.target.value);
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
    searchParam.favorite = this.searchForm.controls["favorite"].value;
    searchParam.archive = this.searchForm.controls["archive"].value;
    searchParam.dateFilterType = this.searchForm.controls["dateFilterType"].value;
    searchParam.lastUpdatedFrom = this.searchForm.controls["lastUpdatedFrom"].value;
    searchParam.lastUpdatedto = this.searchForm.controls["lastUpdatedto"].value;
    searchParam.playbookId = this.playbookId ? this.playbookId : '';
    searchParam.accountId = this.searchForm.controls["accountId"].value;

    var orderByArry = this.searchForm.controls["order"].value ? this.searchForm.controls["order"].value.split(":") : [];
    searchParam.order = orderByArry.length > 0 ? orderByArry[0] : '';
    searchParam.orderDir = orderByArry.length > 1 ? orderByArry[1] : this.page.orderDir;

    // var tagValueArry: any[] = this.searchForm.controls["names"].value;
    // if (tagValueArry && tagValueArry.length) {
    //   var searchTagValueArry: any[] = [];
    //   tagValueArry.forEach(data => {
    //     searchTagValueArry.push(data.value);
    //   });
    //   searchParam.names = searchTagValueArry;
    // }
    // else {
    //   searchParam.names = [];
    // }

    // var mustTagValueArry: any[] = this.searchForm.controls["mustTags"].value;
    // if (mustTagValueArry && mustTagValueArry.length) {
    //   var searchMustTagValueArry: any[] = [];
    //   mustTagValueArry.forEach(data => {
    //     searchMustTagValueArry.push(data.value);
    //   });
    //   searchParam.mustTags = searchMustTagValueArry;
    // }
    // else {
    //   searchParam.mustTags = [];
    // }
    this.selectedRow = [];
    this.offensePublicService.publicModifierSearch(searchParam)
      .pipe(first())
      .subscribe((resp: any) => {
        this.rows = resp.result;
        this.page.count = resp.count;
        this.viewScroller.scrollToPosition([0, 0]);
      },
        error => {
          this.toster.error("!Failed to load data.");
        });
  };
  detail(id: string) {
    return '/offense-public/offense-details;id=' + id + ';origin=M' + ';ref=tab-2';
  };

  getEditUrl(id: string) {
    return '/offense-public/offense-details;id=' + id + ';origin=M' + ';ref=tab-2';
  };

  sidebarToggle() {
    this.openSidebar = !this.openSidebar;
    this.col = '6';
    if (this.openSidebar) {
      this.searchForm.controls['searchText'].setValue(null);
      this.searchForm.controls['searchText'].disable();
    }
    else {
      this.searchForm.controls['searchText'].enable();
    }
  };

  toggleListView(val: boolean) {
    this.listView = val;
  };

  gridColumn(val: string) {
    this.col = val;
    this.toggleListView(false);
  };

  chboxClicked(event: any, i: number) {
    this.searchForm.controls["archive"].setValue(false);
    this.searchForm.controls["favorite"].setValue(false);
    this.selected = i;
    this.chboxArray.forEach((a: any) => {
      if (a.id == i && event.target.checked) {
        this.searchForm.controls[a.value].setValue(true);
        this.reloadTable();
      }
      if (a.id == i && !event.target.checked) {
        this.selected = -1;
        this.searchForm.controls[a.value].setValue(false);
        this.reloadTable();
      }
    });
  };

  search() {
    this.reloadTable();
  };

}
