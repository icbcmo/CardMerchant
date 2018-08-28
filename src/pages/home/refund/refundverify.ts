
import {Component, OnInit} from '@angular/core';
import { ModalController, Platform,NavController, ViewController, AlertController, LoadingController, PopoverController } from 'ionic-angular';
import {CardMerchantService} from "../../../service/card-merchant.service";
import {NativeStorage} from "@ionic-native/native-storage";
import {TipService} from '../../../service/tip.service';
import {ShowImage} from "./showimage";
import {RefundDetail} from "./refunddetail";
import {SigninPage} from "../../auth/signin";
import {PopoverPage} from "./popoverpage";

declare var localStorage: any;

@Component({
  selector: 'page-refundverify',
  templateUrl: 'refundverify.html'
})
export class RefundVerify implements OnInit{
	items: any;
	
    constructor(
        public viewCtrl: ViewController,
		public modalCtrl: ModalController,
        public navCtrl: NavController,
		private nativeStorage: NativeStorage,
		public loadingCtrl: LoadingController,
		private alertCtrl: AlertController,
		public tipService: TipService,
		public cardMerchantService: CardMerchantService,
		public popoverCtrl: PopoverController
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
							case '12':
								this.items[i].status = '审批中';
								break;
							case '6':
								this.items[i].status = '待處理';
								break;
                            case '8':
                                this.items[i].status = '已完成';
                                break;
                            case '9':
                                this.items[i].status = '已取消';
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
	
	goApprove(e, requestid){
		e.stopPropagation();
		var data = {
			Sessionid: localStorage.getItem('SESSIONID'),
			requestid: requestid
		};
		console.log(data);
		let loading = this.loadingCtrl.create({
				content: 'Please wait...',
				duration: 2000
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
	
	goRefundReject(e,item){
		e.stopPropagation();
		let popover = this.popoverCtrl.create(PopoverPage, {item:item});
		popover.present();
	}
	
	goDisplay(picurl){
		let modal = this.modalCtrl.create(ShowImage, {picurl: picurl});
        modal.present();
	}
	
	goRefundDetail(item){
		let modal = this.modalCtrl.create(RefundDetail, {item: item, btn: true});
        modal.present();
	}
	
    dismiss() {
        this.viewCtrl.dismiss();
    }

}
