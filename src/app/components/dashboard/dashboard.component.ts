import { afterNextRender, Component, ElementRef, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o'
import { CommonService } from '../../shared/services/common.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CarouselModule,],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  playbookId: any;
  limit = 0;
  page1 = 0;
  videos: any[] = [];
  tmpVideos: any[] = [];
  formationStacks: any[] = [];
  formations: any[] = [];
  concepts: any[] = [];
  plays: any[] = [];
  scrWidth: number = 0;

  public myPlaybooks: any[] = [];
  public purchasePlaybooks: any[] = [];
  public ownPlaybook: any;

  @ViewChild("playbookDashboardVideoViewContent", { static: true })
  playbookDashboardVideoViewContent!: ElementRef<HTMLElement>;
  modalData: any;

  constructor(
    private route: ActivatedRoute,
    private commonService: CommonService,
    private router: Router,
    private modalService: NgbModal,
    // private loaderService: LoaderService,
    private titleService: Title,
    // public toster: ToastrService,
  ) {
    afterNextRender(() => {
      this.scrWidth = window.innerWidth;
      this.titleService.setTitle("Offense Dashboard");
    });
  }

  ngOnInit(): void {
    //this.modalService.open(FreePlaybookComponent, { centered: true });
    this.playbookId = this.route.snapshot.paramMap.get('playbookId');
    //let scrWidth = window.innerWidth;
    if (this.scrWidth && this.scrWidth <= 1600) {
      this.limit = 4;
    } else if (this.scrWidth && this.scrWidth > 1600 && this.scrWidth < 2000) {
      this.limit = 5;
    } else if (this.scrWidth && this.scrWidth > 2000) {
      this.limit = 6;
    } else {
      this.limit = 4;
    }
    this.dashBoardData();
  }

  dashBoardData() {
    //this.loaderService.isLoading.next(true);
    this.commonService.getOffensePublicPlabookDashboardData(this.playbookId, this.limit, '5392518c-787e-4926-b0a3-3aa61f722809').subscribe(resp => {
      //this.loaderService.isLoading.next(false);

      this.videos = resp.videos;
      this.formationStacks = resp.formationStacks;
      this.formations = resp.formations;
      this.concepts = resp.concepts;
      this.plays = resp.plays;
      this.getRelatedVideo();
      //console.log(resp)
    },
      // error => {
      //   this.loaderService.isLoading.next(false);
      // }
    );
  }

  next_video() {
    this.page1 += 1;
    this.getRelatedVideo();
  };
  pre_video() {
    this.page1 -= 1;
    this.getRelatedVideo();
  };
  getRelatedVideo() {
    let arrayStartPosition = (this.page1 * this.limit);
    if (arrayStartPosition > -1 && this.videos && this.videos.length > 0 && this.videos[arrayStartPosition]) {
      this.tmpVideos = [];
      for (let i = arrayStartPosition; i < arrayStartPosition + this.limit; i++) {
        if (this.videos[i]) {
          this.tmpVideos.push(this.videos[i]);
        }
      }
    }
  };

  view_more(tab: string) {
    this.router.navigate(["/offense-public/offense", { ref: tab }]);
  };

  // owl-carousel options
  owlcarousel1Options = {
    loop: true,
    dots: false,
    nav: true,
    repeat: true,
    margin: 10,
    autoWidth: true,
    autoHeight: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 2,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      2000: {
        items: 4
      }
    }
  };

  owlcarousel11options = {
    loop: true,
    dots: false,
    nav: true,
    repeat: true,
    margin: 10,
    autoWidth: true,
    autoHeight: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      2000: {
        items: 4
      }
    }
  };

  // goToConceptDetails(id: string) {
  //   this.router.navigate(["/offense-public/offense-details;id=" + id + ";origin=C;ref=tab-4"]);
  // };

  // goToFormationStackDetails(id: string) {
  //   this.router.navigate(["/offense-public/formation-stack-details;id=" + id + ";ref=tab-1"]);
  // };

  // goToPlaysDetails(id: string) {
  //   this.router.navigate(["/offense-public/offense-details;id=" + id + ";origin=P;ref=tab-5"]);
  // };

  playVideo(modalData: any) {
    this.modalData = modalData;
    this.modalService.open(this.playbookDashboardVideoViewContent, { centered: true, size: "xl" });
  };

  closeModal(modal: any) {
    modal.dismiss();
  };

  // getEditUrlC(id: string) {
  //   return '/offense-public/offense-details;id=' + id + ';origin=C' + ';ref=tab-4';
  // };

  // getEditUrlFS(id: string) {
  //   return '/offense-public/formation-stack-details;id=' + id + ';ref=tab-1';
  // };

  // getEditUrlF(id: string) {
  //   return '/offense-public/offense-details;id=' + id + ';origin=F' + ';ref=tab-3';
  // };

  // getEditUrlP(id: string) {
  //   return '/offense-public/offense-details;id=' + id + ';origin=P' + ';ref=tab-5';
  // };

  handleVideoEnded(event: Event) {
    const videoElement: HTMLVideoElement = event.target as HTMLVideoElement;
    if (videoElement) {
      videoElement.playbackRate = 0.25;
      videoElement.play();
    }
  };

  goToSignUp() {
    this.router.navigate(['/authentication/register']);
  };
}
