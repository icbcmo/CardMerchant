
import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {CardMerchantService} from "../../../service/card-merchant.service";
import { ViewController, NavParams,  AlertController, LoadingController } from 'ionic-angular';
import {TipService} from '../../../service/tip.service';

@Component({
  template: `
	<ion-grid class="no-pass">
	  <ion-row>
		<ion-col col-12>申请人姓名：{{item.field6}}</ion-col>
	  </ion-row>
	  <ion-row>
		<ion-col col-12>联系电话：{{item.field12}}</ion-col>
	  </ion-row>
	  <ion-row>
		<button ion-button color="primary" (click)="close()" block>确定</button>
	  </ion-row>
	</ion-grid>
	`
})
export class PopoverPage implements OnInit{	
	item: any;

    constructor(
		public cardMerchantService: CardMerchantService,
		public viewCtrl: ViewController,
		public params: NavParams,
		public loadingCtrl: LoadingController,
		private alertCtrl: AlertController,
		public tipService: TipService
    ) {
    }


    ngOnInit() {
		this.item = this.params.get('item');
		console.log(this.item);
	}
	
	close(){
		this.viewCtrl.dismiss();
		var data = {
			sessionid: localStorage.getItem('SESSIONID'),
			mobile: this.item.mobile,
			name: this.item.name
		};
		console.log(data);
		let loading = this.loadingCtrl.create({
			content: 'Please wait...',
			duration: 5000
		});
		loading.present();
		this.cardMerchantService.approverequest(data).toPromise().then(data=> {
			console.log(Object(data));
			loading.dismiss();
			if(Object(data).code == 0){
				this.tipService.show('提交成功').then( () => {
					
				});
			}else{
				this.alertCtrl.create({
					message: Object(data).message,
					buttons: ['确定']
				}).present();
			}
		}, ()=>{
			loading.dismiss();
			loading = this.loadingCtrl.create({
				spinner: 'hide',
				content: '网络故障',
				duration: 2000
			});
			loading.present();
		});
	}

}
