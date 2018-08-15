
import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {CardMerchantService} from "../../../service/card-merchant.service";
import { ModalController, Platform,NavController, ViewController, AlertController, LoadingController } from 'ionic-angular';
import {ShowImage} from "./showimage";
import {NativeStorage} from "@ionic-native/native-storage";
import {TipService} from '../../../service/tip.service';

@Component({
  selector: 'page-refundverify',
  templateUrl: 'refundverify.html',
})
export class RefundVerify implements OnInit{
	
	items: any;
	
    constructor(
		public cardMerchantService: CardMerchantService,
		public viewCtrl: ViewController,
		public loadingCtrl: LoadingController,
		private alertCtrl: AlertController,
		public modalCtrl: ModalController,
        public navCtrl: NavController,
		public tipService: TipService,
		private nativeStorage: NativeStorage
    ) {
    }


    ngOnInit() {
		var data = {
			sessionid: localStorage.getItem('SESSIONID'),
			field1: 1  //1-退款列表 2-机器问题列表
		};
		console.log(data);
		let loading = this.loadingCtrl.create({
				content: 'Please wait...'
			});
		loading.present();
		this.cardMerchantService.getrequestlist(data).toPromise().then(data=> {
			console.log(Object(data));
			loading.dismiss();
			if(Object(data).code == 0){
				this.items = Object(data).data;
			}else{
				this.alertCtrl.create({
						message: Object(data).message,
						buttons: ['确定']
					}).present();
			}
		});
	}
	
	goApprove(requestid){
		var data = {
			Sessionid: localStorage.getItem('SESSIONID'),
			requestid: requestid
		};
		console.log(data);
		this.cardMerchantService.approverequest(data).toPromise().then(data=> {
			console.log(Object(data));
			if(Object(data).code == 0){
				let loading = this.loadingCtrl.create({
						content: '提交成功'
					});
					loading.present();
					setTimeout( () => {
						loading.dismiss();
						this.viewCtrl.dismiss();
					}, 1500);
			}else{
				this.alertCtrl.create({
						message: Object(data).message,
						buttons: ['确定']
					}).present();
			}
		});
	}
	
	goDisplay(picurl){
		let modal = this.modalCtrl.create(ShowImage, {picurl: picurl});
        modal.present();
	}
	
	getItems(e){
		console.log(e);
	}

    goBack() {
        this.viewCtrl.dismiss();
    }

}
