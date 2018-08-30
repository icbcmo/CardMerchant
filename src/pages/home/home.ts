
import {Component, OnInit} from '@angular/core';
import { ModalController } from 'ionic-angular';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {CounterActions} from '../../actions/counter.actions';
import {AppState} from '../../app/app.status';
import {CounterService} from "../../service/counter.service";
import {Refund} from "./refund/refund";
import {Wrongtrx} from "./wrongtrx/wrongtrx";
import {OrderRefund} from "./refund/orderrefund";
import {Camera, CameraOptions} from '@ionic-native/camera';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import {Qrscanner} from "./qrscanner/qrscanner";
import {Qrcode} from "./qrcode/qrcode";
import { JPush } from "@jiguang-ionic/jpush";
import { Device } from "@ionic-native/device";
import {Help} from "./help/help";
import {Machine} from "./machine/machine";
import {CashierScan} from "./cashier/scan/cashier-scan";
import { OrderList} from "./order/orderlist";
import {RewardRanking} from "./cashier/rewardranking/reward-ranking";
import {MyReward} from "./cashier/myreward/my-reward";
import {Trxdata} from "./trxdata/trxdata";

const EventSource: any = window['EventSource'];


export interface User {
    id: number;
    name: string;
    phone: string;
    asset:number;
}


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit{

	BtnDisable: boolean = false;
    orderNumOB: Observable<number>;
    retrievalNumOB: Observable<number>;



    getObservableWechat(): Observable<number> {
        return Observable
            .interval(1000)
            .map(v => parseInt(localStorage.getItem('WECHATBADGE')));
    }

    getObservableRetrieval(): Observable<number> {
        return Observable
            .interval(1000)
            .map(v => parseInt(localStorage.getItem('RETRIEVALBADGE')));
    }

    constructor(
        private store: Store<AppState> ,
        private counterService:CounterService,
        private camera: Camera,
        private qrScanner: QRScanner,
        public jpush: JPush,
        device: Device,
        public modalCtrl: ModalController,
    ) {

        this.orderNumOB = this.getObservableWechat();
        this.retrievalNumOB = this.getObservableRetrieval();
        this.devicePlatform = device.platform;

        document.addEventListener(
            "jpush.receiveNotification",
            (event: any) => {
                var content;
                if (this.devicePlatform == "Android") {
                    content = event.alert;
                } else {
                    content = event.aps.alert;
                }
                alert("Receive notification: " + JSON.stringify(event));
                if(event.extras.from == 'WECHATPAYMENT'){
                    let tmpNum=parseInt(localStorage.getItem('WECHATBADGE'))+1;
                    localStorage.setItem('WECHATBADGE',tmpNum.toString());
                    // alert("Receive notification: Extra: " + event.extras.from +parseInt(localStorage.getItem('WECHATBADGE')));
                }
                if(event.extras.from == 'FLOW'){
                    let tmpNum=parseInt(localStorage.getItem('RETRIEVALBADGE'))+1;
                    localStorage.setItem('RETRIEVALBADGE',tmpNum.toString());
                }
            },
            false
        );

        document.addEventListener(
            "jpush.openNotification",
            (event: any) => {
                var content;
                if (this.devicePlatform == "Android") {
                    content = event.alert;
                } else {
                    // iOS
                    if (event.aps == undefined) {
                        // 本地通知
                        content = event.content;
                    } else {
                        // APNS
                        content = event.aps.alert;
                        this.jpush.setBadge(event.aps.badge-1);
                        this.jpush.setApplicationIconBadgeNumber(event.aps.badge-1);
                    }
                }
                alert("open notification: " + JSON.stringify(event));
                if(event.extras.from == 'WECHATPAYMENT'){
                    //alert("Receive notification: Extra: " + event.extras.from +localStorage.getItem('WECHATBADGE'));
                    let modal = this.modalCtrl.create(OrderList);
                    modal.present();
                }

                if(event.extras.from == 'FLOW'){
                    let modal = this.modalCtrl.create(OrderRefund);
                    modal.present();
                }


                // this.jpush.resetBadge();
                // this.jpush.setApplicationIconBadgeNumber(0);
                // this.jpush.clearLocalNotifications();
            },
            false
        );

        // document.addEventListener(
        //     "jpush.receiveLocalNotification",
        //     (event: any) => {
        //         // iOS(*,9) Only , iOS(10,*) 将在 jpush.openNotification 和 jpush.receiveNotification 中触发。
        //         var content;
        //         if (this.devicePlatform == "Android") {
        //         } else {
        //             content = event.content;
        //         }
        //         alert("receive local notification: " + JSON.stringify(event));
        //     },
        //     false
        // );

        //this.cleanTags();
        let mytags=[];
        if(localStorage.getItem("MERCHANTCIF") != "")
            mytags.push(localStorage.getItem("MERCHANTCIF"));
        if(localStorage.getItem("MERCHANTID") != "")
            mytags.push(localStorage.getItem("MERCHANTID"));
        if(localStorage.getItem("DEPARTMENTID") != "")
            mytags.push(localStorage.getItem("DEPARTMENTID"));
        if(localStorage.getItem("WECHATMERCHANTID") != "")
            mytags.push(localStorage.getItem("WECHATMERCHANTID"));
        if(localStorage.getItem("LEVEL") != "")
            mytags.push(localStorage.getItem("LEVEL"));
        if(localStorage.getItem("MOBILE") != "")
            mytags.push(localStorage.getItem("MOBILE"));
        if(localStorage.getItem("UID") != "")
            mytags.push(localStorage.getItem("UID"));
        if(localStorage.getItem("UID2") != "")
            mytags.push(localStorage.getItem("UID2"));
        console.log(mytags);
        this.setTags(mytags);

    }

    public registrationId: string;

    devicePlatform: string;
    sequence: number = 0;

    tagResultHandler = function(result) {
        var sequence: number = result.sequence;
        var tags: Array<string> = result.tags == null ? [] : result.tags;
        alert(
            "Success!" + "\nSequence: " + sequence + "\nTags: " + tags.toString()
        );
    };

    aliasResultHandler = function(result) {
        var sequence: number = result.sequence;
        var alias: string = result.alias;
        alert("Success!" + "\nSequence: " + sequence + "\nAlias: " + alias);
    };

    errorHandler = function(err) {
        var sequence: number = err.sequence;
        var code = err.code;
        alert("Error!" + "\nSequence: " + sequence + "\nCode: " + code);
    };


    getRegistrationID() {
        this.jpush.getRegistrationID().then(rId => {
            this.registrationId = rId;
        });
    }

    setTags(tags) {
        this.jpush
            .setTags({ sequence: this.sequence++, tags: tags })
            .then(this.tagResultHandler)
            .catch(this.errorHandler);
    }

    addTags() {
        this.jpush
            .addTags({ sequence: this.sequence++, tags: ["Tag3", "Tag4"] })
            .then(this.tagResultHandler)
            .catch(this.errorHandler);
    }

    checkTagBindState() {
        this.jpush
            .checkTagBindState({ sequence: this.sequence++, tag: "Tag1" })
            .then(result => {
                var sequence = result.sequence;
                var tag = result.tag;
                var isBind = result.isBind;
                alert(
                    "Sequence: " + sequence + "\nTag: " + tag + "\nIsBind: " + isBind
                );
            })
            .catch(this.errorHandler);
    }

    deleteTags() {
        this.jpush
            .deleteTags({ sequence: this.sequence++, tags: ["Tag4"] })
            .then(this.tagResultHandler)
            .catch(this.errorHandler);
    }

    getAllTags() {
        this.jpush
            .getAllTags({ sequence: this.sequence++ })
            .then(this.tagResultHandler)
            .catch(this.errorHandler);
    }

    cleanTags() {
        this.jpush
            .cleanTags({ sequence: this.sequence++ })
            .then(this.tagResultHandler)
            .catch(this.errorHandler);
    }

    setAlias() {
        this.jpush
            .setAlias({ sequence: this.sequence++, alias: "TestAlias" })
            .then(this.aliasResultHandler)
            .catch(this.errorHandler);
    }

    getAlias() {
        this.jpush
            .getAlias({ sequence: this.sequence++ })
            .then(this.aliasResultHandler)
            .catch(this.errorHandler);
    }

    deleteAlias() {
        this.jpush
            .deleteAlias({ sequence: this.sequence++ })
            .then(this.aliasResultHandler)
            .catch(this.errorHandler);
    }

    addLocalNotification() {
        if (this.devicePlatform == "Android") {
            this.jpush.addLocalNotification(0, "Hello JPush", "JPush", 1, 5000);
        } else {
            this.jpush.addLocalNotificationForIOS(5, "Hello JPush", 1, "localNoti1");
        }
    }
	


    ngOnInit() {
        console.log('触发ngOnInit');

        //this.orderNum = parseInt(localStorage.getItem('WECHATBADGE'));  //模拟订单数量更新
        //this.orderNum = this.getObservable2();
		var uid = localStorage.getItem('UID');
		if(!uid){
			this.BtnDisable = true;
		}
	}
    ionViewDidLoad(){
        console.log('触发ionViewDidLoad');
    }
    ionViewWillEnter(){
        console.log('触发ionViewWillEnter');
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


	openScanner(){
        // Optionally request the permission early
        this.qrScanner.prepare()
            .then((status: QRScannerStatus) => {
                if (status.authorized) {
                    // camera permission was granted
                    let scanSub = this.qrScanner.scan().subscribe((text: string) => {});
                    this.qrScanner.hide();
                    scanSub.unsubscribe();
                    let modal = this.modalCtrl.create(Qrscanner);
                    modal.onDidDismiss(()=> {
                        this.qrScanner.destroy();
                        (window.document.querySelector('ion-nav') as HTMLElement).style.display = "";
                    });
                    (window.document.querySelector('ion-nav') as HTMLElement).style.display = "none";
                    modal.present();
                } else if (status.denied) {
                    // camera permission was permanently denied
                    // you must use QRScanner.openSettings() method to guide the user to the settings page
                    // then they can grant the permission from there
                } else {
                    // permission was denied, but not permanently. You can ask for permission again at a later time.
                }
            })
            .catch((e: any) => console.log('Error is', e));
		
    }
	
	openCashierScanModal(){
        // Optionally request the permission early
        this.qrScanner.prepare()
            .then((status: QRScannerStatus) => {
                if (status.authorized) {
                    // camera permission was granted
                    let scanSub = this.qrScanner.scan().subscribe((text: string) => {});
                    this.qrScanner.hide();
                    scanSub.unsubscribe();
                    let modal = this.modalCtrl.create(CashierScan);
                    modal.onDidDismiss(()=> {
                        this.qrScanner.destroy();
                        (window.document.querySelector('ion-nav') as HTMLElement).style.display = "";
                    });
                    (window.document.querySelector('ion-nav') as HTMLElement).style.display = "none";
                    modal.present();
                } else if (status.denied) {
                    // camera permission was permanently denied
                    // you must use QRScanner.openSettings() method to guide the user to the settings page
                    // then they can grant the permission from there
                } else {
                    // permission was denied, but not permanently. You can ask for permission again at a later time.
                }
            })
            .catch((e: any) => console.log('Error is', e));
    }

    openRefundModal() {
        let modal = this.modalCtrl.create(Refund);
        modal.present();
    }

    openWrongtrxModal() {
        let modal = this.modalCtrl.create(Wrongtrx);
        modal.present();
    }
	
	openOrderRefundModal() {
        let modal = this.modalCtrl.create(OrderRefund);
        modal.onDidDismiss(() => {
            let num1 = parseInt(localStorage.getItem('WECHATBADGE'));
            let num2 = parseInt(localStorage.getItem('RETRIEVALBADGE'));
            let num3 = num1+num2;
            this.jpush.setBadge(num3);
            this.jpush.setApplicationIconBadgeNumber(num3);
            //alert('onDidDismiss:'+localStorage.getItem('WECHATBADGE'));
        });
        modal.present();
    }

    openCustserviceModal() {
        let modal = this.modalCtrl.create(Machine);
        modal.present();
    }

    openQrcodeModal() {
        let modal = this.modalCtrl.create(Qrcode);
        modal.present();
    }
	
	goSetup() {
        let modal = this.modalCtrl.create(Help);
        modal.present();
    }
	
	openOrderList(){
		let modal = this.modalCtrl.create(OrderList);
        modal.onDidDismiss(() => {
            // this.jpush.setBadge(parseInt(localStorage.getItem('WECHATBADGE')));
            // this.jpush.setApplicationIconBadgeNumber(parseInt(localStorage.getItem('WECHATBADGE')));
            // alert('onDidDismiss:'+localStorage.getItem('WECHATBADGE'));
            let num1 = parseInt(localStorage.getItem('WECHATBADGE'));
            let num2 = parseInt(localStorage.getItem('RETRIEVALBADGE'));
            let num3 = num1+num2;
            this.jpush.setBadge(num3);
            this.jpush.setApplicationIconBadgeNumber(num3);
        });
        modal.present();
	}

    openRewardRankingModal(){
        let modal = this.modalCtrl.create(RewardRanking);
        modal.present();
    }
    openMyRewardModal(){
        let modal = this.modalCtrl.create(MyReward);
        modal.present();
    }

    openTrxDataserviceModal(){
        let modal = this.modalCtrl.create(Trxdata);
        modal.present();
    }
}
