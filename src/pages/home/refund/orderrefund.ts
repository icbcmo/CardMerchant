
import {Component, OnInit} from '@angular/core';
import { ModalController, Platform,NavController, ViewController, AlertController, LoadingController } from 'ionic-angular';
import {CardMerchantService} from "../../../service/card-merchant.service";
import {NativeStorage} from "@ionic-native/native-storage";
import {TipService} from '../../../service/tip.service';
import {ShowImage} from "./showimage";
import {OrderrefunddetatilPage} from './orderrefunddetatil';

@Component({
  selector: 'page-orderrefund',
  templateUrl: 'orderrefund.html'
})
export class OrderRefund implements OnInit{
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


    loadData():any{
        var data = {
            sessionid: localStorage.getItem('SESSIONID'),
            field1: 3  //1-退款列表 2-机器问题列表 3-调单
        };
        console.log(data);
        this.cardMerchantService.getrequestlist(data).toPromise().then(data=> {
            console.log(Object(data));
            let x=0;
            if(Object(data).code == 0){
                this.items = Object(data).data;
                this.items.forEach(data=>{
                    if(data.status == 3)
                        x++;
                })
                localStorage.setItem('RETRIEVALBADGE',x.toString());
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
    ionViewDidLoad(){
        console.log('触发ionViewDidLoad');
    }

    ionViewWillEnter(){
        console.log('触发ionViewWillEnter');
        this.loadData();
        //localStorage.setItem('RETRIEVALBADGE','0');
    }
    ionViewDidEnter(){
        console.log('触发ionViewDidEnter');
    }

    ionViewWillLeave(){
        console.log('触发ionViewWillLeave');
    }

    ionViewDidLeave(){
        console.log('触发ionViewDidLeave');
    }

    ionViewWillUnload(){
        console.log('触发ionViewWillUnload');
    }

    ngOnInit() {
		this.loadData();
	}

    toDetail(item,isEdit){
        let modal = this.modalCtrl.create(OrderrefunddetatilPage,{item: item,isEdit:isEdit});
        modal.present();
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    doRefresh(refresher) {
        console.log('Begin async operation', refresher);
        var data = {
            sessionid: localStorage.getItem('SESSIONID'),
            field1: 3  //1-退款列表 2-机器问题列表 3-调单
        };
        console.log(data);
        this.cardMerchantService.getrequestlist(data).toPromise().then(data=> {
            console.log(Object(data));
            refresher.complete();
            if(Object(data).code == 0){
                this.items = Object(data).data;
            }else{
                this.alertCtrl.create({
                    message: Object(data).message,
                    buttons: ['确定']
                }).present();
            }

        }, ()=>{
            refresher.complete();
            this.loadingCtrl.create({
                spinner: 'hide',
                content: '网络故障',
                duration: 2000
            }).present();
        });
    }

}
