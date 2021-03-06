import { Component, OnInit } from "@angular/core";
import { CardMerchantService } from "../../service/card-merchant.service";
import { NativeStorage } from "@ionic-native/native-storage";
import { ModalController, NavController, AlertController, LoadingController } from "ionic-angular";
import { TabsPage } from "../tabs/tabs";
import { AppVersion } from '@ionic-native/app-version'
import { Keyboard } from '@ionic-native/keyboard';
import { JPush } from "@jiguang-ionic/jpush";
import CryptoJS from "crypto-js";
import { CodePush, ILocalPackage } from "@ionic-native/code-push";
import {MerchantSet} from "../contact/setup/merchantset";

declare var localStorage: any;

@Component({
  selector: "page-signin",
  templateUrl: "signin.html"
})
export class SigninPage implements OnInit {

  private secureKey: string;
  private secureIV: string;
  public countdown: number = 60
  nowVersion: any
  showVersion: boolean = true

  constructor(
    public modalCtrl: ModalController,
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public cardMerchantService: CardMerchantService,
    private nativeStorage: NativeStorage,
    public navCtrl: NavController,
    public jpush: JPush,
    public appVersion: AppVersion,
    private keyboard: Keyboard,
    public codePush: CodePush
  ) {
    this.secureKey = "2a039a0225dadab2251b426dbf291f9d";
    this.secureIV = "34c219ae63a240cb";
  }

  ionViewWillEnter() {
    let sessionid = localStorage.getItem("SESSIONID");
    this.cardMerchantService.checkLoginSession(sessionid).toPromise().then(data => {
      if (Object(data).code == "0")
        this.navCtrl.push(TabsPage);
    });
  }

  ngOnInit() {
    this.appVersion.getVersionNumber().then((version: string) => {
      this.nowVersion = version
      this.codePush.getCurrentPackage().then((current: ILocalPackage) => {
        if (current && current.label) {
          // replace the last version number with the code push label
          this.nowVersion = version.substr(0, 4) + current.label.substr(1);
        }
      }).catch(err => {
        console.log('getCurrentPackage: ' + err);
      });
    }).catch(err => {
      console.log('getVersionNumber:' + err);
    });
    this.keyboard.onKeyboardShow().subscribe(() => {
      this.showVersion = false;
    });
    this.keyboard.onKeyboardHide().subscribe(() => {
      this.showVersion = true;
    })
  }

  checkEnter(event, acc, psw) {
    if (event.keyCode == 13)
      this.signin(acc, psw);
    if (psw.toString().length == 6)
      this.signin(acc, psw);
  }

  // 穫取驗證碼
  send(mobile) {
    if (mobile != ''){
      this.cardMerchantService.sendVerifyCode_rsa(mobile).toPromise().then(data => {});
      let time = setInterval(() => {
        if (this.countdown == 1) {
          clearInterval(time)
          this.countdown = 60
        } else {
          this.countdown--
        }
      }, 1000)
    } else {
      this.presentAlert("手機號不能為空");
    }
  }

  signin(acc, psw) {
    let loading = this.loadingCtrl.create({
      content: "Please wait..."
      //duration: 2000
    });
    loading.present();

    this.cardMerchantService.checkVerifyCode_rsa(acc, psw).toPromise().then(data => {
      //var tjson = JSON.parse(this.decryption(Object(data).data).toString().replace("    ","").toString());
      if (Object(data).data == "") {
        loading.dismiss();
        this.presentAlert("登錄有誤！");
      } else {
        var tjson = JSON.parse(this.decryption(Object(data).data).toString().replace(/ /g, "").toString());
        loading.dismiss();
        if (acc === tjson.mobile) {
          localStorage.setItem("MERCHANTCIF", tjson.merchantCif);
          localStorage.setItem("MERCHANTCIFNAME", tjson.merchantCifName);
          localStorage.setItem("MERCHANTID", tjson.merchantId);
          localStorage.setItem("MERCHANTNAME", tjson.merchantName);
          localStorage.setItem("DEPARTMENTID", tjson.departmentId);
          localStorage.setItem("DEPARTMENTNAME", tjson.departmentName);
          localStorage.setItem("WECHATMERCHANTID", tjson.wechatMerchantId);
          localStorage.setItem("LEVEL", tjson.level);
          localStorage.setItem("SESSIONID", tjson.sessionid);
          localStorage.setItem("MOBILE", tjson.mobile);
          localStorage.setItem("NAME", tjson.name);
          localStorage.setItem("UID", tjson.uid);
          localStorage.setItem("UID2", tjson.uid2);
          localStorage.setItem("WECHATBADGE", 0);
          localStorage.setItem("RETRIEVALBADGE", 0);
          if (tjson.level == "FIRSTCLASS") {
            let modal = this.modalCtrl.create(MerchantSet, {entrance: 'login'});
            modal.present();
          }
        }
        else {
          this.presentAlert("登錄有誤！");
        }
        if (Object(data).code === "0")
          this.navCtrl.push(TabsPage);
        else if (Object(data).code === "1")
          this.presentAlert("手機號碼不合法");
        else if (Object(data).code === "2")
          this.presentAlert("驗證碼不正確");
        else if (Object(data).code === "3")
          this.presentAlert("驗證碼已過期，請重新獲取");
        else
          this.presentAlert("網絡故障，請稍後再試");
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

  decryption(data) {
    let key = "34c219ae63a240cb";  // 加密秘钥
    var encrypted1 = CryptoJS.enc.Base64.parse(data);
    var decrypted = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key), {
      iv: CryptoJS.enc.Utf8.parse(key),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.NoPadding
    });
    decrypted = CryptoJS.enc.Utf8.stringify(decrypted);// 转换为 utf8 字符串
    return decrypted;
  }

  presentAlert(note) {
    let alert = this.alertCtrl.create({
      title: "Error",
      subTitle: note,
      buttons: ["OK"]
    });
    alert.present();
  }

}
