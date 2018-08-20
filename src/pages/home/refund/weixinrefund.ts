
import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {CardMerchantService} from "../../../service/card-merchant.service";
import { ViewController,  AlertController, LoadingController } from 'ionic-angular';
import {TipService} from '../../../service/tip.service';
import {BaseDate} from '../../../service/BaseDate.service';
import {Camera, CameraOptions} from "@ionic-native/camera";

@Component({
  selector: 'page-weixinrefund',
  templateUrl: 'weixinrefund.html',
})
export class WeixinRefund implements OnInit{
	pictures: any[] = [];
	needView: Boolean = true;
	tradeDate: any;
	
	@ViewChild('wechattrxno') wechattrxno: ElementRef;
	@ViewChild('wechattrxdate') wechattrxdate: ElementRef;
	@ViewChild('wechattrxamount') wechattrxamount: ElementRef;
<<<<<<< HEAD
	@ViewChild('wechatapplymobile') wechatapplymobile: ElementRef;
	@ViewChild('wechatapplyname') wechatapplyname: ElementRef;
=======
    @ViewChild('wechatapplymobile') wechatapplymobile: ElementRef;
	@ViewChild('wechatapplyname') wechatapplyname: ElementRef;
	@ViewChild('name') name: ElementRef;
>>>>>>> 6f9c3970ce29660f8702166aa2f64ef23a29adf0

    constructor(
		public cardMerchantService: CardMerchantService,
		public viewCtrl: ViewController,
		public loadingCtrl: LoadingController,
        private camera: Camera,
		private alertCtrl: AlertController,
		public tipService: TipService
    ) {
    }


    ngOnInit() {
		Object(this.wechatapplymobile).value = localStorage.getItem('MOBILE');
		this.tradeDate = BaseDate.getDateNow();
		this.pictures[0] = 'data:image/gif;base64,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';
	}
	
	submitForm(){
		this.alertCtrl.create({
						message: '退款金额:' + Object(this.wechattrxamount).value,
						buttons: [
							{
								text: '返回修改',
								handler: () => {
									return;
								}
							},
							{
								text: '确认退款',
								handler: () => {
										var data = {
											sessionid: localStorage.getItem('SESSIONID'),
											wechatmid: localStorage.getItem("MERCHANTID"),
											wechatmerchantname: localStorage.getItem("MERCHANTNAME"),
											wechattid: localStorage.getItem("WECHATTID"),
											wechattrxno: Object(this.wechattrxno).value,
											wechattrxdate: this.tradeDate,
											wechattrxamount: Object(this.wechattrxamount).value,
											wechatapplymobile: Object(this.wechatapplymobile).value,
											wechatapplyname: Object(this.wechatapplyname).value,
											wechatapplypicture: this.pictures
										};
										console.log(data);
										let loading = this.loadingCtrl.create({
												content: 'Please wait...',
												duration: 5000
											});
										loading.present();
										this.cardMerchantService.addwechatrefund(data).toPromise().then(data=> {
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
								}
							}
						]
					}).present();
	}
	
	openCamera(){
		if(this.pictures.length > 5){
			this.tipService.show('最多拍照上传5张');
		}else{
			//手機上使用部分開始
			const options: CameraOptions = {
				quality: 80,
				targetWidth: 600,
				targetHeight: 1200,
				//allowEdit: true,
				sourceType: 1,
				destinationType: this.camera.DestinationType.DATA_URL,
				encodingType: this.camera.EncodingType.JPEG,
				mediaType: this.camera.MediaType.PICTURE
			};
	
			this.camera.getPicture(options).then((imageData) => {
				var base64Image = imageData;
				base64Image = 'data:image/jpeg;base64,' + base64Image;
				this.pictures.push(base64Image);
	
				this.needView = true;
			});
		}
    }

    goBack() {
        this.viewCtrl.dismiss();
    }

}
