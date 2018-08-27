import {Component, OnInit} from '@angular/core';
import {CardMerchantService} from "../../../service/card-merchant.service";
import {NativeStorage} from "@ionic-native/native-storage";
import { ModalController, Platform,NavController, ViewController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import {TipService} from '../../../service/tip.service';
import {ShowImage} from './showimage';
import {SigninPage} from "../../auth/signin";

declare var localStorage: any;

/**
 * Generated class for the OrderrefunddetatilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-orderrefunddetatil',
  templateUrl: 'orderrefunddetatil.html',
})
export class OrderrefunddetatilPage implements OnInit{

    item: any = {};
    btn: Boolean;
    fleg: boolean = true;

    constructor(
        public platform: Platform,
        public cardMerchantService: CardMerchantService,
        private nativeStorage: NativeStorage,
        public viewCtrl: ViewController,
        public modalCtrl: ModalController,
        public navCtrl: NavController,
        public params: NavParams,
        public loadingCtrl: LoadingController,
        private alertCtrl: AlertController,
        public tipService: TipService
    ) {
    }


    ngOnInit() {

        this.item['pictures']=[
            {data:'assets/imgs/juana.gif'},
            {data:'assets/imgs/juana.gif'}
        ];

    }

    polishingPic(obj){
        let num = 4 - this.item.pictures.length;
        let arr = [];
        if(num > 0){
            for(let i=0;i<num;i++){
                arr.push(i);
            }
        }
        return arr;
    }

    showPicture(index){
        let modal = this.modalCtrl.create(ShowImage, {items:this.item.pictures, index:index});
        modal.present();
    }

    goBack(){
        this.viewCtrl.dismiss();
    }

}
