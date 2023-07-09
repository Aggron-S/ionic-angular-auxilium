import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Platform } from '@ionic/angular';
import Swiper from 'swiper';
import { StateService } from '../shared/state.service';
interface CardData {
  data: any[];
}

@Component({
  selector: 'app-discover-content',
  templateUrl: './discover-content.page.html',
  styleUrls: ['./discover-content.page.scss'],
})
export class DiscoverContentPage implements OnInit, AfterViewInit, OnDestroy {
  cardData: CardData = { data: [] };
  progress = 10
  currentMode!: string;
  slidesPerView!: number;
  swiper! : Swiper;
  constructor(private location: Location, private platform: Platform, private stateService: StateService) { }
  
  getData = async (): Promise<void> => {
    const { allEvents } = await import("../../data/data.json");
    const url = this.location.path().split('/');
    const currentPath = url[url.length - 1];

    allEvents.map(item => {
      item?.id === currentPath && (this.cardData.data.push(item) )
      // item?.id === currentPath && (this.cardData.data = item as { 
      //   id: string, 
      //   image: string, 
      //   title: string, 
      //   description: string 
      // });
    })

    // Just a random implementation of getting all updates (in the same json file)
    this.cardData.data.push(allEvents);
    console.log("CARD DATA: HAHAH ",this.cardData.data)
  }

  checkSwiperSlidesPerView = () => {
    if (this.platform.width() < 768) {
      this.slidesPerView = 1;
    } 
    else if (this.platform.width() >= 768 && this.platform.width() <= 992) {
      this.slidesPerView = 2;
    } else {
      this.slidesPerView = 3;
    }
    this.swiper.params.slidesPerView = this.slidesPerView;
    this.swiper.update();
    console.log("Swiper Slides per View + screen size: ", this.swiper.params.slidesPerView, this.platform.width())
  }

  ngOnInit() {
    // Subscribe
    this.stateService.currentMode$.subscribe((currentMode) => {
      this.currentMode = currentMode;
    })
    this.getData();
  }
  
  ngAfterViewInit() {
    if (this.platform.width() < 768) {
      this.slidesPerView = 1;
    } 
    else if (this.platform.width() >= 768 && this.platform.width() <= 992) {
      this.slidesPerView = 2;
    } else {
      this.slidesPerView = 3;
    }

    this.swiper = new Swiper(".cardSwiper", {
      slidesPerView: this.slidesPerView,
      spaceBetween: 2, 
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
    });
    window.addEventListener('resize', this.checkSwiperSlidesPerView);
  }
  ngOnDestroy() {
    window.removeEventListener('resize', this.checkSwiperSlidesPerView);
  }
}
