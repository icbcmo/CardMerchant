
import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { ModalController, Platform,NavController } from 'ionic-angular';
import {CardMerchantService} from "../../../service/card-merchant.service";
import {NativeStorage} from "@ionic-native/native-storage";
import { Router } from '@angular/router';
import {Qrcode} from "../qrcode/qrcode";

declare var localStorage: any;

@Component({
  selector: 'page-setup',
  templateUrl: 'setup.html'
})

export class SetupPage implements OnInit{
	
    constructor(
        public platform: Platform,
		public cardMerchantService: CardMerchantService,
        public modalCtrl: ModalController,
        public navCtrl: NavController,
		private nativeStorage: NativeStorage,
		//private router: Router
    ) {
    }


    ngOnInit() {

		
	}
	
	openUserMgt(){
		//this.router.navigate(['usermgt']);

        let modal = this.modalCtrl.create(Qrcode);
        modal.present();

	}
	
	goBack(){
        //this.router.navigate(['index/home']);

        this.navCtrl.pop();
	}

}
