
import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { Platform } from 'ionic-angular';
import {CardMerchantService} from "../../../service/card-merchant.service";
import {NativeStorage} from "@ionic-native/native-storage";
import { AlertController, LoadingController } from 'ionic-angular';

declare var localStorage: any;

@Component({
  selector: 'page-adduser',
  templateUrl: 'adduser.html'
})

export class AddUserPage implements OnInit{
	shopList: any;
	@ViewChild('mobile') Mobile: ElementRef;
	@ViewChild('name') Name: ElementRef;
	@ViewChild('departmentid') Departmentid: ElementRef;
	
    constructor(
        public platform: Platform,
		public cardMerchantService: CardMerchantService,
		private nativeStorage: NativeStorage,
		private alertCtrl: AlertController,
		public loadingCtrl: LoadingController
    ) {
    }


    ngOnInit() {
		var data = {
			merchantId: localStorage.getItem('MERCHANTID'),
			sessionId: localStorage.getItem('SESSIONID')
		};
		console.log(data);
		this.cardMerchantService.getShopList(data).toPromise().then(data=> {
			console.log(Object(data));
			this.shopList = Object(data).data[0];
		});
	}

	
	submitForm(){
		if(!/^\d{8,11}$/.test(Object(this.Mobile).value)){
			//this.alertCtrl.create({
				//title: '手机号至少8位',
				//subTitle: '手机号至少8位',
				//message: '手机号至少8位',
				//buttons: ['确定']
			//}).present();
			let loading = this.loadingCtrl.create({
				spinner: 'hide',
				content: '手机号至少8位'
			});
			loading.present();
			setTimeout(function(){
				loading.dismiss();
			},1500);
		}else{
			var data = {
				sessionid: localStorage.getItem('SESSIONID'),
				mobile: Object(this.Mobile).value,
				name: Object(this.Name).value,
				departmentid: Object(this.Departmentid).value,
			};
			console.log(data);
			let loading = this.loadingCtrl.create({
				content: 'Please wait...'
			});
			loading.present();
			this.cardMerchantService.addUser(data).toPromise().then(data=> {
				console.log(Object(data));
				loading.dismiss();
				if(Object(data).code == 0){
					console.log('提交成功');
					history.back();
				}else{
					alert(Object(data).message);
				}
			});
		}
	}
	
	goBack(){
		history.back();
	}

}
