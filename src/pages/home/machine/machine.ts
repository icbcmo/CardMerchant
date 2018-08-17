
import {Component, OnInit} from '@angular/core';
import { ModalController, Platform,NavController, ViewController } from 'ionic-angular';
import {CardMerchantService} from "../../../service/card-merchant.service";
import {MachineRequest} from "./machinerequest";
import {MachineRequestDetail} from "./machinerequestdetail";
import {NativeStorage} from "@ionic-native/native-storage";
import { AlertController, LoadingController } from 'ionic-angular';
import {TipService} from '../../../service/tip.service';

@Component({
  selector: 'page-machine',
  templateUrl: 'machine.html'
})
export class Machine implements OnInit{
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
		
	}
	
	ionViewWillEnter(){
		var data = {
			sessionid: localStorage.getItem('SESSIONID'),
			field1: 2  //1-退款列表 2-机器问题列表
		};
		console.log(data);
		this.cardMerchantService.getrequestlist(data).toPromise().then(data=> {
			console.log(Object(data));
			if(Object(data).code == 0){
				this.items = Object(data).data;
			}else{
				this.alertCtrl.create({
						message: Object(data).message,
						buttons: ['确定']
					}).present();
			}
		}, ()=>{
			let loading = this.loadingCtrl.create({
				spinner: 'hide',
				content: '网络故障',
				duration: 2000
			});
			loading.present();
		});
	}
	
	goMachineRequest(){
		let modal = this.modalCtrl.create(MachineRequest);
        modal.present();
	}
	
	openMachineRequestDetail(item){
		let modal = this.modalCtrl.create(MachineRequestDetail, {item: item});
        modal.present();
	}
	
	

    dismiss() {
        this.viewCtrl.dismiss();
    }

}
