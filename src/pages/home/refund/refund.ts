
import {Component, OnInit} from '@angular/core';
import { ModalController, Platform,NavController, ViewController } from 'ionic-angular';
import {CommonRefund} from "./commonrefund";
import {WeixinRefund} from "./weixinrefund";
import {RefundVerify} from "./refundverify";
import {RefundProgress} from "./refundprogress";
import {NativeStorage} from "@ionic-native/native-storage";

declare var localStorage: any;

@Component({
  selector: 'page-refund',
  templateUrl: 'refund.html'
})
export class Refund implements OnInit{

    BtnDisable: boolean = true;

    constructor(
        public viewCtrl: ViewController,
		public modalCtrl: ModalController,
        public navCtrl: NavController,
		private nativeStorage: NativeStorage
    ) {
    }


    ngOnInit() {
        let uid = localStorage.getItem('UID');
        let level = localStorage.getItem('LEVEL');
        if(!uid || level == 'SECONDCLASS'){
            this.BtnDisable = false;
        }
	}
	
	goCommonRefund(){
		let modal = this.modalCtrl.create(CommonRefund);
        modal.present();
	}
	
	goWeixinRefund(){
		let modal = this.modalCtrl.create(WeixinRefund);
        modal.present();
	}
	
	goRefundVerify(){
		let modal = this.modalCtrl.create(RefundVerify);
        modal.present();
	}
	
	goRefundProgress(){
		let modal = this.modalCtrl.create(RefundProgress);
        modal.present();
	}

    dismiss() {
        this.viewCtrl.dismiss();
    }

}
