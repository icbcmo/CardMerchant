
import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {
    ModalController, Platform, NavController, ViewController, AlertController, LoadingController,
    NavParams
} from 'ionic-angular';
import {CardMerchantService} from "../../../../service/card-merchant.service";
import {NativeStorage} from "@ionic-native/native-storage";
import {TipService} from '../../../../service/tip.service';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import {SigninPage} from "../../../auth/signin";
import {ScanRecord} from "../scanrecord/scan-record";
import {RefundDetail} from "../../refund/refunddetail";
declare var localStorage: any;

@Component({
    selector: 'page-cashier-scan',
    templateUrl: 'cashier-scan.html'
})

export class CashierScan implements OnInit{

    total : number = 0;
    scanSub: any;

    constructor(public cardMerchantService: CardMerchantService,
                public platform: Platform,
                public params: NavParams,
                private qrScanner: QRScanner,
                public modalCtrl: ModalController,
                public viewCtrl: ViewController) {
    }

    ngOnInit() {
        // start scanning
        this.scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log(text);
            this.cardMerchantService.addCounterPoints(JSON.parse(text)).toPromise().then(
                data => {
                    console.log(data);
                    if(Object(data).code == "1"){
                        localStorage.clear();
                        let modal = this.modalCtrl.create(SigninPage);
                        modal.present();
                    }
                    if(Object(data).code == "0"){
                        console.log(data);
                        alert("掃描成功，增加"+Object(data).data.this_point+"分"+",可進行下一張掃描");
                        this.total = this.total + parseInt(Object(data).data.this_point);
                    }else {
                        alert(JSON.parse(text).message);
                    }
                    this.scanSub.unsubscribe(); // stop scanning
                    this.qrScanner.hide(); // hide camera preview
                    this.ngOnInit();
                }
            )
        });
    }

    EndScan(): void {
        (window.document.querySelector('ion-nav') as HTMLElement).style.display = "";
        this.scanSub.unsubscribe(); // stop scanning
        this.qrScanner.hide(); // hide camera preview
        this.qrScanner.destroy();
        this.viewCtrl.dismiss();
    }

    ScanDetail():void{
        (window.document.querySelector('ion-nav') as HTMLElement).style.display = "";
        this.scanSub.unsubscribe(); // stop scanning
        this.qrScanner.hide(); // hide camera preview
        this.qrScanner.destroy();
        this.viewCtrl.dismiss();
        let modal = this.modalCtrl.create(ScanRecord);
        modal.present();
    }

}