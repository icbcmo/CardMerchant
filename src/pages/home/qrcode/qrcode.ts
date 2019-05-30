import { Component, OnInit } from "@angular/core";
import { ModalController, Platform, NavParams, ViewController } from "ionic-angular";
import { CardMerchantService } from "../../../service/card-merchant.service";
import { environment as ENV } from "../../../environments/environment";

@Component({
  selector: "page-qrcode",
  templateUrl: "qrcode.html"
})
export class Qrcode implements OnInit {

  qrcodeData: any = {
    merchantId1: ''
  }
  qrCodeUrl: any

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public cardMerchantService: CardMerchantService
  ) {
  }


  ngOnInit() {
    this.cardMerchantService.getCardMerchant().toPromise().then(data => {
      this.qrcodeData = Object(data).data[0]
      this.qrCodeUrl = ENV.qrCodeUrl + this.qrcodeData.merchantId1
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
