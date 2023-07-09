import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { StateService } from '../shared/state.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  currentMode!: string;
  constructor(private loadingCtrl: LoadingController, private stateService: StateService) {}

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Dismissing after 3 seconds...',
      duration: 3000,
    });

    await loading.present();
  }

  ngOnInit() {
    // Subscribe
    this.stateService.currentMode$.subscribe((currentMode) => {
      this.currentMode = currentMode;
    })
  }

}
