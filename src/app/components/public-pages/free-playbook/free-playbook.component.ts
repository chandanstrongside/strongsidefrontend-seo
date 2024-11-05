import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { LoaderService } from '../../../shared/services/loader.service';
import { OffensePublicService } from '../../../data/services/offense-public/offense-public.service';

@Component({
  selector: 'app-free-playbook',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './free-playbook.component.html',
  styleUrls: ['./free-playbook.component.css']
})
export class FreePlaybookComponent implements OnInit {
  email: any;

  constructor(
    public toster: ToastrService,
    private loaderService: LoaderService,
    private offensePublicService: OffensePublicService,
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
  ) {
  }

  ngOnInit(): void {
  }

  submit() {
    const email = this.email;
    this.loaderService.isLoading.next(true);
    this.offensePublicService.saveFreePlayBookAccessEmails(email)
      .pipe(first())
      .subscribe((resp: any) => {
        this.loaderService.isLoading.next(false);
        if (resp === true) {
          this.toster.success("Sucessfully Registered");
          this.modalService.dismissAll();
        }
        else {
          this.toster.error("!Failed somthing went wrong");
        }
      },
        error => {
          this.loaderService.isLoading.next(false);
          this.toster.error("!Failed somthing went wrong");
        });
  };

  skip() {
    this.modalService.dismissAll();
  };

  closeModal(sendData: any) {
    this.activeModal.close(sendData);
  };

}
