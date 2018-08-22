
import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {
    ModalController, Platform, NavController, ViewController, AlertController, LoadingController,
    NavParams
} from 'ionic-angular';
import {CardMerchantService} from "../../../../service/card-merchant.service";
import {NativeStorage} from "@ionic-native/native-storage";
import {TipService} from '../../../../service/tip.service';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

@Component({
    selector: 'page-cashier-scan',
    templateUrl: 'cashier-scan.html'
})

export class CashierScan implements OnInit{

    constructor(public platform: Platform,
                public params: NavParams,
                private qrScanner: QRScanner,
                public viewCtrl: ViewController) {
    }

    ngOnInit() {
        // start scanning
        let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);
            this.qrScanner.hide(); // hide camera preview
            this.viewCtrl.dismiss();
            scanSub.unsubscribe(); // stop scanning
        });
    }

    EndScan(): void {
        (window.document.querySelector('ion-nav') as HTMLElement).style.display = "";
        this.qrScanner.destroy();
        this.viewCtrl.dismiss();
    }

}