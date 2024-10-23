import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from '../../shared/services/common.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-play-details',
  standalone: true,
  imports: [CarouselModule, CommonModule, FormsModule],
  templateUrl: './play-details.component.html',
  styleUrl: './play-details.component.css'
})
export class PlayDetailsComponent {
  id: any;
  origin: string = 'P';
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
    private modalService: NgbModal,
    private el: ElementRef,
    private commonService: CommonService,
    private meta: Meta,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.updateMetaTags();
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.isDefaultImg = false;
      this.originName = 'Play';
      this.commonService.getPublicPlayView(this.id).subscribe(data => {
        if (data) {
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
  }

  updateMetaTags() {
    this.titleService.setTitle('Offense Plays Details');

    // Standard Meta Tags
    this.meta.addTag({ name: 'description', content: 'Detail Page of Offensive Plays' });
    this.meta.addTag({ name: 'keywords', content: 'Offensive Plays Details, Related, Plays Related' });

    // Open Graph Meta Tags
    this.meta.addTag({ property: 'og:title', content: 'Offense Plays' });
    this.meta.addTag({
      property: 'og:description', content: 'Offensive Plays details Page'
    });
    this.meta.addTag({ property: 'og:image', content: '../../../assets/images/strategy.png' });
  };

  getConceptPlaysName() {
    this.commonService.getplaysNamePublicView(this.id, '5392518c-787e-4926-b0a3-3aa61f722809').subscribe((resp) => {
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
    this.commonService.getFormationRelated(this.id).subscribe((resp) => {
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
    this.commonService.getRelatedByPlays(this.id, '5392518c-787e-4926-b0a3-3aa61f722809').subscribe((resp) => {
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
    this.router.navigate(['/plays']);
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
          this.commonService.getRelatedByPlays(firstObj.id, '5392518c-787e-4926-b0a3-3aa61f722809').subscribe((resp: any) => {
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
          this.commonService.getFormationRelated(firstObj.id).subscribe((resp: any) => {
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
          this.commonService.getplaysNamePublicView(firstObj.id, '5392518c-787e-4926-b0a3-3aa61f722809').subscribe((resp: any) => {
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
          this.commonService.getRelatedByPlay(firstObj.id).subscribe((resp) => {
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
          this.commonService.getFormationRelated(firstObj.id).subscribe((resp) => {
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
          this.commonService.getplaysNamePublicView(firstObj.id, '5392518c-787e-4926-b0a3-3aa61f722809').subscribe((resp) => {
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
    this.commonService.ConvertIntoTinyUrl(window.location.href).subscribe(resp => {
      if (resp) {
        this.shareUrl = resp.response
        this.whatsAppshareUrl = "https://web.whatsapp.com/send?text=" + this.offenseDetailsData?.name + ". Hey! this is Strongside formation link, Please Click to View. " + this.shareUrl;
        this.instagramShareUrl = "https://api.instagram.com/oembed?url=" + this.offenseDetailsData?.name + ". Hey! this is Strongside formation link, Please Click to View " + this.shareUrl;
        this.twitterShareUrl = "https://twitter.com/intent/tweet?url=" + this.offenseDetailsData?.name + ". Hey! this is Strongside formation link, Please Click to View " + this.shareUrl;

        this.modalService.open(this.shareModal, { centered: true });
      }
      else {
        //this.toster.error("Something went wrong");
      }
    });
  };

  copyInputMessage(inputElement: any) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
    //this.toster.info("link copied to clipboard");
  };
}
