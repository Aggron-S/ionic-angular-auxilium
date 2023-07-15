import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { StateService } from '../shared/state.service';

interface CardData {
  data: any[];
}
@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})

export class DiscoverPage implements OnInit {
  cardData: CardData = { data: [] };
  currentMode!: string;
  hasFetchedData!: boolean;
  userQuery!: string;
  constructor(private stateService: StateService, private router: Router) {}

  getData = async (): Promise<void> => {
    const { project } = await import("../../data/data.json");
    // exclude user projects in public projects
    const publicProj = project.filter(item => !('user_proj' in item));
    
    if(publicProj.length > 0) {
      this.hasFetchedData = true;
      // Filter the data based on the project name (search)
      const filteredData = publicProj.filter(item =>
        item.project_name && item.project_name.toLowerCase().includes(this.userQuery.toLowerCase())
      );

      // loading imitation
      setTimeout(() => {
        this.cardData.data = filteredData;
      }, 1000);
      
    } else {
      this.hasFetchedData = false;
    }
    console.log(this.cardData);
  }

  ngOnInit() {
    // Subscribe
    this.stateService.currentMode$.subscribe((currentMode) => {
      this.currentMode = currentMode;
    })

    // Subscribe to User search input events
    this.stateService.userQuery$.subscribe(userQuery => {
      this.userQuery = userQuery;
      console.log("im in discover page and the value for userQuery is: ", this.userQuery);
      this.getData();
    });

    // Subscribe to Router event
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Reset userQuery when navigating away from the page
        this.userQuery = '';
        this.getData();
      }
    });
  }
}
