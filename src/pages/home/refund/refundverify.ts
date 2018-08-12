
import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {CardMerchantService} from "../../../service/card-merchant.service";
import { ViewController } from 'ionic-angular';
import { AlertController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-refundverify',
  templateUrl: 'refundverify.html',
})
export class RefundVerify implements OnInit{
	@ViewChild('merchantname') merchantname: ElementRef;
	@ViewChild('departmentname') departmentname: ElementRef;
	@ViewChild('refundcardno4') refundcardno4: ElementRef;
	@ViewChild('trxdate') trxdate: ElementRef;
	@ViewChild('authno') authno: ElementRef;
	@ViewChild('trxamount') trxamount: ElementRef;
	@ViewChild('refundamount') refundamount: ElementRef;
	@ViewChild('applymobile') applymobile: ElementRef;

    constructor(
		public cardMerchantService: CardMerchantService,
		public viewCtrl: ViewController,
		public loadingCtrl: LoadingController,
		private alertCtrl: AlertController
    ) {
    }


    ngOnInit() {}
	
	submitForm(){
		var data = {
			sessionid: localStorage.getItem('SESSIONID'),
			merchantid: localStorage.getItem("MERCHANTID"),
			merchantname: localStorage.getItem("MERCHANTNAME"),
			departmentid: localStorage.getItem("DEPARTMENTID"),
			departmentname: Object(this.departmentname).value,
			refundcardno4: Object(this.refundcardno4).value,
			trxdate: Object(this.trxdate).value,
			authno: Object(this.authno).value,
			trxamount: Object(this.trxamount).value,
			refundamount: Object(this.refundamount).value,
			//applymobile: localStorage.getItem("APPLYMOBILE"),
			applymobile: Object(this.applymobile).value 
		};
		console.log(data);
		this.cardMerchantService.addrefund(data).toPromise().then(data=> {
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

    goBack() {
        this.viewCtrl.dismiss();
    }

}
