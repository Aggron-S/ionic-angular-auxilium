import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Platform } from '@ionic/angular';
import { StateService } from "./shared/state.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  currentIconName = 'moon-outline';
  currentMode!: string;
  isSmallScreen!: boolean;
  isAuthenticated!: boolean;
  shouldDisplaySubHeader!: boolean;
  appStaticPath = ["/", "/home", "/login", "/signup"];

  constructor(private stateService: StateService, private platform: Platform, private router: Router) {}

  changeTheme() {
    const newMode = this.stateService.getcurrentMode() === 'light' ? 'dark' : 'light';
    this.stateService.setcurrentMode(newMode);
    this.currentIconName = this.currentIconName === 'sunny-outline' ? 'moon-outline' : 'sunny-outline';
  }

  checkScreenSize = () => {
    this.isSmallScreen = this.platform.width() < 768;
  }

  searchProj() {
    
  }
  
  ngOnInit() {
    // Subscribe to current screen mode (light / dark)
    this.stateService.currentMode$.subscribe((currentMode) => {
      this.currentMode = currentMode;
    })

    // Subscribe to User Authentication Events
    this.stateService.isAuthenticated$.subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    })

    // Subscribe to Router Events (get current url)
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.url;
        console.log("this router url: ", currentUrl);
        this.shouldDisplaySubHeader = !this.appStaticPath.includes(currentUrl);    // only display subheader if its url doesn't exist on appStaticPath[]
      }
    });

    this.isSmallScreen = this.platform.width() < 768;     // medium
    window.addEventListener('resize', this.checkScreenSize);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.checkScreenSize);
    // <ion-router-outlet> does handle automatic destruction of listeners and subscriptions in Angular's context (using Angular's builtin listeners and subscriptions)
    // this.subscription.unsubscribe();
  }
}
