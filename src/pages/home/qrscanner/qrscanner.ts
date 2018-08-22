import {Component, OnInit} from '@angular/core';
import {ModalController, Platform, NavParams, ViewController} from 'ionic-angular';
import {QRScanner, QRScannerStatus} from "@ionic-native/qr-scanner";


@Component({
    selector: 'page-qrcode',
    templateUrl: 'qrscanner.html',
})
export class Qrscanner implements OnInit {

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
