
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
<<<<<<< HEAD
import {Camera, CameraOptions} from '@ionic-native/camera';
import {QRScanner} from '@ionic-native/qr-scanner';
import {ScanList} from './scan/scanlist';
=======
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
>>>>>>> d75276d569789df81d39b93812dedac55f5fabd8
import {Qrcode} from "./qrcode/qrcode";
import { JPush } from "@jiguang-ionic/jpush";
import { Device } from "@ionic-native/device";
import {Setup} from "./setup/setup";
import {Machine} from "./machine/machine";
import {OrderList} from "./order/orderlist";

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

	orderNum: any;
	
    constructor(
        private store: Store<AppState> ,
        private counterService:CounterService,
<<<<<<< HEAD
        private camera: Camera,
		private scanner: QRScanner,
=======
        private qrScanner: QRScanner,
>>>>>>> d75276d569789df81d39b93812dedac55f5fabd8
        public jpush: JPush,
        device: Device,
        public modalCtrl: ModalController,
    ) {
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
                    }
                }
                alert("open notification: " + JSON.stringify(event));
            },
            false
        );

        document.addEventListener(
            "jpush.receiveLocalNotification",
            (event: any) => {
                // iOS(*,9) Only , iOS(10,*) 将在 jpush.openNotification 和 jpush.receiveNotification 中触发。
                var content;
                if (this.devicePlatform == "Android") {
                } else {
                    content = event.content;
                }
                alert("receive local notification: " + JSON.stringify(event));
            },
            false
        );

        //this.cleanTags();
        let mytags=[];
        mytags.push(localStorage.getItem("MERCHANTCIF"));
        mytags.push(localStorage.getItem("MERCHANTID"));
        mytags.push(localStorage.getItem("DEPARTMENTID"));
        mytags.push(localStorage.getItem("WECHATMERCHANTID"));
        mytags.push(localStorage.getItem("LEVEL"));
        mytags.push(localStorage.getItem("MOBILE"));
        mytags.push(localStorage.getItem("UID"));
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
	
	updateOrderNum(num){  // Jpush调此方法更新订单数量
		this.orderNum = num;
	}

    ngOnInit() {
		this.orderNum = 12;  //模拟订单数量更新
		window.items = []; // 存储柜员多次扫码数据
		window.pointsnum = 0; // 存储柜员多次扫码累计积分
	}

    openCamera(){
        //手機上使用部分開始
        this.qrScanner.prepare()
            .then((status: QRScannerStatus) => {
                if (status.authorized) {
                    // camera permission was granted


                    // start scanning
                    let scanSub = this.qrScanner.scan().subscribe((text: string) => {
                        console.log('Scanned something', text);

                        this.qrScanner.hide(); // hide camera preview
                        scanSub.unsubscribe(); // stop scanning
                    });

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
	
	openScanner(){
<<<<<<< HEAD
		var result = {
			orderid: '12345678',
			orderamount: 100,
			orderdate: '2018-08-21',
			pointsnum: 500
		};
		this.openScanListModal(result);
        /* this.scanner.scan().subscribe(
			(result) => {  // 扫码成功执行回调
				console.log(result);
				if(result){ //如果扫码结果有效
					this.openScanListModal(result); // 跳转到积分列表页
				}
			},
			(error) => {
				console.log(error);
			});
		this.scanner.show().then(function(){}); //设置网页背景透明使摄像头拍照影像可见
		*/
=======
        // Optionally request the permission early
        this.qrScanner.prepare()
            .then((status: QRScannerStatus) => {
                if (status.authorized) {
                    // camera permission was granted


                    // start scanning
                    let scanSub = this.qrScanner.scan().subscribe((text: string) => {
                        console.log('Scanned something', text);

                        this.qrScanner.hide(); // hide camera preview
                        scanSub.unsubscribe(); // stop scanning
                    });

                } else if (status.denied) {
                    // camera permission was permanently denied
                    // you must use QRScanner.openSettings() method to guide the user to the settings page
                    // then they can grant the permission from there
                } else {
                    // permission was denied, but not permanently. You can ask for permission again at a later time.
                }
            })
            .catch((e: any) => console.log('Error is', e));
>>>>>>> d75276d569789df81d39b93812dedac55f5fabd8
    }
	
	openScanListModal(result){
		let modal = this.modalCtrl.create(ScanList, {result: result});
        modal.present();
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
        let modal = this.modalCtrl.create(Setup);
        modal.present();
    }
	
	openOrderList(){
		let modal = this.modalCtrl.create(OrderList);
        modal.present();
	}

}
