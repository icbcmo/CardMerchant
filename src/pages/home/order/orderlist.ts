
import {Component, OnInit} from '@angular/core';
import { ModalController, Platform,NavController, ViewController } from 'ionic-angular';
import {CardMerchantService} from "../../../service/card-merchant.service";
import {NativeStorage} from "@ionic-native/native-storage";
import { AlertController, LoadingController } from 'ionic-angular';
import {TipService} from '../../../service/tip.service';
import {OrderdetailsPage} from './orderdetails';
import {SigninPage} from "../../auth/signin";

declare var localStorage: any;

@Component({
  selector: 'page-orderlist',
  templateUrl: 'orderlist.html'
})
export class OrderList implements OnInit{
	items: any;
	
    constructor(
        public viewCtrl: ViewController,
		public modalCtrl: ModalController,
        public navCtrl: NavController,
		private nativeStorage: NativeStorage,
		public loadingCtrl: LoadingController,
		private alertCtrl: AlertController,
		public tipService: TipService,
		public cardMerchantService: CardMerchantService
    ) {
    }


    ngOnInit() {
		
	}
	
	ionViewWillEnter(){
    	localStorage.setItem('WECHATBADGE',0);

		var data = {
			sessionid: localStorage.getItem('SESSIONID'),
		};
		console.log(data);
		this.cardMerchantService.getWeChatTrxList156().toPromise().then(data=> {
			console.log(Object(data));
            if(Object(data).code ==1){
                localStorage.clear();
                let modal = this.modalCtrl.create(SigninPage);
                modal.present();
            }
			if(Object(data).code == 0){
				this.items = Object(data).data;
			}else{
				this.alertCtrl.create({
						message: Object(data).message,
						buttons: ['确定']
					}).present();
			}
		}, ()=>{
			this.loadingCtrl.create({
				spinner: 'hide',
				content: '网络故障',
				duration: 2000
			}).present();
		});
	}
	
	goMachineRequest(){
		
	}
	
	openMachineRequestDetail(item){
		
	}

    toDetails(item){
        let modal = this.modalCtrl.create(OrderdetailsPage,{item:item});
        modal.present();
	}
    toDetails1(){
        let modal = this.modalCtrl.create(OrderdetailsPage);
        modal.present();
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

}
