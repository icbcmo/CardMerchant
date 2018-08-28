
import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {CardMerchantService} from "../../../service/card-merchant.service";
import {Camera, CameraOptions} from '@ionic-native/camera';
import {ModalController, ViewController} from 'ionic-angular';
import { AlertController, LoadingController } from 'ionic-angular';
import {TipService} from '../../../service/tip.service';
import {SigninPage} from "../../auth/signin";

declare var localStorage: any;

@Component({
  selector: 'page-machinerequest',
  templateUrl: 'machinerequest.html'
})
export class MachineRequest implements OnInit{	
	items: any;
	pictures: any[] = [];
	total: number = 0;
    base64Image: any;

    @ViewChild('machinemerchantname') machinemerchantname: ElementRef;
    @ViewChild('machinedepartmentname') machinedepartmentname: ElementRef;
    @ViewChild('machinerequesttype') machinerequesttype: ElementRef;
	@ViewChild('machineno') machineno: ElementRef;
	@ViewChild('machineapplyname') machineapplyname: ElementRef;
	@ViewChild('machineapplymobile') machineapplymobile: ElementRef;
	@ViewChild('machinerequestdesc') machinerequestdesc: ElementRef;

    constructor(
		public cardMerchantService: CardMerchantService,
		private camera: Camera,
        public modalCtrl: ModalController,
		public viewCtrl: ViewController,
		public loadingCtrl: LoadingController,
		private alertCtrl: AlertController,
		public tipService: TipService
    ) {
    }


    ngOnInit() {
        Object(this.machinemerchantname).value = localStorage.getItem('MERCHANTNAME');
        Object(this.machinedepartmentname).value = localStorage.getItem('DEPARTMENTNAME');
        Object(this.machineapplyname).value = localStorage.getItem('NAME');
        Object(this.machineapplymobile).value = localStorage.getItem('MOBILE');
		console.log(this);
		this.items = ["机器","纸张","屏幕"];
	
		this.pictures=[
			{PICTURE:'assets/imgs/camera_img.png',btn:false},
			{PICTURE:'assets/imgs/camera_img.png',btn:false},
			{PICTURE:'assets/imgs/camera_img.png',btn:false},
			{PICTURE:'assets/imgs/camera_img.png',btn:false}
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
			
			//模拟测试
			/* var obj = {
					data:'../../../assets/imgs/juana.gif',
					btn:true
				};
			for(var i=0;i<4;i=i+1){
				if(this.pictures[i].btn == false){
					this.pictures.splice(i,1,obj);
                    this.pictures[i].btn = true;
					break;
				}
			} */
			
			//拍照
			this.camera.getPicture(options).then((imageData) => {
				this.base64Image = imageData;
				this.base64Image = 'data:image/jpeg;base64,' + this.base64Image;
				var obj = {
					PICTURE:this.base64Image,
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
		this.pictures.splice(index,1,{data:'assets/imgs/camera_img.png',btn:false,id:index});
		this.total = this.total - 1 ;
	}
	
	submitForm(){
		var pics = [];
		for(var i=0;i<4;i=i+1){
			if(this.pictures[i].btn == true){
				pics.push(this.pictures[i].PICTURE);
			}
		}
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
			machineattach: pics
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
            if(Object(data).code ==1){
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

    goBack() {
        this.viewCtrl.dismiss();
    }

}
