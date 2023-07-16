import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AlertController, Platform, NavController } from '@ionic/angular';
import { StateService } from "./shared/state.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  currentIconName = 'moon-outline';
  currentMode!: string;
  userQuery!: string;
  isSmallScreen!: boolean;
  isAuthenticated!: boolean;
  subHeaderText: string = '';
  shouldDisplaySubHeader!: boolean;
  shouldDisplaySearch!: boolean;
  inputElement!: HTMLInputElement;
  appStaticPath = ["/", "/home", "/login", "/signup"];
  
  constructor(
    private stateService: StateService, 
    private alertController: AlertController, 
    private platform: Platform, 
    private router: Router,
    private navController: NavController
  ) {}

  changeTheme() {
    const newMode = this.stateService.getcurrentMode() === 'light' ? 'dark' : 'light';
    this.stateService.setcurrentMode(newMode);
    this.currentIconName = this.currentIconName === 'sunny-outline' ? 'moon-outline' : 'sunny-outline';
  }

  logOut() {
    this.stateService.setAuthStatus(false);
    this.navController.navigateForward("/home");
  }

  checkScreenSize = () => {
    this.isSmallScreen = this.platform.width() < 768;
  }

  searchProj(event: KeyboardEvent | MouseEvent) {
    if ((event instanceof KeyboardEvent && event.key === 'Enter') || (event instanceof MouseEvent && event.type === 'click')) {
      event.preventDefault();

      if(!this.isSmallScreen) {
        // Get Input
        const searchInput = <HTMLInputElement>document.getElementById("search-input");
        this.stateService.setQuery(searchInput.value);
      } else {
        // Get Input set to AlertController's input fields
        this.alertController.create({
          inputs: [
            {
              name: 'search',
              placeholder: 'Search a project',
            }
          ],
          buttons: [
            {
              text: 'Search',
              handler: (data) => {
                this.stateService.setQuery(data.search);
              }
            }
          ]
        })
        .then((alert) => {
          alert.present();
          const inputElement = alert.getElementsByTagName('input')[0];
          if (inputElement) {
            const keydownListener = (event : KeyboardEvent) => {
              if (event.key === 'Enter') {
                event.preventDefault();
                this.stateService.setQuery(inputElement.value);
                alert.dismiss();
              }
            };
            // add input event listener 
            inputElement.addEventListener('keydown', keydownListener);
            
            // remove input event listener when alert is dismissed
            alert.onDidDismiss().then(() => {
              inputElement.removeEventListener('keydown', keydownListener);
            });
          }
        });
      }
    }
  }
  
  ngOnInit() {
    // Subscribe to current screen mode (light / dark)
    this.stateService.currentMode$.subscribe((currentMode) => {
      this.currentMode = currentMode;
    });

    // Subscribe to User Authentication Events
    this.stateService.isAuthenticated$.subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });

    // Subscribe to Router Events (get current url)
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentUrl = event.url;
        if (currentUrl.startsWith('/discover')) {
          this.subHeaderText = 'Discover Projects';
        } 
        else if (currentUrl.startsWith('/userproj')) {
          this.subHeaderText = 'Your Projects';
        } 
        else if (currentUrl === '/createproj') {
          this.subHeaderText = 'Start a Project';
        }
        else if (currentUrl === '/aboutus') {
          this.subHeaderText = 'About Us';
        }
        // Activate search bar
        currentUrl === '/discover' ? this.shouldDisplaySearch = true : this.shouldDisplaySearch = false;
        this.shouldDisplaySubHeader = !this.appStaticPath.includes(currentUrl);    // only display subheader if its url doesn't exist on appStaticPath[]
      }
    });

    this.isSmallScreen = this.platform.width() < 768;     // small
    window.addEventListener('resize', this.checkScreenSize);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.checkScreenSize);
  }
}
