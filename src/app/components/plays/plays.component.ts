import { CommonModule, ViewportScroller } from '@angular/common';
import { afterNextRender, Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { first } from 'rxjs';
import { Page } from '../../shared/models/page';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonService } from '../../shared/services/common.service';

@Component({
  selector: 'app-plays',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgSelectModule, NgbModule],
  templateUrl: './plays.component.html',
  styleUrl: './plays.component.css'
})
export class PlaysComponent {
  @Input() playbookId: any;

  items: any[] = ['Offense'];
  page = new Page();
  rows = new Array<any>();
  viewType: string = "List";
  public openSidebar: boolean = false;
  public listView: boolean = false;
  public col: string = '6';

  searchForm: FormGroup;
  tags: any[] = [];
  selectedRow: any[] = [];
  updateOptions = [{ 'value': 1, 'label': 'Yesterday' }, { 'value': 7, 'label': 'Week' }, { 'value': 14, 'label': '2 Weeks' }, { 'value': 0, 'label': 'Date Range' }];

  chboxArray = [{ id: 0, value: 'favorite', label: 'Favorite' }, { id: 1, value: 'desktop', label: 'Desktop' },
  { id: 3, value: 'recentCreate', label: 'Latest Created' }, { id: 4, value: 'recentUpdate', label: 'Latest Updated' }, { id: 5, value: 'recentView', label: 'Latest Viewed' },
  { id: 6, value: 'archive', label: 'Archive' }, { id: 7, value: 'onlyShowUpdatable', label: 'Update Required' }]
  selected: any;

  public files: any[] = [];
  public isDocLoad: boolean = false;
  id: any;
  scrWidth: number = 0;
  sortBy = [{ label: 'Name: a-z', value: 'Name:asc' }, { label: 'Name: z-a', value: 'Name:desc' }, { label: 'Latest', value: 'ModifiedAt:desc' }, { label: 'ModifiedAt: Oldest', value: 'ModifiedAt:asc' }];
  modalData: any;
  @ViewChild("playsVideoViewContent", { static: true })
  playsVideoViewContent!: ElementRef<HTMLElement>;
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
    private viewScroller: ViewportScroller,
    private modalService: NgbModal,
    private commonService: CommonService,
  ) {
    afterNextRender(() => {
      this.scrWidth = window.innerWidth;
    });

    this.page.offset = 0;
    this.page.limit = 20;

    this.searchForm = this.formBuilder.group({
      archive: [false],
      favorite: [false],
      desktop: [false],
      media: [false],
      default: [false],
      recentCreate: [false],
      recentUpdate: [false],
      recentView: [false],
      searchText: [''],
      names: [],
      mustTags: [],
      dateFilterType: [],
      lastUpdatedFrom: [],
      lastUpdatedto: [],
      order: [''],
      onlyShowDraft: [false],
      includeDraft: [true],
      onlyShowUpdatable: [false],
      accountId: ['5392518c-787e-4926-b0a3-3aa61f722809'],
    });
  }

  ngOnInit(): void {
    this.searchForm.controls['order'].setValue(this.sortBy[2].value);
    this.selected = 8;
    this.viewType = window.innerWidth < 480 ? "Grid" : "Grid";
    if (window.innerWidth > 2500) {
      this.sidebarToggle();
    }
    this.searchForm.get("dateFilterType")?.valueChanges.subscribe(value => {
      if (value != 0) {
        this.searchForm.controls["lastUpdatedFrom"].setValue(null);
        this.searchForm.controls["lastUpdatedto"].setValue(null);
        this.reloadTable();
      }
      else {
        this.reloadTable()
      }
    });
    this.searchForm.get("lastUpdatedFrom")?.valueChanges.subscribe(value => {
      this.reloadTable();
    });
    this.searchForm.get("lastUpdatedto")?.valueChanges.subscribe(value => {
      this.reloadTable();
    });
    this.searchForm.controls["order"]?.valueChanges.subscribe(value => {
      this.reloadTable();
    });

    this.loadPage(1);

    // this.offenseSearchService.getSearch().subscribe((resp: any) => {
    //   this.searchText = resp;
    //   this.searchForm.controls['searchText'].setValue(this.searchText);
    // });

    // this.searchFocusService.modalOpen$.subscribe(isOpen => {
    //   if (this.searchBox) {
    //     if (isOpen) {
    //       this.searchBox.nativeElement.disabled = true;
    //     }
    //     else {
    //       this.searchBox.nativeElement.disabled = false;
    //     }
    //   }
    // });
  }

  onInputSearch(evt: any) {
    //return this.offenseSearchService.setSearch(evt.target.value);
  };

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
    searchParam.desktop = this.searchForm.controls["desktop"].value;
    searchParam.media = this.searchForm.controls["media"].value;
    searchParam.recentCreate = this.searchForm.controls["recentCreate"].value;
    searchParam.recentUpdate = this.searchForm.controls["recentUpdate"].value;
    searchParam.recentView = this.searchForm.controls["recentView"].value;
    searchParam.onlyShowUpdatable = this.searchForm.controls["onlyShowUpdatable"].value;
    searchParam.onlyShowDraft = this.searchForm.controls["onlyShowDraft"].value;
    searchParam.includeDraft = this.searchForm.controls["includeDraft"].value;
    searchParam.dateFilterType = this.searchForm.controls["dateFilterType"].value;
    searchParam.lastUpdatedFrom = this.searchForm.controls["lastUpdatedFrom"].value;
    searchParam.lastUpdatedto = this.searchForm.controls["lastUpdatedto"].value;
    searchParam.playbookId = this.playbookId ? this.playbookId : '';
    searchParam.accountId = this.searchForm.controls["accountId"].value;

    var orderByArry = this.searchForm.controls["order"].value ? this.searchForm.controls["order"].value.split(":") : [];
    searchParam.order = orderByArry.length > 0 ? orderByArry[0] : '';
    searchParam.orderDir = orderByArry.length > 1 ? orderByArry[1] : this.page.orderDir;

    var tagValueArry: any[] = this.searchForm.controls["names"].value;
    if (tagValueArry && tagValueArry.length) {
      var searchTagValueArry: any[] = [];
      tagValueArry.forEach(data => {
        searchTagValueArry.push(data.value);
      });
      searchParam.names = searchTagValueArry;
    }
    else {
      searchParam.names = [];
    }

    var mustTagValueArry: any[] = this.searchForm.controls["mustTags"].value;
    if (mustTagValueArry && mustTagValueArry.length) {
      var searchMustTagValueArry: any[] = [];
      mustTagValueArry.forEach(data => {
        searchMustTagValueArry.push(data.value);
      });
      searchParam.mustTags = searchMustTagValueArry;
    }
    else {
      searchParam.mustTags = [];
    }
    this.selectedRow = [];
    this.commonService.publicPlaySearch(searchParam)
      .pipe(first())
      .subscribe((resp: any) => {
        if (resp.success) {
          this.rows = resp.result;
          this.page.count = resp.count;
          this.viewScroller.scrollToPosition([0, 0]);
        }
        else {
          //this.toster.error("!Failed to load data.");
        }
      },
        // error => {
        //   this.toster.error("!Failed to load data.");
        // }
      );
  };

  detail(id?: string) {
    this.router.navigate(["/play-details", { id: id }]);
  };

  getEditUrl(id: string) {
    return '/play-details;id=' + id;
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

  toggleListView(val: string) {
    this.viewType = val;
  };

  gridColumn(val: string) {
    this.col = val;
    this.toggleListView('Grid');
  };

  chboxClicked(event: any, i: number) {
    this.searchForm.controls["archive"].setValue(false);
    this.searchForm.controls["favorite"].setValue(false);
    this.searchForm.controls["desktop"].setValue(false);
    this.searchForm.controls["media"].setValue(false);
    this.searchForm.controls["recentCreate"].setValue(false);
    this.searchForm.controls["recentUpdate"].setValue(false);
    this.searchForm.controls["recentView"].setValue(false);
    this.searchForm.controls["onlyShowUpdatable"].setValue(false);
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

  openVideoModal(data: any) {
    this.modalData = data;
    this.modalService.open(this.playsVideoViewContent, { centered: true, size: "xl" });
  };

  closeModal(modal: any) {
    modal.dismiss();
  };

  search() {
    this.searchForm.controls['order'].setValue('');
    this.reloadTable();
  };

  handleVideoEnded(event: Event) {
    const videoElement: HTMLVideoElement = event.target as HTMLVideoElement;
    if (videoElement) {
      videoElement.playbackRate = 0.25;
      videoElement.play();
    }
  }
}
