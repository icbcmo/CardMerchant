
import {Component, OnInit} from '@angular/core';
import { Platform } from 'ionic-angular';
import {CardMerchantService} from "../../../service/card-merchant.service";
import {NativeStorage} from "@ionic-native/native-storage";
import { Router, ActivatedRoute } from '@angular/router';

declare var localStorage: any;

@Component({
  selector: 'page-userdetail',
  templateUrl: 'userdetail.html'
})

export class UserDetailPage implements OnInit{
	user: any;

    constructor(
        public platform: Platform,
		public cardMerchantService: CardMerchantService,
		private nativeStorage: NativeStorage,
		private router: Router,
		private activatedRoute: ActivatedRoute
    ) {
    }


    ngOnInit() {
		
		this.user = {
			userid: this.activatedRoute.snapshot.params['userid'],
			username: this.activatedRoute.snapshot.params['username']
		}
	}
	
	delUser(){
		
	}
	
	goBack(){
		history.back();
	}

}
