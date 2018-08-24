
import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { ModalController, Platform,NavController, ViewController } from 'ionic-angular';
import {CardMerchantService} from "../../service/card-merchant.service";
import {NativeStorage} from "@ionic-native/native-storage";
import { Router } from '@angular/router';
import {UserMgt} from "./setup/usermgt";
import {SigninPage} from "../auth/signin";

declare var localStorage: any;

@Component({
    selector: 'page-setup',
    templateUrl: 'contact.html'
})

export class ContactPage {
	BtnDisable: boolean = false;
	
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
		var uid = localStorage.getItem('UID');
		if(!uid){
			this.BtnDisable = true;
		}
    }

    openUserMgt(){
        let modal = this.modalCtrl.create(UserMgt);
        modal.present();
    }

    goBack(){
        this.viewCtrl.dismiss();
    }

    test5() {
      localStorage.clear();
      let modal = this.modalCtrl.create(SigninPage);
      modal.present();
    }

}
