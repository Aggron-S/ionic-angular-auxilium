import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private initialMode: string = 'light';
  private initialTextMode: string = 'light';

  // For Initial Background Color
  getCurrentMode(): string {
    return this.initialMode;
  }
  setCurrentMode(mode: string): void {
    this.initialMode = mode;
  }

  // For Initial Text Color
  getCurrentTextMode() : string {
    return this.initialTextMode;
  }
  setCurrentTextMode(textMode: string) : void {
    this.initialTextMode = textMode;
  }
}
