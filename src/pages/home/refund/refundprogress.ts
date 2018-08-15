
import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {CardMerchantService} from "../../../service/card-merchant.service";
import { ViewController } from 'ionic-angular';
import { AlertController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-refundprogress',
  templateUrl: 'refundprogress.html',
})
export class RefundProgress implements OnInit{

	items: any;
	
    constructor(
		public cardMerchantService: CardMerchantService,
		public viewCtrl: ViewController,
		public loadingCtrl: LoadingController,
		private alertCtrl: AlertController
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
			this.items = [ {cardno: '123456',status: '已审批'},{cardno: '123456',status: '已审批'}];
			console.log(this);
		});
	}

    goBack() {
        this.viewCtrl.dismiss();
    }
}
