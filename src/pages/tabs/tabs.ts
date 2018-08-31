import { Component, OnInit } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage implements OnInit{

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  BtnDisable: boolean = true;

  constructor() {

  }
  
  ngOnInit() {
		var uid = localStorage.getItem('UID');
		if(!uid){
			this.tab2Root = null;
            this.BtnDisable = false;
		}
	}
}
