import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'page-index',
  templateUrl: 'index.html'
})
export class IndexPage {
	
	tabsData: any;
	
  constructor(private router: Router) {
	this.tabsData=[
		{ title: '商戶服務', url: '/index/home', classname: 'home' },
		{ title: '交易報表', url: '/index/about', classname: 'paper' },
		{ title: '我的信息', url: '/index/user', classname: 'contacts' }
	];
  }
	goHome(){
		this.router.navigate(['index/home']);
	}
	
	goAbout(){
		this.router.navigate(['index/about']);
	}
	
	goUser(){
		this.router.navigate(['index/user']);
	}
}
