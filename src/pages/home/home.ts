
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
        private camera: Camera,
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
        mytags.push(localStorage.getItem("UID"));
        mytags.push(localStorage.getItem("MOBILE"));
        mytags.push(localStorage.getItem("LEVEL"));
        mytags.push(localStorage.getItem("TERMINALID"));
        mytags.push(localStorage.getItem("WECHATTID"));
        console.log(mytags)
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
	}

    openCamera(){
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

        this.camera.getPicture(options).then((imageData) => {
            let base64Image = imageData;
            base64Image = 'data:image/jpeg;base64,' + base64Image;
            console.log(base64Image);
        });
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
