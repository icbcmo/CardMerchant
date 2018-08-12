
import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { ModalController, Platform,NavController, ViewController } from 'ionic-angular';
import {CardMerchantService} from "../../../service/card-merchant.service";
import {NativeStorage} from "@ionic-native/native-storage";
import { Router } from '@angular/router';
import {UserMgt} from "./usermgt";

declare var localStorage: any;

@Component({
  selector: 'page-setup',
  templateUrl: 'setup.html'
})

export class Setup implements OnInit{
	
    constructor(
        public platform: Platform,
		public cardMerchantService: CardMerchantService,
        public modalCtrl: ModalController,
        public navCtrl: NavController,
		private nativeStorage: NativeStorage,
		public viewCtrl: ViewController
    ) {
    }


    ngOnInit() {

		
	}
	
	openUserMgt(){
        let modal = this.modalCtrl.create(UserMgt);
        modal.present();
	}
	
	goBack(){
		this.viewCtrl.dismiss();
	}

}
