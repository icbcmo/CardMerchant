
import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { ModalController, Platform,NavController, ViewController } from 'ionic-angular';
import {CardMerchantService} from "../../../service/card-merchant.service";
import {NativeStorage} from "@ionic-native/native-storage";
import { AlertController, LoadingController } from 'ionic-angular';
import {TipService} from '../../../service/tip.service';

declare var localStorage: any;

@Component({
  selector: 'page-adduser',
  templateUrl: 'adduser.html'
})

export class AddUser implements OnInit{
	shopList: any;
	@ViewChild('mobile') Mobile: ElementRef;
	@ViewChild('name') Name: ElementRef;
	@ViewChild('departmentid') Departmentid: ElementRef;
	
    constructor(
        public platform: Platform,
		public cardMerchantService: CardMerchantService,
		private nativeStorage: NativeStorage,
		private alertCtrl: AlertController,
		public loadingCtrl: LoadingController,
		public viewCtrl: ViewController,
		public modalCtrl: ModalController,
        public navCtrl: NavController,
		public tipService: TipService
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
			this.tipService.show('手机号至少8位');
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
					this.tipService.show('提交成功').then( () => {
						this.viewCtrl.dismiss();
					});
				}else{
					this.alertCtrl.create({
						message: Object(data).message,
						buttons: ['确定']
					}).present();
				}
			});
		}
	}
	
	goBack(){
		this.viewCtrl.dismiss();
	}

}