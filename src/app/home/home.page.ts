import { Component, OnInit } from '@angular/core';
import { StateService } from '../shared/state.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  currentMode!: string;
  constructor(private stateService: StateService) {}

  ngOnInit() {
    // Subscribe
    this.stateService.currentMode$.subscribe((currentMode) => {
      this.currentMode = currentMode;
    })
  }
}
