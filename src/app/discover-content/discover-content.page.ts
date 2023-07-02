import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
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
export class DiscoverContentPage implements OnInit, AfterViewInit {
  cardData: CardData = { data: [] };
  progress = 10
  currentTextMode! : string;
  
  constructor(private location: Location, private stateService: StateService) { }
  
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

  ngOnInit() {
    this.getData();
    this.currentTextMode =  this.stateService.getCurrentTextMode();
  }
  ngAfterViewInit() {
    new Swiper(".cardSwiper", {
      slidesPerView: 3, // Set the number of contents to be displayed in a single view
      spaceBetween: 2, // Adjust the spacing between contents
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
      // // Scrollbar
      // direction: "vertical",
      // freeMode: true,
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      // mousewheel: true,
    });
  }

}
