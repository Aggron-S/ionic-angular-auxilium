import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private _currentMode = new BehaviorSubject<string>("light");
  private _isAuthenticated = new BehaviorSubject<boolean>(false);
  public isAuthenticated$ = this._isAuthenticated.asObservable();
  public currentMode$ = this._currentMode.asObservable();

  getcurrentMode(): string {
    return this._currentMode.getValue();
  }
  getAuthStatus(): boolean {
    return this._isAuthenticated.getValue();
  }

  setcurrentMode(value: string) {
    this._currentMode.next(value);
  }
  setAuthStatus(value: boolean) {
    this._isAuthenticated.next(value);
  }
}
