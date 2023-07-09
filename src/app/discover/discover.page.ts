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
  currentMode!: string;
  progress = 10;
  constructor(private stateService: StateService) {}

  getData = async (): Promise<void> => {
    const { allEvents } = await import("../../data/data.json");
    this.cardData.data = allEvents;
  }

  ngOnInit() {
    // Subscribe
    this.stateService.currentMode$.subscribe((currentMode) => {
      this.currentMode = currentMode;
    })

    this.getData();
  }
}
