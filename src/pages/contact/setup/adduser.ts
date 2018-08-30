
import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { ModalController, Platform,NavController, ViewController } from 'ionic-angular';
import {CardMerchantService} from "../../../service/card-merchant.service";
import {NativeStorage} from "@ionic-native/native-storage";
import { AlertController, LoadingController } from 'ionic-angular';
import {TipService} from '../../../service/tip.service';
import {SigninPage} from "../../auth/signin";

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

    telInspect(value){
    	console.log(value);
        if(!/(^\d{8}$)|(^\d{11}$)/.test(value)){
            this.tipService.show('手機號不合法，請重新輸入');
            Object(this.Mobile).value = '';
		}
	}
	
	submitForm(){
		if(!/(^\d{8}$)|(^\d{11}$)/.test(Object(this.Mobile).value)){
			this.tipService.show('手機號不合法，請重新輸入');
		}else{
			var data = {
				sessionid: localStorage.getItem('SESSIONID'),
				mobile: Object(this.Mobile).value,
				name: Object(this.Name).value,
				departmentid: Object(this.Departmentid).value,
			};
			console.log(data);
			let loading = this.loadingCtrl.create({
				content: 'Please wait...',
				duration: 5000
			});
			loading.present();
			this.cardMerchantService.addUser(data).toPromise().then(data=> {
				console.log(Object(data));
				loading.dismiss();
                if(Object(data).code ==1){
                    localStorage.clear();
                    let modal = this.modalCtrl.create(SigninPage);
                    modal.present();
                }
				if(Object(data).code == 0){
					this.tipService.show('提交成功').then( () => {
						this.viewCtrl.dismiss();
					});
				}else if(Object(data).code === "1"){
                    localStorage.clear();
                    let modal = this.modalCtrl.create(SigninPage);
                    modal.present();
				}
				else{
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
	
	goBack(){
		this.viewCtrl.dismiss();
	}

}
