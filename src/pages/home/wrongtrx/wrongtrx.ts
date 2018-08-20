
import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { ViewController, AlertController, LoadingController } from 'ionic-angular';
import {TipService} from '../../../service/tip.service';
import {CardMerchantService} from "../../../service/card-merchant.service";

@Component({
  selector: 'page-wrongtrx',
  templateUrl: 'wrongtrx.html'
})
export class Wrongtrx implements OnInit{
	@ViewChild('billno') Billno: ElementRef;

    constructor(
        public viewCtrl: ViewController,
		public tipService: TipService,
		private alertCtrl: AlertController,
		public loadingCtrl: LoadingController,
		public cardMerchantService: CardMerchantService
    ) {
    }


    ngOnInit() {}
	
	submitForm(){
		//if(!/^\d{8,11}$/.test(Object(this.Mobile).value)){
			//this.tipService.show('手机号至少8位');
		//}else{
			var data = {
				sessionid: localStorage.getItem('SESSIONID'),
				billno: Object(this.Billno).value
			};
			console.log(data);
			let loading = this.loadingCtrl.create({
				content: 'Please wait...',
				duration: 5000
			});
			loading.present();
			this.cardMerchantService.getTrxInfoByMerchantId(data).toPromise().then(data=> {
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
			}, ()=>{
				loading.dismiss();
				loading = this.loadingCtrl.create({
					spinner: 'hide',
					content: '网络故障',
					duration: 2000
				});
				loading.present();
			});
		//}
	}
	
    dismiss() {
        this.viewCtrl.dismiss();
    }

}
