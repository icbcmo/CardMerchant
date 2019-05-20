import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { CardMerchantService } from "../../../service/card-merchant.service";
import { ViewController, AlertController, LoadingController, ModalController, NavParams, ToastController } from "ionic-angular";
import { TipService } from "../../../service/tip.service";
import { BaseDate } from "../../../service/BaseDate.service";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { QRScanner, QRScannerStatus } from "@ionic-native/qr-scanner";
import { SigninPage } from "../../auth/signin";
import { RefundqrscannerPage } from "./refundqrscanner/refundqrscanner";
import { Qrscanner } from "../qrscanner/qrscanner";

@Component({
  selector: "page-weixinrefund",
  templateUrl: "weixinrefund.html"
})
export class WeixinRefund implements OnInit {
  pictures: any[] = [];
  tradeDate: any;
  total: number = 0;

  @ViewChild("merchantname") merchantname: ElementRef;
  @ViewChild("departmentname") departmentname: ElementRef;
  @ViewChild("wechattid") wechattid: ElementRef;
  @ViewChild("wechattrxno") wechattrxno: ElementRef;
  @ViewChild("wechattrxdate") wechattrxdate: ElementRef;
  @ViewChild("wechattrxamount") wechattrxamount: ElementRef;
  @ViewChild("wechatrefundamount") wechatrefundamount: ElementRef;
  @ViewChild("wechatapplymobile") wechatapplymobile: ElementRef;
  @ViewChild("wechatapplyname") wechatapplyname: ElementRef;

  constructor(
    public cardMerchantService: CardMerchantService,
    public viewCtrl: ViewController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    private camera: Camera,
    private alertCtrl: AlertController,
    public tipService: TipService,
    public params: NavParams,
    private qrScanner: QRScanner,
    public toastCtrl: ToastController
  ) {
  }


  ngOnInit() {
    Object(this.merchantname).value = localStorage.getItem("MERCHANTNAME");
    Object(this.departmentname).value = localStorage.getItem("DEPARTMENTNAME");
    Object(this.wechatapplyname).value = localStorage.getItem("NAME");
    Object(this.wechatapplymobile).value = localStorage.getItem("MOBILE");
    this.tradeDate = "";
    this.pictures = [
      { data: "assets/imgs/camera_img.png", btn: false },
      { data: "assets/imgs/camera_img.png", btn: false },
      { data: "assets/imgs/camera_img.png", btn: false },
      { data: "assets/imgs/camera_img.png", btn: false }
    ];
  }

  fatMoney(oId) {
    Object(this[oId]).value = this.tipService.mone(Object(this[oId]).value, 2, ".", ",", "round");
  }

  submitForm() {
    var pics = [];
    for (var i = 0; i < 4; i = i + 1) {
      if (this.pictures[i].btn == true) {
        pics.push(this.pictures[i].data);
      }
    }
    var dataS = {
      sessionid: localStorage.getItem("SESSIONID"),
      wechatmid: localStorage.getItem("WECHATMERCHANTID"),
      wechatmerchantname: localStorage.getItem("MERCHANTNAME"),
      wechattid: Object(this.wechattid).value,
      wechattrxno: Object(this.wechattrxno).value,
      wechattrxdate: this.tradeDate,
      wechattrxamount: Object(this.wechattrxamount).value.replace(/,/g, ""),
      wechatrefundamount: Object(this.wechatrefundamount).value.replace(/,/g, ""),
      wechatapplymobile: Object(this.wechatapplymobile).value,
      wechatapplyname: Object(this.wechatapplyname).value,
      wechatapplypicture: pics
    };
    console.log(dataS);
    var flegg = false
    for (let i in dataS) {
      if(typeof dataS[i] == 'string') {
        if (!dataS[i]) flegg = true
      } else {
        if (dataS[i].length == 0) flegg = true
      }
    }
    if (flegg) {
      this.tipService.show("請正確填寫退款信息").then(() => {});
      return false
    }
    this.alertCtrl.create({
      title: "退款金额",
      message: Object(this.wechatrefundamount).value,
      buttons: [
        {
          text: "返回修改",
          handler: () => {
            return;
          }
        },
        {
          text: "确认退款",
          handler: () => {
            let loading = this.loadingCtrl.create({
              content: "Please wait...",
              duration: 5000
            });
            loading.present();
            this.cardMerchantService.addwechatrefund(dataS).toPromise().then(data => {
              console.log(Object(data));
              loading.dismiss();
              if (Object(data).code == 1) {
                localStorage.clear();
                let modal = this.modalCtrl.create(SigninPage);
                modal.present();
              }
              if (Object(data).code == 0) {
                this.tipService.show("提交成功").then(() => {
                  this.viewCtrl.dismiss();
                });
              } else {
                this.alertCtrl.create({
                  message: Object(data).message,
                  buttons: ["确定"]
                }).present();
              }
            }, () => {
              loading.dismiss();
              loading = this.loadingCtrl.create({
                spinner: "hide",
                content: "网络故障",
                duration: 2000
              });
              loading.present();
            });
          }
        }
      ]
    }).present();
  }

  openCamera() {
    this.total = (this.total + 1);
    if (this.total > 4) {
      this.tipService.show("最多拍照上传4张");
    } else {
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
        base64Image = "data:image/jpeg;base64," + base64Image;
        var obj = {
          data: base64Image,
          btn: true
        };
        for (var i = 0; i < 4; i++) {
          if (this.pictures[i].btn == false) {
            this.pictures.splice(i, 1, obj);
            this.pictures[i].btn = true;
            break;
          }
        }
      });
    }
  }

  delPic(index) {
    this.pictures.splice(index, 1, { data: "assets/imgs/camera_img.png", btn: false });
    this.total = (this.total - 1);
  }

  toQrScanner() {
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
          });
          this.qrScanner.hide();
          scanSub.unsubscribe();
          let modal = this.modalCtrl.create(RefundqrscannerPage);
          modal.onDidDismiss(data => {
            this.tradeDate = data.date.split(" ")[0];
            Object(this.wechattid).value = data.TID;
            Object(this.wechattrxno).value = data.ref_id;
            Object(this.wechattrxamount).value = data.trxamount;
            this.qrScanner.destroy();
            (window.document.querySelector("ion-nav") as HTMLElement).style.display = "";
          });
          (window.document.querySelector("ion-nav") as HTMLElement).style.display = "none";
          modal.present();
        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => console.log("Error is", e));
  }

  goBack() {
    this.viewCtrl.dismiss();
  }

}
