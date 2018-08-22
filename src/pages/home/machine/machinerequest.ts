
import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {CardMerchantService} from "../../../service/card-merchant.service";
import {Camera, CameraOptions} from '@ionic-native/camera';
import { ViewController } from 'ionic-angular';
import { AlertController, LoadingController } from 'ionic-angular';
import {TipService} from '../../../service/tip.service';

@Component({
  selector: 'page-machinerequest',
  templateUrl: 'machinerequest.html'
})
export class MachineRequest implements OnInit{	
	items: any;
	pictures: any[] = [];
	total: any = 0;
	
	@ViewChild('machinerequesttype') machinerequesttype: ElementRef;
	@ViewChild('machineno') machineno: ElementRef;
	@ViewChild('machineapplyname') machineapplyname: ElementRef;
	@ViewChild('machineapplymobile') machineapplymobile: ElementRef;
	@ViewChild('machinerequestdesc') machinerequestdesc: ElementRef;

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
		console.log(this);
		this.items = ["机器","纸张","屏幕"];
	
		this.pictures=[
			{data:'../../../assets/imgs/refundverify1_1.png',btn:false},
			{data:'../../../assets/imgs/refundverify1_1.png',btn:false},
			{data:'../../../assets/imgs/refundverify1_1.png',btn:false},
			{data:'../../../assets/imgs/refundverify1_1.png',btn:false}
		];
		
	}
	
	openCamera(){
		this.total = this.total + 1 ;
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
			
			//模拟测试
			var obj = {
					data:'../../../assets/imgs/juana.gif',
					btn:true
				};
			for(var i=0;i<4;i=i+1){
				if(this.pictures[i].btn == false){
					this.pictures.splice(i,1,obj);
					break;
				}
			}
			
			//拍照
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
		var data = {
			sessionid: localStorage.getItem('SESSIONID'),
			machinemerchantid: localStorage.getItem("MERCHANTID"),
			machinemerchantname: localStorage.getItem("MERCHANTNAME"),
			machinedepartmentid: localStorage.getItem("DEPARTMENTID"),
			machinedepartmentname: localStorage.getItem("DEPARTMENTNAME"),
			machinerequesttype: Object(this.machinerequesttype).value,
			machineno: Object(this.machineno).value,
			machineapplyname: Object(this.machineapplyname).value,
			machineapplymobile: Object(this.machineapplymobile).value,
			machinerequestdesc: Object(this.machinerequestdesc).value,
			machineattach: this.pictures
		};
		console.log(data);
		let loading = this.loadingCtrl.create({
				content: 'Please wait...',
				duration: 5000
			});
		loading.present();
		this.cardMerchantService.addmachinerequest(data).toPromise().then(data=> {
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

    goBack() {
        this.viewCtrl.dismiss();
    }

}
