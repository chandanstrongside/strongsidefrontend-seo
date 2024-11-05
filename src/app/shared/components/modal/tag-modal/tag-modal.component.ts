import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TagService } from '../../../../data/services/global';
import { LoaderService } from '../../../services/loader.service';
import { first } from 'rxjs';
import { CommonModule } from '@angular/common';
import { TagInputModule } from 'ngx-chips';

@Component({
  selector: 'app-tag-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TagInputModule],
  templateUrl: './tag-modal.component.html',
  styles: [
    '.modal-dialog-scrollable .modal-content { overflow: visible !important; } ngb-modal-window .component-host-scrollable { overflow: visible !important; } .modal-dialog-scrollable .modal-body { overflow-y: visible !important; } .ng2-dropdown-menu { z-index: 9999 !important; }'
  ],
  encapsulation: ViewEncapsulation.None
})
export class TagModalComponent implements OnInit {
  @Input() fromParent: any;

  detailForm: FormGroup;
  tagcollections: any[];
  public validate = false;
  tags: any[] = [];
  // moviesLoading = false;
  // tagInput$ = new Subject<string>();
  // minLengthTerm = 1;

  constructor(
    public activeModal: NgbActiveModal,
    private tagService: TagService,
    private formBuilder: FormBuilder,
    public toster: ToastrService,
    private loaderService: LoaderService
  ) {
    this.tagcollections = [];
    this.detailForm = this.formBuilder.group({
      name: [null, Validators.required],
      tagvalue: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.fromParent.originRefId && this.fromParent.originRefId != '00000000-0000-0000-0000-000000000000') {
      this.getTagByOrigin();
    }

    this.tagService.all().subscribe(resp => {
      const tags: any = [];
      resp.forEach(data => {
        tags.push({ value: data.id, label: data.name })

        if (data.prefix == this.fromParent.tagName) {
          this.detailForm.controls[`name`].setValue(data.name);
        }
      });

      this.tagcollections = tags;
    });
    this.getTags('');
  }

  closeModal(sendData: any) {
    this.activeModal.close(sendData);
  };

  // trackByFn(item: any) {
  //   return item;
  // }
  // loadTag() {
  //   this.tags = concat(
  //     of([]), // default items
  //     this.tagInput$.pipe(
  //       filter(res => {
  //         return res !== null && res.length >= this.minLengthTerm
  //       }),
  //       distinctUntilChanged(),
  //       debounceTime(800),
  //       tap(() => this.moviesLoading = true),
  //       switchMap(term => {

  //         return this.getTags(term).pipe(
  //           catchError(() => of([])), // empty list on error
  //           tap(() => this.moviesLoading = false)
  //         )
  //       })
  //     )
  //   );
  // }
  // getTags(term: string): Observable<any> {
  //   return this.tagService.getTagName(term, this.fromParent.tagName).pipe(map(resp => {
  //     return resp
  //   })
  //   );
  // };

  getTags(term: string) {
    if (term) {
      term = term.toLowerCase();
    }
    this.tagService.getTagName(term, this.fromParent.tagName).subscribe(resp => {
      this.tags = resp
    });
  };

  onTextChange(event: any) {
    this.getTags(event);
  };

  getTagByOrigin() {
    this.tagService.tagByOriginId(this.fromParent.originRefId).subscribe(resp => {
      if (resp && resp.length > 0) {
        let array1: any[] = [];
        resp.forEach((tag: any) => {
          array1.push({ display: tag.label, value: tag.value })
        });
        this.detailForm.controls[`tagvalue`].setValue(array1);
      }
    });
  };

  onItemRemoved(event: any) {
    // console.log('Tag Removed event ================>>>>>>>>>>>>', event);

    // let tagTosave = this.detailForm.controls['tagvalue'].value;
    // tagTosave = tagTosave.filter((tag: any) => tag.display !== event.display);
    // this.detailForm.controls['tagvalue'].setValue(tagTosave);

    this.loaderService.isLoading.next(true);
    this.tagService.deleteTag(event.display, this.fromParent.originRefId).subscribe((resp) => {
      this.loaderService.isLoading.next(false);
      this.getTagByOrigin();
      if (!resp) {
        this.toster.error("Failed to remove tag");
      }
    },
      error => {
        this.loaderService.isLoading.next(false);
        this.toster.error("Failed to remove tag");
      });
  };


  submit() {
    if (this.detailForm.invalid) {
      this.validate = true;
      return;
    }
    this.validate = false;

    const tagTosave = this.detailForm.value;
    tagTosave.prefix = this.fromParent.tagName;
    tagTosave.originRefId = this.fromParent.originRefId;
    tagTosave.parentControllerName = '';

    var tagValueArry: any[] = tagTosave.tagvalue;
    var saveTagValueArry: any[] = [];

    tagValueArry.forEach(data => {
      saveTagValueArry.push(data.display);
    });
    tagTosave.tagList = saveTagValueArry;
    tagTosave.type = 'm';

    this.tagService.modify(tagTosave)
      .pipe(first())
      .subscribe((resp: any) => {
        if (resp) {
          this.closeModal('success');
        }
        else {
          this.closeModal('failed');
        }
      },
        error => {
          this.closeModal('failed');
        });
  };
}
