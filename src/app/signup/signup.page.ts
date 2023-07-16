import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})

export class SignupPage implements OnInit {
  fname !: string;
  lname !: string;
  department !: string;
  email !: string;
  pass !: string;
  repass !: string;
  constructor(private navController: NavController, private alertController: AlertController) { }

  // changeAuthStatus () {
  //   let newAuthStatus = false;
  //   if(this.stateService.getAuthStatus() === false) {
  //     newAuthStatus = true;
  //     this.stateService.setAuthStatus(newAuthStatus);
  //   }
  // }

  async signup() {
    if ((this.fname && this.lname) && (this.department && this.email) && (this.pass && this.repass)) {
      this.navController.navigateForward("login");
      // this.changeAuthStatus();
      // this.stateService.getAuthStatus() === true && (this.navController.navigateForward("discover"));
      // Clear Input Fields
      this.fname = '';
      this.lname = '';
      this.department = '';
      this.email = '';
      this.pass = '';
      this.repass = '';
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

  }
}