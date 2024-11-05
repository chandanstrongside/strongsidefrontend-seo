import { CommonModule } from '@angular/common';
import { Component, HostListener, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NavService } from '../../../../shared/services/nav.service';
import { TagService } from '../../../../data/services/global';
import { SearchFocusService } from '../../../../data/services/global/search-focus.service';
import { environment } from '../../../../../environments/environment';
import { TagInputModule } from 'ngx-chips';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, TagInputModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchResult: boolean = false;
  public searchResultEmpty: boolean = false;
  public text: string = "";

  detailForm: FormGroup;
  tags: any[] = [];
  globalResults: any[] = [];
  isRedirect: boolean = false;
  @ViewChild("searchBox") searchBox: any;
  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: any) {
    if (event) {
      event.preventDefault();
      this.searchBox.inputForm.input.nativeElement.focus();
    }
  }
  downArrow: boolean[] = [];
  searchableData: any = {};

  constructor(
    private router: Router,
    public navServices: NavService,
    private formBuilder: FormBuilder,
    private tagService: TagService,
    private zone: NgZone,
    private searchFocusService: SearchFocusService
  ) {
    this.detailForm = this.formBuilder.group({
      tagNames: []
    });
  }

  ngOnInit(): void {
    this.searchFocusService.modalOpen$.subscribe(isOpen => {
      if (this.searchBox) {
        if (isOpen) {
          this.searchBox.inputForm.input.nativeElement.disabled = true;
        }
        else {
          this.searchBox.inputForm.input.nativeElement.disabled = false;
        }
      }
    });
  };

  searchToggle() {
    this.navServices.search = false;
    this.removeFix();
    this.detailForm.controls[`tagNames`].setValue(null);
  };

  checkSearchResultEmpty(items: any) {
    if (!items.length)
      this.searchResultEmpty = true;
    else
      this.searchResultEmpty = false;
  };

  addFix() {
    this.searchResult = true;
    document.getElementsByTagName('body')[0].classList.add('offcanvas');
  };

  removeFix() {
    this.searchResult = false;
    this.text = "";
    document.getElementsByTagName('body')[0].classList.remove('offcanvas');
  };

  onTextChange(event: any) {
    var searchText: string = ""
    if (event) {
      searchText = event.toLowerCase();
    }
    this.tagService.getTagNamePublic(searchText, '', environment.publicAcCessPlayBookId).subscribe(resp => {
      this.tags = resp
    });
  };

  onItemAdded() {
    this.searchGlobalResult();
  };

  onItemRemoved() {
    this.searchGlobalResult();
  };

  searchGlobalResult() {
    let tagNames: string[] = [];
    var tagValueArry: any[] = this.detailForm.controls[`tagNames`].value;
    if (tagValueArry && tagValueArry.length) {
      tagValueArry.forEach(data => {
        tagNames.push(data.value);
      });
    }

    this.searchableData.searchText = tagNames;
    this.searchableData.accountId = environment.publicAcCessPlayBookId;
    this.tagService.globalSearchByTagPublic(this.searchableData).subscribe(resp => {
      this.isRedirect = false;
      this.globalResults = resp;
      this.checkSearchResultEmpty(resp);
      if (this.globalResults?.length === 1 && this.globalResults[0].globalTags.length === 1) {
        this.isRedirect = true;
        window.open(this.globalResults[0].globalTags[0].url);
      }
    });
    this.addFix()
  };

  cancel() {
    this.router.navigate(['offense-public/dashboard']);
  };

  onScroll(event: any, i: any) {
    this.zone.run(() => {
      if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight - 1) {
        this.downArrow[i] = false;
      }
      else {
        this.downArrow[i] = true;
      }
    });
  };
}
