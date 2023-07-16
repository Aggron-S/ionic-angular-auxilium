import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class DiscoverContentPage implements OnInit, OnDestroy {
  cardData: CardData = { data: [] };
  currentMode!: string;
  displayFab!: boolean;
  displaySideBar!: boolean; 
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
    if (this.platform.width() < 768) {
      this.displaySideBar = !this.displaySideBar;
    } else {
      this.displaySideBar = false;
    }
  }
  
  ngOnInit() {
    // Subscribe
    this.stateService.currentMode$.subscribe((currentMode) => {
      this.currentMode = currentMode;
    })
    this.getData();
    
    // Fab button
    this.displayFab = this.platform.width() < 768;
    window.addEventListener("resize", () => {
      this.displayFab = this.platform.width() < 768;
      this.platform.width() >= 768 && (this.displaySideBar = false); 
    });
  }

  ngOnDestroy() {
    window.removeEventListener("resize", () => {
      this.displayFab = this.platform.width() < 768;
      this.platform.width() >= 768 && (this.displaySideBar = false); 
    });
  }
}
