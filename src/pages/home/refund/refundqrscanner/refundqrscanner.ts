import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {ModalController, Platform, NavController, ViewController, AlertController, LoadingController, NavParams} from 'ionic-angular';
import {QRScanner, QRScannerStatus} from '@ionic-native/qr-scanner';
declare var localStorage: any;

@Component({
    selector: 'page-refundqrscanner',
    templateUrl: 'refundqrscanner.html'
})

export class RefundqrscannerPage implements OnInit{

    scanSub: any;

    constructor(
        public platform: Platform,
        public params: NavParams,
        private qrScanner: QRScanner,
        public modalCtrl: ModalController,
        public viewCtrl: ViewController
    ) {
    }

    ngOnInit() {
        this.scanSub = this.qrScanner.scan().subscribe((text: string) => {
            this.scanSub.unsubscribe(); // stop scanning
            this.qrScanner.hide(); // hide camera preview
            this.viewCtrl.dismiss(JSON.parse(text));
        });
    }

    EndScan(): void {
        this.viewCtrl.dismiss();
    }

}