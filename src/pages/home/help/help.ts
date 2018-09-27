
import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { ViewController, AlertController, LoadingController, ModalController } from 'ionic-angular';
import {TipService} from '../../../service/tip.service';
import {CardMerchantService} from "../../../service/card-merchant.service";
import {HelpdetailPage} from "./helpdetail";

@Component({
  selector: 'page-help',
  templateUrl: 'help.html'
})
export class Help implements OnInit{
	@ViewChild('billno') Billno: ElementRef;

    constructor(
        public viewCtrl: ViewController,
		public tipService: TipService,
		private alertCtrl: AlertController,
		public loadingCtrl: LoadingController,
		public cardMerchantService: CardMerchantService,
        public modalCtrl: ModalController
    ) {
    }


    ngOnInit() {}

    toDetail(t){
        let model = this.modalCtrl.create(HelpdetailPage,{top:t});
        model.present();
    }

    goBack(){
        this.viewCtrl.dismiss();
    }

}
