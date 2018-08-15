
import {Component, OnInit} from '@angular/core';
import { ModalController, Platform,NavController, ViewController, AlertController, LoadingController } from 'ionic-angular';
import {CardMerchantService} from "../../../service/card-merchant.service";
import {RefundType} from "./refundtype";
import {RefundDetail} from "./refunddetail";
import {RefundProgress} from "./refundprogress";
import {RefundVerify} from "./refundverify";
import {NativeStorage} from "@ionic-native/native-storage";
import {TipService} from '../../../service/tip.service';
import {ShowImage} from "./showimage";

@Component({
  selector: 'page-refund',
  templateUrl: 'refund.html'
})
export class Refund implements OnInit{
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
			this.items = [ {datetime: '2018-08-15',currpeople: 'dwkdjwsd'},{datetime: '2018-08-15',currpeople: 'dwkdjwsd'}];
			console.log(this);
		});
	}
	
	goRefund(){
		let modal = this.modalCtrl.create(RefundType);
        modal.present();
	}
	
	openRefundDetail(item){
		let modal = this.modalCtrl.create(RefundDetail, {item: item});
        modal.present();
	}
	
	goRefundProgress(){
		let modal = this.modalCtrl.create(RefundProgress);
        modal.present();
	}
	
	goRefundVerify(){
		let modal = this.modalCtrl.create(RefundVerify);
        modal.present();
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

    dismiss() {
        this.viewCtrl.dismiss();
    }

}
