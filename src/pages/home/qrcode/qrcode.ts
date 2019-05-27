import { Component, OnInit } from "@angular/core";
import { ModalController, Platform, NavParams, ViewController } from "ionic-angular";
import { CardMerchantService } from "../../../service/card-merchant.service";


@Component({
  selector: "page-qrcode",
  templateUrl: "qrcode.html"
})
export class Qrcode implements OnInit {

  qrcodeUrl: any
  merchantId: any = localStorage.getItem("MERCHANTID")
  merchantName: any = localStorage.getItem("MERCHANTNAME")

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public cardMerchantService: CardMerchantService
  ) {
  }


  ngOnInit() {
    this.cardMerchantService.getMerchantID1(this.merchantId).toPromise().then(data => {
      this.qrcodeUrl = Object(data).data
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
