
import {Component, OnInit} from '@angular/core';
import { ModalController, Platform,NavController, ViewController } from 'ionic-angular';
import {CommonRefund} from "./commonrefund";
import {WeixinRefund} from "./weixinrefund";
import {RefundVerify} from "./refundverify";
import {RefundProgress} from "./refundprogress";
import {NativeStorage} from "@ionic-native/native-storage";

@Component({
  selector: 'page-home',
  templateUrl: 'refund.html'
})
export class Refund implements OnInit{

    constructor(
        public viewCtrl: ViewController,
		public modalCtrl: ModalController,
        public navCtrl: NavController,
		private nativeStorage: NativeStorage
    ) {
    }


    ngOnInit() {}
	
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
