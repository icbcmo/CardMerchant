import {Component, OnInit} from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { SigninPage } from "../../auth/signin";
import { CardMerchantService } from "../../../service/card-merchant.service";

/**
 * Generated class for the OrderdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-orderdetails',
  templateUrl: 'orderdetails.html',
})
export class OrderdetailsPage implements OnInit{

  item:any;
  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    public loadingCtrl: LoadingController,
    public cardMerchantService: CardMerchantService
  ) {
  }

  ngOnInit() {
      this.item = this.params.get('item');
      console.log(this.item);

      this.cardMerchantService.getMerchantName(this.item.MERCHANT_ID).toPromise().then(data => {
        console.log(Object(data));
        this.item.MERCHANT_NAME = Object(data).data
      }, () => {
        this.loadingCtrl.create({
          spinner: "hide",
          content: "网络故障",
          duration: 2000
        }).present();
      });
  }

  ionViewDidLoad() {
      this.item = this.params.get('item');
      console.log('ionViewDidLoad OrderdetailsPage');
  }

  goBack(){
      //this.viewCtrl.dismiss();
      this.navCtrl.pop();
  }

}
