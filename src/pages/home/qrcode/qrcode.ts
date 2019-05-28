import { Component, OnInit } from "@angular/core";
import { ModalController, Platform, NavParams, ViewController } from "ionic-angular";
import { CardMerchantService } from "../../../service/card-merchant.service";


@Component({
  selector: "page-qrcode",
  templateUrl: "qrcode.html"
})
export class Qrcode implements OnInit {

  qrcodeData: any = {
    merchantId1: ''
  }

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
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
