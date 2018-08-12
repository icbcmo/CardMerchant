
import {Component, OnInit} from '@angular/core';
import {CardMerchantService} from "../../../service/card-merchant.service";
import {NativeStorage} from "@ionic-native/native-storage";
import { ModalController, Platform,NavController, ViewController } from 'ionic-angular';

declare var localStorage: any;

@Component({
  selector: 'page-userdetail',
  templateUrl: 'userdetail.html'
})

export class UserDetail implements OnInit{
	user: any;

    constructor(
        public platform: Platform,
		public cardMerchantService: CardMerchantService,
		private nativeStorage: NativeStorage,
		public viewCtrl: ViewController,
		public modalCtrl: ModalController,
        public navCtrl: NavController
    ) {
    }


    ngOnInit() {
		this.user = {
			username: '啥活动',
			userid: 100
		}
	}
	
	delUser(){
		
	}
	
	goBack(){
		this.viewCtrl.dismiss();
	}

}
