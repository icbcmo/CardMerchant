
import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {CardMerchantService} from "../../../service/card-merchant.service";
import {Camera, CameraOptions} from '@ionic-native/camera';
import {ModalController, ViewController} from 'ionic-angular';
import { AlertController, LoadingController } from 'ionic-angular';
import {TipService} from '../../../service/tip.service';
import {BaseDate} from '../../../service/BaseDate.service';
import {SigninPage} from "../../auth/signin";
declare var localStorage: any;

@Component({
  selector: 'page-commonrefund',
  templateUrl: 'commonrefund.html'
})
export class CommonRefund implements OnInit{	
	pictures: any[] = [];
	tradeDate: any;
	total: any = 0;

	CARDNO:any;
	@ViewChild('merchantname') merchantname: ElementRef;
	@ViewChild('departmentname') departmentname: ElementRef;
	@ViewChild('refundcardno4') refundcardno4: ElementRef;
	@ViewChild('trxdate') trxdate: ElementRef;
	@ViewChild('authno') authno: ElementRef;
	@ViewChild('trxamount') trxamount: ElementRef;
	@ViewChild('refundamount') refundamount: ElementRef;
	@ViewChild('applymobile') applymobile: ElementRef;
	@ViewChild('applyname') applyname: ElementRef;
	@ViewChild('transactionref') transactionref: ElementRef;

    constructor(
		public cardMerchantService: CardMerchantService,
		private camera: Camera,
		public viewCtrl: ViewController,
		public loadingCtrl: LoadingController,
		private alertCtrl: AlertController,
		public tipService: TipService,
        public modalCtrl: ModalController
    ) {
    }


    ngOnInit() {
		console.log(localStorage);
		Object(this.merchantname).value = localStorage.getItem('MERCHANTNAME');
		Object(this.departmentname).value = localStorage.getItem('DEPARTMENTNAME');
        Object(this.applyname).value = localStorage.getItem('NAME');
		Object(this.applymobile).value = localStorage.getItem('MOBILE');
		this.tradeDate = BaseDate.getDateNow();

		this.pictures=[
			{data:'assets/imgs/camera_img.png',btn:false},
			{data:'assets/imgs/camera_img.png',btn:false},
			{data:'assets/imgs/camera_img.png',btn:false},
			{data:'assets/imgs/camera_img.png',btn:false}
		];
	}

	openCamera(){
		this.total = (this.total + 1) ;
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
                        this.pictures[i].btn = true;
						break;
					}
				}
			});
		}
    }

	delPic(index){
		this.pictures.splice(index,1,{data:'assets/imgs/camera_img.png',btn:false});
		this.total = (this.total -1);
	}

    fatMoney(oId){
        Object(this[oId]).value = this.tipService.mone(Object(this[oId]).value,2,'.',',','round');
	}
	
	submitForm(){
		var pics = [];
		for(var i=0;i<4;i=i+1){
			if(this.pictures[i].btn == true){
				pics.push(this.pictures[i].data);
			}
		}
		if(Object(this.refundamount).value == "" || Object(this.refundamount).value == undefined || Object(this.refundamount).value == "0" ){
            this.alertCtrl.create({
                title: '請輸入正確的退款金額!',
                //subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
                buttons: ['OK']
            }).present();
		}
		else{


		this.alertCtrl.create({
			title:'退款金额',
			message: Object(this.refundamount).value,
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
							//refundcardno4: Object(this.refundcardno4).value.replace(/\*/g,''),
							refundcardno4: this.CARDNO,
							trxdate: this.tradeDate,
							authno: Object(this.authno).value,
							trxamount: Object(this.trxamount).value.replace(/,/g,''),
							refundamount: Object(this.refundamount).value.replace(/,/g,''),
							applymobile: Object(this.applymobile).value,
							applyname: Object(this.applyname).value,
							picture: pics
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
							if(Object(data).code == 1){
								localStorage.clear();
								let modal = this.modalCtrl.create(SigninPage);
								modal.present();
							}

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
	}

    goBack() {
        this.viewCtrl.dismiss();
    }

    checkTrx(){
        this.cardMerchantService.getRecordByDepartmentIdTransactionRef(Object(this.transactionref).value)
			.toPromise().then(data=>{
				console.log(data);
				console.log(Object(data).data);
				console.log(Object(data).data[0]);
				console.log(Object(Object(data).data[0])[0]);
				console.log(Object(Object(data).data[0])[0].ROW_ID);
				let mydata = Object(Object(data).data[0])[0];
            	this.CARDNO = mydata.CARD_NO;

            	Object(this.refundcardno4).value = mydata.CARD_NO.substr(0,6)+"******"+mydata.CARD_NO.substr(-4);
            	//this.tradeDate = mydata.TXN_DATE.substr(0,4)+"-"+mydata.TXN_DATE.substr(4,2)+"-"+mydata.TXN_DATE.substr(6,2);
            	Object(this.trxdate).value = mydata.TXN_DATE.substr(0,4)+"-"+mydata.TXN_DATE.substr(4,2)+"-"+mydata.TXN_DATE.substr(6,2);
                Object(this.authno).value = mydata.AUTH_CODE;
            	//Object(this.trxamount).value = this.tipService.mone(mydata.TXN_AMOUNT/100,2,'.',',','round');
				 Object(this.trxamount).value = (mydata.TXN_AMOUNT/100).toString();
            	this.fatMoney('trxamount');

		})

	}
}
