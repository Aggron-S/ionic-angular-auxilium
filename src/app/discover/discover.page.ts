import { Component, OnInit } from '@angular/core';
import { StateService } from '../shared/state.service';

interface CardData {
  data: any[];
}
@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})



export class DiscoverPage implements OnInit {
  cardData: CardData = { data: [] };
  currentTextMode!: string;
  
  constructor(private stateService: StateService) {
    this.currentTextMode = this.stateService.getCurrentTextMode();
  }

  getData = async (): Promise<void> => {
    const { allEvents } = await import("../../data/data.json");
    this.cardData.data = allEvents;
  }

  ngOnInit() {
    this.getData();
  }
}
