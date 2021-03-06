import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { ModalController, Platform, NavController, ViewController } from "ionic-angular";
import { CardMerchantService } from "../../service/card-merchant.service";
import { NativeStorage } from "@ionic-native/native-storage";
import { AppVersion } from "@ionic-native/app-version";
import { Router } from "@angular/router";
import { UserMgt } from "./setup/usermgt";
import { MerchantSet } from "./setup/merchantset";
import { SigninPage } from "../auth/signin";
import { TextToSpeech } from "@ionic-native/text-to-speech";
import { CodePush, ILocalPackage } from "@ionic-native/code-push";
import { JPush } from "@jiguang-ionic/jpush";

declare var localStorage: any;

@Component({
  selector: "page-setup",
  templateUrl: "contact.html"
})

export class ContactPage {
  isUserMgt: boolean = false;
  isShopList: boolean = false;
  Mobile: String = "";
  User: String = "";
  nowVersion: any;

  constructor(
    public platform: Platform,
    public cardMerchantService: CardMerchantService,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    private tts: TextToSpeech,
    private nativeStorage: NativeStorage,
    public appVersion: AppVersion,
    public viewCtrl: ViewController,
    public codePush: CodePush,
    public jpush: JPush,
  ) {
  }

  ngOnInit() {
    let uid = localStorage.getItem("UID");
    let level = localStorage.getItem("LEVEL");
    if (uid || level != "SECONDCLASS") this.isUserMgt = true;
    if (level == "FIRSTCLASS") this.isShopList = true;
    this.Mobile = localStorage.getItem("MOBILE");
    this.User = localStorage.getItem("NAME");

    this.appVersion.getVersionNumber().then((version: string) => {
      this.nowVersion = version
      this.codePush.getCurrentPackage().then((current: ILocalPackage) => {
        // replace the last version number with the code push label
        this.nowVersion = version.substr(0, 4) + current.label.substr(1);
      }).catch(err => {
        console.log('getCurrentPackage:' + err);
      })
    }).catch(err => {
      console.log('getVersionNumber:' + err);
    });
  }

  // 用戶管理
  openUserMgt() {
    let modal = this.modalCtrl.create(UserMgt);
    modal.present();
  }

  // 商戶列表
  openMerchantSet() {
    let modal = this.modalCtrl.create(MerchantSet, {entrance: 'mine'});
    modal.present();
  }

  speak() {
    this.tts.speak({ text: "微信收款330.30元", locale: "zh-HK", rate: 1.4 })
      .then(() => console.log("Success"))
      .catch((reason: any) => console.log(reason));
  }

  goBack() {
    this.viewCtrl.dismiss();
  }

  loginOut() {
    localStorage.clear();
    let modal = this.modalCtrl.create(SigninPage);
    modal.present();
  }

  jpushDebug() {
    this.jpush.getRegistrationID().then(rId => {
      alert(rId);
    });
    this.jpush.getAllTags({ sequence: 0 })
    .then(result => {
      alert(JSON.stringify(result));
    }).catch(error => {
      alert(JSON.stringify(error));
    });
}

}
