import { Component, OnInit } from '@angular/core';
import { StateService } from '../shared/state.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})

export class AboutusPage implements OnInit {
  currentMode!: string;
  constructor(private stateService: StateService) {}

  ngOnInit() {
    // Subscribe
    this.stateService.currentMode$.subscribe((currentMode) => {
      this.currentMode = currentMode;
    })
  }
}
