import { Component, OnInit } from '@angular/core';
import { StateService } from '../shared/state.service';
@Component({
  selector: 'login-page',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isAuthenticated! : boolean;
  constructor(private stateService: StateService) { }

  changeAuthStatus () {
    let newAuthStatus = false;
    if(this.stateService.getAuthStatus() === false) {
      newAuthStatus = true;
      this.stateService.setAuthStatus(newAuthStatus);
    }
    console.log("CHANGED AUTH STATUS:", this.stateService.getAuthStatus());
  }

  ngOnInit() {
    // Subscribe to User Authentication Events
    // this.stateService.isAuthenticated$.subscribe(isAuthenticated => {
    //   this.isAuthenticated = isAuthenticated;
    // })
  }
}
