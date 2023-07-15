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

  private _userQuery = new BehaviorSubject<string>('');
  public userQuery$ = this._userQuery.asObservable();

  getQuery(): string {
    return this._userQuery.getValue();
  }
  setQuery(value: string) {
    this._userQuery.next(value);
  }

  getcurrentMode(): string {
    return this._currentMode.getValue();
  }
  setcurrentMode(value: string) {
    this._currentMode.next(value);
  }

  getAuthStatus(): boolean {
    return this._isAuthenticated.getValue();
  }
  setAuthStatus(value: boolean) {
    this._isAuthenticated.next(value);
  }
}
