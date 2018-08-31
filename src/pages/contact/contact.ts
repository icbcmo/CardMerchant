
import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { ModalController, Platform,NavController, ViewController } from 'ionic-angular';
import {CardMerchantService} from "../../service/card-merchant.service";
import {NativeStorage} from "@ionic-native/native-storage";
import { Router } from '@angular/router';
import {UserMgt} from "./setup/usermgt";
import {SigninPage} from "../auth/signin";
import { TextToSpeech } from '@ionic-native/text-to-speech';

declare var localStorage: any;

@Component({
    selector: 'page-setup',
    templateUrl: 'contact.html'
})

export class ContactPage {
	BtnDisable: boolean = true;
    Mobile: String = "";
    User: String = "";
	
    constructor(
        public platform: Platform,
        public cardMerchantService: CardMerchantService,
        public modalCtrl: ModalController,
        public navCtrl: NavController,
        private tts: TextToSpeech,
        private nativeStorage: NativeStorage,
        public viewCtrl: ViewController
    ) {
    }

    ngOnInit() {
		var uid = localStorage.getItem('UID');
		if(!uid){
			this.BtnDisable = false;
		}
		this.Mobile = localStorage.getItem("MOBILE");
		this.User = localStorage.getItem("NAME");
    }

    openUserMgt(){
        let modal = this.modalCtrl.create(UserMgt);
        modal.present();
    }

    speak(){
        this.tts.speak({text:"微信收款330.30元",locale:"zh-HK",rate:1.4})
            .then(() => console.log('Success'))
            .catch((reason: any) => console.log(reason));
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
