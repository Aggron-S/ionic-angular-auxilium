import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Platform } from '@ionic/angular';
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
  displayFab!: boolean;
  displaySideBar!: boolean; 
  mediaQuery!: MediaQueryList;
  constructor(private location: Location, private platform: Platform, private stateService: StateService) { }
  
  getData = async (): Promise<void> => {
    const { project } = await import("../../data/data.json");
    const url = this.location.path().split('/');
    const currentPath = url[url.length - 1];

    // exclude user projects in public projects
    const publicProj = project.filter(item => !('user_proj' in item));

    if(publicProj.length > 0) {
      publicProj.map((item : any) => {
        item?.id === currentPath && (this.cardData.data.push(item) )
      })
      // this.cardData.data.map(item => {
      //   item.project_updates.map((update : any) => {
          
      //     console.log("ITEM UPDATE: ", update)
      //   })
      // })
    }
    console.log("CARD DATA: HAHAH ",this.cardData.data)
  }

  // For small screen size only
  showSideBar = () => {
    const sidebar = document.getElementById("sidebar");
    const content = document.getElementById("content");
    this.mediaQuery = window.matchMedia("(max-width: 767px)");

    // this.displaySideBar = this.displaySideBar === true ? false : true
    // this.mediaQuery.matches ? (this.displaySideBar = this.displaySideBar === true ? false : true) : (
    //   this.displaySideBar = true
    // );

    if (this.displaySideBar) {
      // sidebar != null && (sidebar.style.left = "0");
      sidebar?.classList.toggle("visible");
      // content != null && (content.style.marginLeft= "260px");
    } else {
      // sidebar != null && (sidebar.style.left = "-250px");
      sidebar?.classList.toggle("invisible");
      // content != null && (content.style.marginLeft= "0");
    }

    // Fab button
    this.platform.width() < 768 ? this.displayFab = true : this.displayFab = false;
  }
  ngOnInit() {
    // Subscribe
    this.stateService.currentMode$.subscribe((currentMode) => {
      this.currentMode = currentMode;
    })
    this.getData();
    
    // Fab button
    this.platform.width() < 768 ? this.displayFab = true : this.displayFab = false;
  }
  
  ngAfterViewInit() {
    // Sidebar & Content
    // this.mediaQuery = window.matchMedia("(max-width: 767px)");
    // this.mediaQuery.matches ? this.displaySideBar = true : this.displaySideBar = false;
    // const sidebar = document.getElementById("sidebar");
    // const content = document.getElementById("content");
    // this.mediaQuery.matches ? (this.displaySideBar = this.displaySideBar === true ? false : true) : (
    //   this.displaySideBar = true
    // );

    // if (this.displaySideBar) {
    //   sidebar != null && (sidebar.style.left = "0");
    //   content != null && (content.style.marginLeft= "260px");
    // } else {
    //   sidebar != null && (sidebar.style.left = "-250px");
    //   content != null && (content.style.marginLeft= "0");
    // }

    // Fab button
    // this.platform.width() < 768 ? this.displayFab = true : this.displayFab = false;

    // window.addEventListener("resize", this.showSideBar);
  }
  ngOnDestroy() {
    window.removeEventListener("resize", this.showSideBar);
  }
}
