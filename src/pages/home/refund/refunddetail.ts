
import {Component, OnInit} from '@angular/core';
import {CardMerchantService} from "../../../service/card-merchant.service";
import {NativeStorage} from "@ionic-native/native-storage";
import { ModalController, Platform,NavController, ViewController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import {TipService} from '../../../service/tip.service';
import {ShowImage} from './showimage';
import {SigninPage} from "../../auth/signin";

declare var localStorage: any;

@Component({
  selector: 'page-refunddetail',
  templateUrl: 'refunddetail.html'
})

export class RefundDetail implements OnInit{
	item: any;
	btn: Boolean;

    constructor(
        public platform: Platform,
		public cardMerchantService: CardMerchantService,
		private nativeStorage: NativeStorage,
		public viewCtrl: ViewController,
		public modalCtrl: ModalController,
        public navCtrl: NavController,
		public params: NavParams,
		public loadingCtrl: LoadingController,
		private alertCtrl: AlertController,
		public tipService: TipService
    ) {
    }


    ngOnInit() {
		console.log(this.params.get('item'));
		this.item = this.params.get('item');
		this.item['pictures']=[
			{data:'../../../assets/imgs/refundverify1_1.png'},
			{data:'../../../assets/imgs/juana.gif'},
			{data:'../../../assets/imgs/banner.png'},
			{data:'../../../assets/imgs/head.png'}
		];
		this.btn = this.params.get('btn');
	}
	
	goApprove(){
		var data = {
			Sessionid: localStorage.getItem('SESSIONID'),
			requestid: this.item.sequence
		};
		console.log(data);
		let loading = this.loadingCtrl.create({
				content: 'Please wait...',
				duration: 5000
			});
		loading.present();
		this.cardMerchantService.approverequest(data).toPromise().then(data=> {
			console.log(Object(data));
			loading.dismiss();
			if(Object(data).code == 1){
                localStorage.clear();
                let modal = this.modalCtrl.create(SigninPage);
                modal.present();
			}
			if(Object(data).code == 0){
				this.tipService.show('提交成功').then( () => {
						//this.viewCtrl.dismiss();
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
	
	showPicture(index){
		let modal = this.modalCtrl.create(ShowImage, {items:this.item.pictures, index:index});
        modal.present();
	}
	
	goBack(){
		this.viewCtrl.dismiss();
	}

}
