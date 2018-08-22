
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
	tradeDate: any;
	total: Number = 0;
	
	@ViewChild('wechattrxno') wechattrxno: ElementRef;
	@ViewChild('wechattrxdate') wechattrxdate: ElementRef;
	@ViewChild('wechattrxamount') wechattrxamount: ElementRef;
    @ViewChild('wechatapplymobile') wechatapplymobile: ElementRef;
	@ViewChild('wechatapplyname') wechatapplyname: ElementRef;

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
		this.pictures=[
			{data:'../../../assets/imgs/refundverify1_1.png',btn:false},
			{data:'../../../assets/imgs/refundverify1_1.png',btn:false},
			{data:'../../../assets/imgs/refundverify1_1.png',btn:false},
			{data:'../../../assets/imgs/refundverify1_1.png',btn:false}
		];
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
				var obj = {
					data:base64Image,
					btn:true
				};
				for(var i=0;i<4;i++){
					if(this.pictures[i].btn == false){
						this.pictures.splice(i,1,obj);
						break;
					}
				}
			});
		}
    }
	
	delPic(index){
		this.pictures.splice(index,1,{data:'../../../assets/imgs/refundverify1_1.png',btn:false,id:index});
		this.total = this.total - 1 ;
	}

    goBack() {
        this.viewCtrl.dismiss();
    }

}
