import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReportingIssueService } from '../../../../data/services/global/reporting-issue.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { SearchFocusService } from '../../../../data/services/global/search-focus.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reporting-issue',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reporting-issue.component.html',
  styleUrls: ['./reporting-issue.component.css']
})
export class ReportingIssueComponent implements OnInit {
  public reportingIssueForm: FormGroup;
  public validate = false;
  public files: any[] = [];
  constructor(
    private fb: FormBuilder,
    public toster: ToastrService,
    private reportingIssueService: ReportingIssueService,
    private loader: LoaderService,
    private router: Router,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private searchFocusService: SearchFocusService
  ) {
    this.reportingIssueForm = this.fb.group({
      subject: ['', Validators.required],
      email: ['', Validators.email],
      mobileNo: [''],
      description: ['', Validators.required],
    });

    const currentUser = localStorage.getItem('__qu__');
    if (currentUser != null) {
      var userName = JSON.parse(currentUser).userName;
      if (userName) {
        this.reportingIssueForm.controls['email'].setValue(userName);
      }
    }
  }

  onMobileChange(evt: any) {
    if (evt.code !== 'Backspace') {
      let event = this.reportingIssueForm.controls['mobileNo'].value;
      if (event) {
        let newVal = event.replace(/\D/g, '');
        if (newVal.length === 0) {
          newVal = '';
        } else if (newVal.length <= 3) {
          newVal = newVal.replace(/^(\d{0,3})/, '($1)');
        } else if (newVal.length <= 6) {
          newVal = newVal.replace(/^(\d{0,3})(\d{0,3})/, '($1) $2');
        } else if (newVal.length <= 10) {
          newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '($1) $2-$3');
        } else {
          newVal = newVal.substring(0, 10);
          newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '($1) $2-$3');
        }

        this.reportingIssueForm.controls['mobileNo'].setValue(newVal);
      }
      else {
        this.reportingIssueForm.controls['mobileNo'].setValue('');
      }
    }
    else {
      this.reportingIssueForm.controls['mobileNo'].setValue(evt.target.value);
    }
  }

  ngOnInit() {
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  };

  onSelect(event: any) {
    this.files.push(...event.addedFiles);
  };

  onSubmit() {
    if (this.reportingIssueForm.invalid) {
      this.validate = !this.validate;
      return;
    }

    if (!this.reportingIssueForm.controls['email'].value && !this.reportingIssueForm.controls['mobileNo'].value) {
      this.toster.error("Please enter email or mobile no");
      return;
    }

    const dataToSave = this.reportingIssueForm.value;
    let formData = new FormData();
    formData.append('subject', dataToSave.subject);
    formData.append('email', dataToSave.email);
    formData.append('mobileNo', dataToSave.mobileNo);
    formData.append('description', dataToSave.description);

    for (let i = 0; i < this.files.length; i++) {
      formData.append("files[" + i + "]", this.files[i]);
    }

    this.loader.isLoading.next(true);
    this.reportingIssueService.save(formData).subscribe(resp => {
      if (resp && resp.success) {
        this.loader.isLoading.next(false);
        this.modalService.dismissAll('');
        this.searchFocusService.setModalOpen(false);
        Swal.fire('', resp.responseMsg, 'success'
        ).then((result) => {
          this.ngOnInit();
          //this.reportingIssueForm.reset();
          //this.files = [];
        });
      }
      else {
        this.loader.isLoading.next(false);
        this.toster.error(resp.responseMsg);
      }
    },
      error => {
        this.loader.isLoading.next(false);
        this.toster.error("Failed to Send.");
      });
  };

  closeModal(sendData: any) {
    this.activeModal.close(sendData);
    this.searchFocusService.setModalOpen(false);
  };
}
