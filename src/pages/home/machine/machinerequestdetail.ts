
import {Component, OnInit} from '@angular/core';
import {CardMerchantService} from "../../../service/card-merchant.service";
import {NativeStorage} from "@ionic-native/native-storage";
import { ModalController, Platform,NavController, ViewController, NavParams } from 'ionic-angular';
import {ShowImage} from "../refund/showimage";

declare var localStorage: any;

@Component({
  selector: 'page-machinerequestdetail',
  templateUrl: 'machinerequestdetail.html'
})

export class MachineRequestDetail implements OnInit{
	item: any;

    constructor(
        public platform: Platform,
		public cardMerchantService: CardMerchantService,
		private nativeStorage: NativeStorage,
		public viewCtrl: ViewController,
		public modalCtrl: ModalController,
        public navCtrl: NavController,
		public params: NavParams
    ) {
    }


    ngOnInit() {
		//console.log(this.params.get('item'));
		this.item = this.params.get('item');
        this.cardMerchantService.getPictures(this.item.sequence).toPromise().then(data=>{
            //console.log(data);
            //console.log((Object(Object(data).data)));
            this.item['pictures']=[];
            this.item['pictures'] = (Object(Object(data).data));
        });
	}
	
	
	
	goBack(){
		this.viewCtrl.dismiss();
	}

    showPicture(index){
        let modal = this.modalCtrl.create(ShowImage, {items:this.item.pictures, index:index});
        modal.present();
    }
}
