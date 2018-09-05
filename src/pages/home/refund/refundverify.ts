
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

    loadData(fn?:any){
        var data = {
            sessionid: localStorage.getItem('SESSIONID'),
            field1: 1 //1-退款列表 2-机器问题列表
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

                        // switch(this.items[i].status) {
                        // 	case '12':
                        // 		this.items[i].status = '审批中';
                        // 		break;
                        // 	case '6':
                        // 		this.items[i].status = '待處理';
                        // 		break;
                        //    case '8':
                        //        this.items[i].status = '已完成';
                        //        break;
                        //    case '9':
                        //        this.items[i].status = '已取消';
                        //        break;
                        // 	default:
                        // 		break;
                        // }

                        if(this.items[i].status != "12"){
                            this.items.splice(i,1);
                            i--;
                        }
                    }
                }
                setTimeout(() => {
                    if(fn) fn();
                },0);
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

    ngOnInit() {
		this.loadData();
	}

    alertGoReject(item){
        let name="";
        let phone="";

        if(item.field2 == "1"){
            name=item.field70;
            phone=item.field71;
        }else if(item.field2 == "2"){
            name=item.field28;
            phone=item.field29;
        }

        let msg = '經辦人:'+name+" ; 經辦人聯絡電話:"+phone;
        let alert = this.alertCtrl.create({
            title: '確定否決該筆退款？',
            message: msg,
            buttons: [
                {
                    text: '查看詳情',
                    role: '查看詳情',
                    handler: () => {
                        console.log('Cancel clicked');
                        this.goRefundDetail(item);
                    }
                },
                {
                    text: '確定否決',
                    handler: () => {
                        console.log('Buy clicked');
                        this.goReject(item);
                    }
                }
            ]
        });
        alert.present();
    }
	alertGoApprove(item){

        let alert = this.alertCtrl.create({
            title: '確定審批該筆退款？',
            //message: '點擊確定，立即審批',
            buttons: [
                {
                    text: '查看詳情',
                    role: '查看詳情',
                    handler: () => {
                        console.log('Cancel clicked');
                        this.goRefundDetail(item);
                    }
                },
                {
                    text: '確定審批',
                    handler: () => {
                        console.log('Buy clicked');
                        this.goApprove(item.sequence);
                    }
                }
            ]
        });
        alert.present();
	}
	goApprove(requestid){
		var data = {
            requestid: requestid,
			sessionid: localStorage.getItem('SESSIONID')
		};
		console.log(data);
		let loading = this.loadingCtrl.create({
				content: 'Please wait...',
				duration: 2000
			});
		loading.present();
		this.cardMerchantService.approverequest(data).toPromise().then(data=> {
			console.log(Object(data));
			if(Object(data).code == 1){
                loading.dismiss();
                localStorage.clear();
                let modal = this.modalCtrl.create(SigninPage);
                modal.present();
			}
			if(Object(data).code == 0){
                this.loadData( () => {
                    loading.dismiss();
                    this.tipService.show('提交成功');
                });
			}else{
                loading.dismiss();
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
	
	/*goRefundReject(item){

        var data = {
            requestid: item.sequence,
            sessionid: localStorage.getItem('SESSIONID')
        };

        let name="";
        let phone="";

		if(item.field2 == "1"){
			name=item.field70;
			phone=item.field71;
		}else if(item.field2 == "2"){
            name=item.field28;
            phone=item.field29;
        }
            let alert = this.alertCtrl.create({
                title: '聯繫人姓名:'+name,
                message: '聯繫電話:'+phone,
                buttons: [
                    {
                        text: '取消',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: '拒絕審批',
                        handler: () => {
                            this.goReject(item);
                        }
                    }
                ]
            });
            alert.present();

	}*/

	
	goRefundDetail(item){
		let modal = this.modalCtrl.create(RefundDetail, {item: item, btn: true});
        modal.onDidDismiss(data => {
            this.loadData();
        });
        modal.present();
	}
	
    dismiss() {
        this.viewCtrl.dismiss();
    }

    goReject(item){
        var data = {
            requestid: item.sequence,
            sessionid: localStorage.getItem('SESSIONID')
        };
        console.log('Reject clicked');
        let loading = this.loadingCtrl.create({
            content: 'Please wait...',
            duration: 2000
        });
        loading.present();
        this.cardMerchantService.deleterequest(data).toPromise().then(data=> {
            console.log(Object(data));
            if(Object(data).code == 1){
                loading.dismiss();
                localStorage.clear();
                let modal = this.modalCtrl.create(SigninPage);
                modal.present();
            }
            if(Object(data).code == 0){
                this.loadData( () => {
                    loading.dismiss();
                    this.tipService.show('已拒絕審批成功');
                });
            }else{
                loading.dismiss();
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
