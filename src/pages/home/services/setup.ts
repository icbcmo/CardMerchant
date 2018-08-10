
import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { ModalController, Platform } from 'ionic-angular';
import {CardMerchantService} from "../../../service/card-merchant.service";
import {NativeStorage} from "@ionic-native/native-storage";
import { Router } from '@angular/router';

declare var localStorage: any;

@Component({
  selector: 'page-setup',
  templateUrl: 'setup.html',
})

export class SetupPage implements OnInit{
	
    constructor(
        public platform: Platform,
		public cardMerchantService: CardMerchantService,
		private nativeStorage: NativeStorage,
		private router: Router
    ) {
    }


    ngOnInit() {

		
	}
	
	openUserMgt(){
		this.router.navigate(['usermgt']);
	}
	
	goBack(){
		history.back();
	}

}
