import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'custom-tabs',
	templateUrl: 'custom-tabs.html'
})
export class CustomTabsPage {
	activeTabIndex: any = 0;
	
  constructor(private router: Router) {

  }
  
  @Input('items') items: any;
  
  onTabChange(index){
	  console.log(index);
	  this.activeTabIndex = index;
  }
}
