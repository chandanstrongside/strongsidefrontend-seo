import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from '../../../shared/services/loader.service';
import { ConceptService, FormationService, OffensePlayService } from '../../../data/services/offense';
import { OffensePublicService } from '../../../data/services/offense-public/offense-public.service';
import { UrlSharingService } from '../../../data/services/global/url-sharing.service';
import { environment } from '../../../../environments/environment';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-public-offense-details',
  standalone: true,
  imports: [CommonModule, FormsModule, CarouselModule, NgbModule],
  templateUrl: './public-offense-details.component.html',
  styleUrls: ['./public-offense-details.component.css']
})
export class PublicOffenseDetailsComponent implements OnInit {
  id: any;
  origin: any;
  originName: any;
  offenseDetailsData: any;
  relatedVideos: any;
  relatedImages: any;
  related: any;
  videos: any;
  images: any;
  relatedVideosCount = 0;
  relatedImagesCount = 0;
  isDefaultImg: boolean = false;
  @ViewChild("videoViewcontent", { static: true })
  videoViewcontent!: ElementRef<HTMLElement>;
  @ViewChild("defaultViewcontent", { static: true })
  defaultViewcontent!: ElementRef<HTMLElement>;
  modalData: any;
  refTab: any = '';
  defaultRelatedVideos: any[] = [];
  defaultRelatedImages: any[] = [];
  loadMoreIconshow: boolean = false;
  defaultFiles: any[] = [];
  isShowMoreFiles: boolean = false;
  @ViewChild('shareModal', { static: true })
  shareModal!: ElementRef<HTMLElement>;
  public shareUrl: string = "";
  public whatsAppshareUrl: string = "";
  public instagramShareUrl: string = "";
  public twitterShareUrl: string = "";
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public toster: ToastrService,
    private loaderService: LoaderService,
    private conceptService: ConceptService,
    private formationService: FormationService,
    private modalService: NgbModal,
    private offensePublicService: OffensePublicService,
    private el: ElementRef,
    private playService: OffensePlayService,
    private urlSharingService: UrlSharingService,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.refTab = this.route.snapshot.paramMap.get('ref');
    this.origin = this.route.snapshot.paramMap.get('origin');
    if (this.origin && this.id) {
      this.isDefaultImg = false;
      if (this.origin === 'P') {
        this.originName = 'Play';
        this.loaderService.isLoading.next(true);
        this.offensePublicService.getPublicPlayView(this.id).subscribe(data => {
          if (data) {
            this.loaderService.isLoading.next(false);
            this.offenseDetailsData = data;
            this.videos = data.videos;
            this.images = data.images;
            this.related = this.offenseDetailsData.related;
            this.defaultFiles.push(...data.related);
            if (this.offenseDetailsData.defaultFileSeq) {
              this.isDefaultImg = true;
            }
          }
        });
      }
      else if (this.origin === 'C') {
        this.originName = 'Concept';
        this.loaderService.isLoading.next(true);
        this.offensePublicService.getPublicConceptView(this.id).subscribe(data => {
          this.getConceptPlaysName();
          if (data) {
            this.loaderService.isLoading.next(false);
            this.offenseDetailsData = data;
            this.videos = data.videos;
            this.images = data.images;
            if (this.offenseDetailsData.defaultFileSeq) {
              this.isDefaultImg = true;
            }
          }
        });
      }
      else if (this.origin === 'F') {
        this.originName = 'Formation';
        this.loaderService.isLoading.next(true);
        this.offensePublicService.getPublicFormationView(this.id).subscribe(data => {
          this.getFormationPlaysName();
          if (data) {
            this.loaderService.isLoading.next(false);
            this.offenseDetailsData = data;
            this.videos = data.videos;
            this.images = data.images;
            if (this.offenseDetailsData.defaultFileSeq) {
              this.isDefaultImg = true;
            }
          }
        });
      }
      else if (this.origin === 'M') {
        this.originName = 'Modifier';
        this.loaderService.isLoading.next(true);
        this.offensePublicService.getPublicModifierView(this.id).subscribe(data => {
          if (data) {
            this.loaderService.isLoading.next(false);
            this.offenseDetailsData = data;
            this.videos = data.videos;
            this.images = data.images;
            this.related = this.offenseDetailsData.related;
            this.defaultFiles.push(...data.related);
          }
        });
      }
    }
  }

  getConceptPlaysName() {
    this.loaderService.isLoading.next(true);
    this.conceptService.getplaysNamePublicView(this.id, environment.publicAcCessPlayBookId).subscribe((resp) => {
      this.loaderService.isLoading.next(false);
      if (resp) {
        this.relatedVideos = resp.videos;
        this.relatedVideosCount = resp.videos.length;
        this.relatedImages = resp.images;
        this.relatedImagesCount = resp.images.length;
        this.defaultRelatedVideos.push(...resp.videos);
        this.defaultRelatedImages.push(...resp.images);
      }
      else {
        this.relatedVideos = [];
        this.relatedImages = [];
      }
    });
  };

  getFormationPlaysName() {
    this.loaderService.isLoading.next(true);
    this.formationService.getFormationRelated(this.id).subscribe((resp) => {
      this.loaderService.isLoading.next(false);
      if (resp) {
        this.relatedVideos = resp.videos;
        this.relatedVideosCount = resp.videos.length;
        this.relatedImages = resp.images;
        this.relatedImagesCount = resp.images.length;
        this.defaultRelatedVideos.push(...resp.videos);
        this.defaultRelatedImages.push(...resp.images);
      }
      else {
        this.relatedVideos = [];
        this.relatedVideosCount = 0;
        this.relatedImages = [];
        this.relatedImagesCount = 0;
      }
    });
  };

  getPlaysRelated() {
    this.loaderService.isLoading.next(true);
    this.offensePublicService.getRelatedByPlays(this.id, environment.publicAcCessPlayBookId).subscribe((resp) => {
      this.loaderService.isLoading.next(false);
      if (resp) {
        this.relatedVideos = resp.videos;
        this.relatedVideosCount = resp.videos.length;
        this.relatedImages = resp.images;
        this.relatedImagesCount = resp.images.length;
        this.defaultRelatedVideos.push(...resp.videos);
        this.defaultRelatedImages.push(...resp.images);
      }
      else {
        this.relatedVideos = [];
        this.relatedVideosCount = 0;
        this.relatedImages = [];
        this.relatedImagesCount = 0;
      }
    });
  };

  openViewModal(data: any) {
    this.modalData = data;
    this.modalService.open(this.videoViewcontent, { centered: true, size: "xl" });
  };

  openDefaultViewModal(data: any) {
    this.modalData = data;
    this.modalService.open(this.defaultViewcontent, { centered: true, size: "xl" });
  };

  closeModal(modal: any) {
    modal.dismiss();
  };

  owlcarousel1 = [
    { id: 1, img: "assets/images/slider/1.jpg" },
    { id: 2, img: "assets/images/slider/2.jpg" },
    { id: 3, img: "assets/images/slider/3.jpg" },
    { id: 4, img: "assets/images/slider/4.jpg" },
    { id: 5, img: "assets/images/slider/5.jpg" },
    { id: 6, img: "assets/images/slider/6.jpg" },
    { id: 7, img: "assets/images/slider/7.jpg" },
    { id: 8, img: "assets/images/slider/8.jpg" },
    { id: 9, img: "assets/images/slider/9.jpg" },
    { id: 10, img: "assets/images/slider/10.jpg" }
  ];

  owlcarousel1Options = {
    loop: true,
    items: 4,
    margin: 10,
    nav: true,
    dots: false,
    autoWidth: true,
    navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  };

  cancel() {
    this.router.navigate(['/offense-public/offense', { ref: this.refTab }]);
  };

  handleVideoEnded(event: Event) {
    const videoElement: HTMLVideoElement = event.target as HTMLVideoElement;
    if (videoElement) {
      videoElement.playbackRate = 0.25;
      videoElement.play();
    }
  };

  loadMore() {
    let firstObj = this.defaultRelatedImages[0];
    if (firstObj != null) {
      switch (firstObj.origin) {
        case "Plays":
          this.loadMoreIconshow = true;
          this.offensePublicService.getRelatedByPlays(firstObj.id, environment.publicAcCessPlayBookId).subscribe((resp: any) => {
            if (resp) {
              this.loadMoreIconshow = false;
              if (resp.images) {
                this.relatedImages.push(...resp.images);
                this.relatedImagesCount = this.relatedImagesCount + resp.images.length;

                this.defaultRelatedImages.push(...resp.images);
              }
              if (resp.videos) {
                this.relatedVideos.push(...resp.videos);
                this.relatedVideosCount = this.relatedVideosCount + resp.videos.length;

                this.defaultRelatedVideos.push(...resp.videos);
              }

              this.defaultRelatedImages.shift();
            }
          });
          break;
        case "Fomation":
          this.loadMoreIconshow = true;
          this.formationService.getFormationRelated(firstObj.id).subscribe((resp: any) => {
            if (resp) {
              this.loadMoreIconshow = false;
              if (resp.images) {
                this.relatedImages.push(...resp.images);
                this.relatedImagesCount = this.relatedImagesCount + resp.images.length;

                this.defaultRelatedImages.push(...resp.images);
              }
              if (resp.videos) {
                this.relatedVideos.push(...resp.videos);
                this.relatedVideosCount = this.relatedVideosCount + resp.videos.length;

                this.defaultRelatedVideos.push(...resp.videos);
              }

              this.defaultRelatedImages.shift();
            }
          });
          break;
        case "Concept":
          this.loadMoreIconshow = true;
          this.conceptService.getplaysNamePublicView(firstObj.id, environment.publicAcCessPlayBookId).subscribe((resp: any) => {
            if (resp) {
              this.loadMoreIconshow = false;
              if (resp.images) {
                this.relatedImages.push(...resp.images);
                this.relatedImagesCount = this.relatedImagesCount + resp.images.length;

                this.defaultRelatedImages.push(...resp.images);
              }
              if (resp.videos) {
                this.relatedVideos.push(...resp.videos);
                this.relatedVideosCount = this.relatedVideosCount + resp.videos.length;

                this.defaultRelatedVideos.push(...resp.videos);
              }

              this.defaultRelatedImages.shift();
            }
          });
          break;
      }
    }
    // else {
    //     this.isImageLoadMoreShow = false;
    // } 
  };

  loadMoreForPlayAndModifier() {
    let firstObj = this.defaultFiles[0];
    if (firstObj != null) {
      switch (firstObj.origin) {
        case "Plays":
          this.loadMoreIconshow = true;
          this.playService.getRelatedByPlays(firstObj.id).subscribe((resp) => {
            if (resp) {
              this.loadMoreIconshow = false;
              if (resp.images) {
                this.related.push(...resp.images);
                this.defaultFiles.push(...resp.images);
              }
              if (resp.videos) {
                this.related.push(...resp.videos);
                this.defaultFiles.push(...resp.videos);
              }
              this.defaultFiles.shift();
            }
          });
          break;
        case "Fomation":
          this.loadMoreIconshow = true;
          this.formationService.getFormationRelated(firstObj.id).subscribe((resp) => {
            if (resp) {
              this.loadMoreIconshow = false;
              if (resp.images) {
                this.related.push(...resp.images);
                this.defaultFiles.push(...resp.images);
              }
              if (resp.videos) {
                this.related.push(...resp.videos);
                this.defaultFiles.push(...resp.videos);
              }
              this.defaultFiles.shift();
            }
          });
          break;
        case "Concept":
          this.loadMoreIconshow = true;
          this.conceptService.getplaysNamePublicView(firstObj.id, environment.publicAcCessPlayBookId).subscribe((resp) => {
            if (resp) {
              this.loadMoreIconshow = false;
              if (resp.images) {
                this.related.push(...resp.images);
                this.defaultFiles.push(...resp.images);
              }
              if (resp.videos) {
                this.related.push(...resp.videos);
                this.defaultFiles.push(...resp.videos);
              }
              this.defaultFiles.shift();
            }
          });
          break;
      }
    }
    else {
      this.isShowMoreFiles = false;
    }
  };

  social_handels_url_share() {
    this.urlSharingService.ConvertIntoTinyUrl(window.location.href).subscribe(resp => {
      if (resp) {
        this.shareUrl = resp.response
        this.whatsAppshareUrl = "https://web.whatsapp.com/send?text=" + this.offenseDetailsData?.name + ". Hey! this is Strongside formation link, Please Click to View. " + this.shareUrl;
        this.instagramShareUrl = "https://api.instagram.com/oembed?url=" + this.offenseDetailsData?.name + ". Hey! this is Strongside formation link, Please Click to View " + this.shareUrl;
        this.twitterShareUrl = "https://twitter.com/intent/tweet?url=" + this.offenseDetailsData?.name + ". Hey! this is Strongside formation link, Please Click to View " + this.shareUrl;

        this.modalService.open(this.shareModal, { centered: true });
      }
      else {
        this.toster.error("Something went wrong");
      }
    });
  };

  copyInputMessage(inputElement: any) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
    this.toster.info("link copied to clipboard");
  };
}
