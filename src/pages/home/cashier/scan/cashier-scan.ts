
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
            this.cardMerchantService.addCounterPoints(JSON.parse(text).orderid,JSON.parse(text).orderamount,JSON.parse(text).orderdate,JSON.parse(text).pointsnum).toPromise().then(
                data => {
                    console.log(data);
                    if(Object(data).code == "1"){
                        localStorage.clear();
                        let modal = this.modalCtrl.create(SigninPage);
                        modal.present();
                    }
                    if(Object(data).code == "0"){
                        alert(JSON.parse(text).pointsnum);
                        this.total = this.total + parseInt(JSON.parse(text).pointsnum);
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

}