import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { StateService } from '../shared/state.service';
@Component({
  selector: 'login-page',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  email !: string;
  pass !: string;
  isAuthenticated! : boolean;
  constructor(private navController: NavController, private alertController: AlertController, private stateService: StateService) { }

  changeAuthStatus () {
    let newAuthStatus = false;
    if(this.stateService.getAuthStatus() === false) {
      newAuthStatus = true;
      this.stateService.setAuthStatus(newAuthStatus);
    }
    console.log("CHANGED AUTH STATUS:", this.stateService.getAuthStatus());
  }

  async login() {
    if (this.email && this.pass) {
      this.changeAuthStatus();
      this.stateService.getAuthStatus() === true && (this.navController.navigateForward("discover"));
      // Clear Input Fields
      this.email = '';
      this.pass = '';
    } else {
      const alert = await this.alertController.create({
        header: "Error",
        message: "Please Complete the Form.",
        buttons: ["OK"]
      });
      await alert.present();
    }
  }

  ngOnInit() {
    // Subscribe to User Authentication Events
    // this.stateService.isAuthenticated$.subscribe(isAuthenticated => {
    //   this.isAuthenticated = isAuthenticated;
    // })
  }
}