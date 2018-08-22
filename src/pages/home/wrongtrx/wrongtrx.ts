
import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { ViewController, AlertController, LoadingController } from 'ionic-angular';
import {TipService} from '../../../service/tip.service';
import {CardMerchantService} from "../../../service/card-merchant.service";

@Component({
  selector: 'page-wrongtrx',
  templateUrl: 'wrongtrx.html'
})
export class Wrongtrx implements OnInit{
	@ViewChild('billno') Billno: ElementRef;

    constructor(
        public viewCtrl: ViewController,
		public tipService: TipService,
		private alertCtrl: AlertController,
		public loadingCtrl: LoadingController,
		public cardMerchantService: CardMerchantService
    ) {
    }


    ngOnInit() {}

    goBack(){
        this.viewCtrl.dismiss();
    }

}
