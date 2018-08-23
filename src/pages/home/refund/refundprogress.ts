
import {Component, OnInit} from '@angular/core';
import { ModalController, Platform,NavController, ViewController, AlertController, LoadingController } from 'ionic-angular';
import {CardMerchantService} from "../../../service/card-merchant.service";
import {NativeStorage} from "@ionic-native/native-storage";
import {TipService} from '../../../service/tip.service';
import {ShowImage} from "./showimage";
import {RefundDetail} from "./refunddetail";
import {SigninPage} from "../../auth/signin";
declare var localStorage: any;

@Component({
  selector: 'page-refundprogress',
  templateUrl: 'refundprogress.html'
})
export class RefundProgress implements OnInit{
	items: any;
	
    constructor(
        public viewCtrl: ViewController,
		public modalCtrl: ModalController,
        public navCtrl: NavController,
		private nativeStorage: NativeStorage,
		public loadingCtrl: LoadingController,
		private alertCtrl: AlertController,
		public tipService: TipService,
		public cardMerchantService: CardMerchantService
    ) {
    }


    ngOnInit() {
		
		var data = {
			sessionid: localStorage.getItem('SESSIONID'),
			field1: 1  //1-退款列表 2-机器问题列表
		};
		console.log(data);
		this.cardMerchantService.getrequestlist(data).toPromise().then(data=> {
			console.log(Object(data));
			if(Object(data).code == 1){
                localStorage.clear();
                let modal = this.modalCtrl.create(SigninPage);
                modal.present();
			}
			if(Object(data).code == 0){
				this.items = Object(data).data;
				if(this.items.length > 0){
					for(var i=0;i<this.items.length;i++){
						switch(this.items[i].status) {
							case '0':
								this.items[i].status = '已审批';
								break;
							case '1':
								this.items[i].status = '审批中';
								break;
							default:
								break;
						}
					}
				}
			}else{
				this.alertCtrl.create({
						message: Object(data).message,
						buttons: ['确定']
					}).present();
			}
			
		}, ()=>{
			this.loadingCtrl.create({
				spinner: 'hide',
				content: '网络故障',
				duration: 2000
			}).present();
		});
	}
	
	goRefundDetail(item){
		let modal = this.modalCtrl.create(RefundDetail, {item: item, btn: false});
        modal.present();
	}

    dismiss() {
        this.viewCtrl.dismiss();
    }

}
