import { Component, OnInit } from '@angular/core';
import { StateService } from '../shared/state.service';

interface CardData {
  data: any[];
}

@Component({
  selector: 'app-userproj',
  templateUrl: './userproj.page.html',
  styleUrls: ['./userproj.page.scss'],
})
export class UserprojPage implements OnInit {
  cardData: CardData = { data: [] };
  currentMode!: string;
  hasFetchedData!: boolean;
  constructor(private stateService: StateService) {}

  getData = async (): Promise<void> => {
    const { project } = await import("../../data/data.json");

    // Check if user has existing projects
    const userProjArray = project
    .map((item : any) => ('user_proj' in item) ? item.user_proj : undefined)
    .find(userProj => userProj && userProj.length > 0);

    if (userProjArray) {
      this.hasFetchedData = true;
      // loading imitation
      setTimeout(() => {
        this.cardData.data = userProjArray;
      }, 1000);
    } else {
      this.hasFetchedData = false;
    }
    console.log(this.cardData);
  }

  ngOnInit() {
    // Subscribe
    this.stateService.currentMode$.subscribe((currentMode) => {
      this.currentMode = currentMode;
    })
    this.getData();
  }
}
