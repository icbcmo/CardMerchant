
import {Component, OnInit} from '@angular/core';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import {QRScanner, QRScannerStatus} from "@ionic-native/qr-scanner";



@Component({
  selector: 'page-qrcode',
  templateUrl: 'qrscanner.html',
})
export class Qrscanner implements OnInit{

    constructor(
        public platform: Platform,
        public params: NavParams,
        private qrScanner: QRScanner,
        public viewCtrl: ViewController
    ) {
    }


    ngOnInit() {
        // Optionally request the permission early
        this.qrScanner.prepare()
            .then((status: QRScannerStatus) => {
                if (status.authorized) {
                    // camera permission was granted


                    // start scanning
                    let scanSub = this.qrScanner.scan().subscribe((text: string) => {
                        console.log('Scanned something', text);

                        this.qrScanner.hide(); // hide camera preview
                        this.viewCtrl.dismiss();
                        scanSub.unsubscribe(); // stop scanning
                    });
                    (window.document.querySelector('ion-nav') as HTMLElement).style.display = "none";

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

    EndScan(): void {
        (window.document.querySelector('ion-nav') as HTMLElement).style.display = "";
        this.qrScanner.destroy();
        this.viewCtrl.dismiss();
    }

}
