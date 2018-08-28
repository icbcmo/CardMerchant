import {Component, OnInit} from '@angular/core';
import {CardMerchantService} from "../../../service/card-merchant.service";
import {NativeStorage} from "@ionic-native/native-storage";
import { ModalController, Platform,NavController, ViewController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import {TipService} from '../../../service/tip.service';
import {ShowImage} from './showimage';
import {SigninPage} from "../../auth/signin";
import {Camera, CameraOptions} from "@ionic-native/camera";

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

    pictures: any[] = [];
    total: number = 0;
    isEdit = false;
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
        public tipService: TipService,
        private camera: Camera
    ) {
    }


    ngOnInit() {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        loading.present();
        this.item = this.params.get('item');
        this.isEdit = this.params.get('isEdit');

        this.pictures=[
            {PICTURE:'assets/imgs/camera_img.png',btn:false},
            {PICTURE:'assets/imgs/camera_img.png',btn:false},
            {PICTURE:'assets/imgs/camera_img.png',btn:false},
            {PICTURE:'assets/imgs/camera_img.png',btn:false}
        ];
        if(!this.isEdit){
            this.cardMerchantService.getPictures(this.item.sequence).toPromise().then(data=>{
                console.log(data);
                console.log((Object(Object(data).data)));
                let tmp = Object(Object(data).data);
                //this.pictures=[];
                for(let i=0; i<tmp.length; i++){
                    this.pictures[i].btn = true ;
                    this.pictures[i].PICTURE=tmp[i].PICTURE.toString();
                }
                this.pictures.splice(tmp.length,4-tmp.length);
                loading.dismiss();

            });
        }
        loading.dismiss();


    }


    openCamera(){
        this.total = (this.total + 1) ;
        if(this.total > 4){
            this.tipService.show('最多拍照上传4张');
        }else{
            //手機上使用部分開始
            const options: CameraOptions = {
                quality: 80,
                targetWidth: 600,
                targetHeight: 1200,
                //allowEdit: true,
                sourceType: 1,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE
            };

            this.camera.getPicture(options).then((imageData) => {
                var base64Image = imageData;
                base64Image = 'data:image/jpeg;base64,' + base64Image;
                var obj = {
                    PICTURE:base64Image,
                    btn:true
                };
                for(var i=0;i<4;i++){
                    if(this.pictures[i].btn == false){
                        this.pictures.splice(i,1,obj);
                        this.pictures[i].btn = true;
                        break;
                    }
                }
            });
        }
    }

    delPic(index){
        this.pictures.splice(index,1,{PICTURE:'assets/imgs/camera_img.png',btn:false});
        this.total = (this.total - 1) ;
    }

    // polishingPic(obj){
    //     let num = 4 - this.item.pictures.length;
    //     let arr = [];
    //     if(num > 0){
    //         for(let i=0;i<num;i++){
    //             arr.push(i);
    //         }
    //     }
    //     return arr;
    // }
    //
    // showPicture(index){
    //     let modal = this.modalCtrl.create(ShowImage, {items:this.item.pictures, index:index});
    //     modal.present();
    // }

    goBack(){
        this.viewCtrl.dismiss();
    }


    submitForm(commentvalue){
        var pics = [];
        for(var i=0;i<4;i=i+1){
            if(this.pictures[i].btn == true){
                pics.push(this.pictures[i].PICTURE);
            }
        }
        this.alertCtrl.create({
            message: '确定提交',
            buttons: [
                {
                    text: '返回修改',
                    handler: () => {
                        return;
                    }
                },
                {
                    text: '确认',
                    handler: () => {
                        var data = {
                            comment:commentvalue,
                            requestid:this.item.sequence,
                            requesttype:3,
                            sessionid: localStorage.getItem('SESSIONID'),
                            pictures: pics
                        };
                        console.log(data);
                        let loading = this.loadingCtrl.create({
                            content: 'Please wait...',
                        });
                        loading.present();
                        //this.cardMerchantService.addPicture(data).toPromise().then(data=> {
                        this.cardMerchantService.uploadForRequest(data).toPromise().then(data=> {
                            console.log(Object(data));
                            loading.dismiss();
                            if(Object(data).code == 1){
                                localStorage.clear();
                                let modal = this.modalCtrl.create(SigninPage);
                                modal.present();
                            }
                            if(Object(data).code == 0){
                                this.tipService.show('提交成功').then( () => {
                                    this.viewCtrl.dismiss();
                                });
                            }else{
                                this.alertCtrl.create({
                                    message: Object(data).message,
                                    buttons: ['确定']
                                }).present();
                            }
                        }, ()=>{
                            loading.dismiss();
                            loading = this.loadingCtrl.create({
                                spinner: 'hide',
                                content: '网络故障',
                                duration: 2000
                            });
                            loading.present();
                        });
                    }
                }
            ]
        }).present();
    }
    showPicture(index){
        let modal = this.modalCtrl.create(ShowImage, {items:this.pictures, index:index});
        modal.present();
    }
}
