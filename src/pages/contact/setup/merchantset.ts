import {Component, OnInit} from '@angular/core';
import {NavController, ViewController, LoadingController, NavParams} from 'ionic-angular';
import {CardMerchantService} from "../../../service/card-merchant.service";
import {TipService} from '../../../service/tip.service';

declare var localStorage: any;

@Component({
    selector: 'page-merchantset',
    templateUrl: 'merchantset.html'
})

export class MerchantSet implements OnInit{
    // 入口
    entrance: string;
    // 商戶列表
    merchantList: any;

    constructor(
        public cardMerchantService: CardMerchantService,
        public viewCtrl: ViewController,
        public navCtrl: NavController,
        public loadingCtrl: LoadingController,
        public tipService: TipService,
        public params: NavParams
    ) {
    }


    ngOnInit() {
        this.entrance = this.params.get('entrance');
    }

    ionViewWillEnter(){
        this.cardMerchantService.getMerchantList().toPromise().then(data => {
            this.merchantList = Object(data).data
        }, ()=>{
            this.loadingCtrl.create({
                spinner: 'hide',
                content: '网络故障',
                duration: 2000
            }).present();
        });
    }

    setMerchant(obj){
        this.cardMerchantService.updateUserSession({
            sessionId: localStorage.getItem("SESSIONID"),
            uid: obj.sequence
        }).toPromise().then(data => {
            let tjson = JSON.parse(Object(data).data)
            localStorage.setItem("MERCHANTCIF", tjson.merchantCif);
            localStorage.setItem("MERCHANTCIFNAME", tjson.merchantCifName);
            localStorage.setItem("MERCHANTID", tjson.merchantId);
            localStorage.setItem("MERCHANTNAME", tjson.merchantName);
            localStorage.setItem("DEPARTMENTID", tjson.departmentId);
            localStorage.setItem("DEPARTMENTNAME", tjson.departmentName);
            localStorage.setItem("WECHATMERCHANTID", tjson.wechatMerchantId);
            localStorage.setItem("LEVEL", tjson.level);
            localStorage.setItem("SESSIONID", tjson.sessionid);
            localStorage.setItem("MOBILE", tjson.mobile);
            localStorage.setItem("NAME", tjson.name);
            localStorage.setItem("UID", tjson.uid);
            localStorage.setItem("UID2", tjson.uid2);
            localStorage.setItem("WECHATBADGE", 0);
            localStorage.setItem("RETRIEVALBADGE", 0);
            this.tipService.show('商戶設置成功').then(() => {
                this.navCtrl.pop();
            });
        }, ()=>{
            this.loadingCtrl.create({
                spinner: 'hide',
                content: '网络故障',
                duration: 2000
            }).present();
        });
    }

    goBack(){
        //this.viewCtrl.dismiss();
        this.navCtrl.pop();
    }

}
