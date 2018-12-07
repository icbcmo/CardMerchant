import {Component, OnInit} from '@angular/core';
import {ModalController, Platform, NavParams, ViewController, LoadingController} from 'ionic-angular';
import {QRScanner, QRScannerStatus} from "@ionic-native/qr-scanner";
import {CardMerchantService} from "../../../service/card-merchant.service";
import {TipService} from "../../../service/tip.service";


@Component({
    selector: 'page-qrscanner',
    templateUrl: 'qrscanner.html',
})
export class Qrscanner implements OnInit {

    constructor(public platform: Platform,
                public params: NavParams,
                public cardMerchantService: CardMerchantService,
                private qrScanner: QRScanner,
                public loadingCtrl: LoadingController,
                public viewCtrl: ViewController) {
    }


    ngOnInit() {

        console.log('Scanned start');
        // start scanning
        let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);
            //let mytext = '{"data":{"MID":"1000440001","date":"2018-12-06 16:17:57","ref_id":"ESHOP20181206161730131265988","terminalid":"bcf5f061e03840e597dce9532a51907a","trxamount":"52.00"},"sign":"a91a912a27819a8e739e97b63f064a69"}';
            var data = {
                signdata: text
            };
            let loading = this.loadingCtrl.create({
                content: 'Please wait...',
                duration: 5000
            });
            this.cardMerchantService.scancoupon(data).toPromise().then(data=> {
                if(Object(data).code == 0){
                    loading = this.loadingCtrl.create({
                        spinner: 'hide',
                        content: '成功',
                        duration: 1000
                    });
                    loading.present();
                }else{
                    loading = this.loadingCtrl.create({
                        spinner: 'hide',
                        content: '失敗',
                        duration: 1000
                    });
                    loading.present();
                }
            });
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
