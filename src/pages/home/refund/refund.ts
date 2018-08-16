
import {Component, OnInit} from '@angular/core';
import { ModalController, Platform,NavController, ViewController } from 'ionic-angular';
import {CommonRefund} from "./commonrefund";
import {WeixinRefund} from "./weixinrefund";
import {RefundList} from "./refundlist";
import {NativeStorage} from "@ionic-native/native-storage";

@Component({
  selector: 'page-refund',
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
		let modal = this.modalCtrl.create(RefundList);
        modal.present();
	}
	
	goRefundProgress(){
		let modal = this.modalCtrl.create(RefundList);
        modal.present();
	}

    dismiss() {
        this.viewCtrl.dismiss();
    }

}
