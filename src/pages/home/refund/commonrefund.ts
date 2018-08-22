
import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {CardMerchantService} from "../../../service/card-merchant.service";
import {Camera, CameraOptions} from '@ionic-native/camera';
import { ViewController } from 'ionic-angular';
import { AlertController, LoadingController } from 'ionic-angular';
import {TipService} from '../../../service/tip.service';
import {BaseDate} from '../../../service/BaseDate.service';

@Component({
  selector: 'page-commonrefund',
  templateUrl: 'commonrefund.html'
})
export class CommonRefund implements OnInit{	
	pictures: any[] = [];
	tradeDate: any;
	total: any = 0;
	
	
	@ViewChild('merchantname') merchantname: ElementRef;
	@ViewChild('departmentname') departmentname: ElementRef;
	@ViewChild('refundcardno4') refundcardno4: ElementRef;
	//@ViewChild('trxdate') trxdate: ElementRef;
	@ViewChild('authno') authno: ElementRef;
	@ViewChild('trxamount') trxamount: ElementRef;
	@ViewChild('refundamount') refundamount: ElementRef;
	@ViewChild('applymobile') applymobile: ElementRef;
	@ViewChild('applyname') applyname: ElementRef;

    constructor(
		public cardMerchantService: CardMerchantService,
		private camera: Camera,
		public viewCtrl: ViewController,
		public loadingCtrl: LoadingController,
		private alertCtrl: AlertController,
		public tipService: TipService
    ) {
    }


    ngOnInit() {
		console.log(localStorage);
		Object(this.merchantname).value = localStorage.getItem('MERCHANTNAME');
		Object(this.departmentname).value = localStorage.getItem('DEPARTMENTNAME');
		//Object(this.merchantname).value = '测试商户名称';
		//Object(this.departmentname).value = '测试部门名称'; 
		Object(this.applymobile).value = localStorage.getItem('MOBILE');
		this.tradeDate = BaseDate.getDateNow();
		
		this.pictures=[
			{data:'../../../assets/imgs/refundverify1_1.png',btn:false},
			{data:'../../../assets/imgs/refundverify1_1.png',btn:false},
			{data:'../../../assets/imgs/refundverify1_1.png',btn:false},
			{data:'../../../assets/imgs/refundverify1_1.png',btn:false}
		];
	}
	
	openCamera(){
		this.total = this.total +1 ;
        if(this.total > 4){
			this.tipService.show('最多拍照上传4张');
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
	
	submitForm(){
		this.alertCtrl.create({
						message: '退款金额:' + Object(this.refundamount).value,
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
										merchantid: localStorage.getItem("MERCHANTID"),
										merchantname: localStorage.getItem("MERCHANTNAME"),
										departmentid: localStorage.getItem("DEPARTMENTID"),
										departmentname: Object(this.departmentname).value,
										refundcardno4: Object(this.refundcardno4).value,
										trxdate: this.tradeDate,
										authno: Object(this.authno).value,
										trxamount: Object(this.trxamount).value,
										refundamount: Object(this.refundamount).value,
										applymobile: Object(this.applymobile).value,
										applyname: Object(this.applyname).value,
										picture: this.pictures
									};
									console.log(data);
									let loading = this.loadingCtrl.create({
											content: 'Please wait...',
											duration: 5000
										});
									loading.present();
									this.cardMerchantService.addrefund(data).toPromise().then(data=> {
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

    goBack() {
        this.viewCtrl.dismiss();
    }

}
