import { Component } from '@angular/core';
import { StateService } from "./shared/state.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  currentIconName = 'moon-outline';
  currentMode!: string;
  currentTextMode!: string;
  currentNavTextMode = "light";

  constructor(private stateService: StateService) {}

  // Dark/Light mode
  changeTheme() {
    // Get Initial Mode from StateService
    const initialMode = this.stateService.getCurrentMode();
    const initialTextMode = this.stateService.getCurrentTextMode();

    // const newMode = initialMode === 'light' ? 'dark' : 'light';
    // Modify theme
    this.stateService.setCurrentMode(initialMode === 'light' ? 'dark' : 'light');
    this.stateService.setCurrentTextMode(initialTextMode === 'light' ? 'dark' : 'light');

    // Set current theme to current mode from State Service
    this.currentMode = this.stateService.getCurrentMode();
    this.currentTextMode = this.stateService.getCurrentTextMode();

    this.currentIconName = this.currentIconName === 'sunny-outline' ? 'moon-outline' : 'sunny-outline';
    this.currentNavTextMode = this.currentNavTextMode === 'light' ? 'dark' : 'light'; 
  }

}
