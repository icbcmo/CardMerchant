
import {Component, OnInit} from '@angular/core';
import { ModalController, Platform,NavController, ViewController, AlertController, LoadingController } from 'ionic-angular';
import {CardMerchantService} from "../../../service/card-merchant.service";
import {Refund} from "./refund";
import {RefundDetail} from "./refunddetail";
import {NativeStorage} from "@ionic-native/native-storage";
import {TipService} from '../../../service/tip.service';
import {ShowImage} from "./showimage";

@Component({
  selector: 'page-refundlist',
  templateUrl: 'refundlist.html'
})
export class RefundList implements OnInit{
	items: any;
	refund: any;
	
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
		this.refund = 'progress';
		
		var data = {
			sessionid: localStorage.getItem('SESSIONID'),
			field1: 1  //1-退款列表 2-机器问题列表
		};
		console.log(data);
		let loading = this.loadingCtrl.create({
				content: 'Please wait...',
				duration: 5000
			});
		loading.present();
		this.cardMerchantService.getrequestlist(data).toPromise().then(data=> {
			console.log(Object(data));
			loading.dismiss();
			if(Object(data).code == 0){
				this.items = Object(data).data;
				if(this.items.length > 0){
					for(var i=0;i<this.items.length;i++){
						switch(this.items[i].status) {
							case '0':
								this.items[i].status = '已审批';
								break;
							case '1':
								this.items[i].status = '审批中';
								break;
							default:
								break;
						}
					}
				}
			}else{
				this.alertCtrl.create({
						message: Object(data).message,
						buttons: ['确定']
					}).present();
			}
			
		}, ()=>{
			loading.dismiss();
			let loading = this.loadingCtrl.create({
				spinner: 'hide',
				content: '网络故障',
				duration: 2000
			});
			loading.present();
		});
	}
	
	openRefundDetail(item){
		let modal = this.modalCtrl.create(RefundDetail, {item: item});
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
	
	goRefund(){
		let modal = this.modalCtrl.create(Refund);
        modal.present();
	}

    dismiss() {
        this.viewCtrl.dismiss();
    }

}