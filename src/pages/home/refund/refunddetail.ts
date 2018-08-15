
import {Component, OnInit} from '@angular/core';
import {CardMerchantService} from "../../../service/card-merchant.service";
import {NativeStorage} from "@ionic-native/native-storage";
import { ModalController, Platform,NavController, ViewController, NavParams } from 'ionic-angular';

declare var localStorage: any;

@Component({
  selector: 'page-refunddetail',
  templateUrl: 'refunddetail.html'
})

export class RefundDetail implements OnInit{
	item: any;

    constructor(
        public platform: Platform,
		public cardMerchantService: CardMerchantService,
		private nativeStorage: NativeStorage,
		public viewCtrl: ViewController,
		public modalCtrl: ModalController,
        public navCtrl: NavController,
		public params: NavParams
    ) {
    }


    ngOnInit() {
		console.log(this.params.get('item'));
		this.item = this.params.get('item');
	}
	
	
	
	goBack(){
		this.viewCtrl.dismiss();
	}

}
