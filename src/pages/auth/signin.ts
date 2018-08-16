import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CardMerchantService} from "../../service/card-merchant.service";
import {NativeStorage} from "@ionic-native/native-storage";
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {Device} from "@ionic-native/device";
import {JPush} from "@jiguang-ionic/jpush";

declare var localStorage: any;

@Component({
    selector: 'page-signin',
    templateUrl: 'signin.html'
})
export class SigninPage implements OnInit{


    // @ViewChild('eyes') eyes: ElementRef;
    // @ViewChild('ps') ps: ElementRef;
    // eyetype = 'eye-off'
    // passwordtype = 'password'
    constructor(
				private alertCtrl: AlertController,
				public loadingCtrl: LoadingController,
                public cardMerchantService: CardMerchantService,
                private nativeStorage: NativeStorage,
				public navCtrl: NavController,
                public jpush: JPush,
                device: Device
	){
        console.log("SigninPage constructor")
    }

    ionViewWillEnter(){
        console.log("SigninPage ionViewWillEnter")
        let sessionid = localStorage.getItem("SESSIONID")

        this.cardMerchantService.checkLoginSession(sessionid).toPromise().then(data=>{
            console.log(data);
            if(Object(data).code == "0")
                this.navCtrl.push(TabsPage);
        })
    }




    ngOnInit(){
        console.log("SigninPage Oninit")


    }
    // checkEnter(event,acc,psw){
    //     console.log(event)
    //     if(event.keyCode == 13)
    //         this.signin(acc,psw);
    // }

    send(mobile) {
        console.log("test click!")
        this.cardMerchantService.sendVerifyCode_rsa(mobile).toPromise().then(data=> {
            console.log(data);
        });
    }

    signin(acc,psw){

        console.log("test2 click!");
		let loading = this.loadingCtrl.create({
				content: 'Please wait...',
				duration: 5000
			});
		loading.present();
		
        this.cardMerchantService.checkVerifyCode_rsa(acc,psw).toPromise().then(data=> {
            console.log(data);
			loading.dismiss();

            //可以把merchantId等信息都存于localStorage,后续功能会用到
            localStorage.setItem('MERCHANTCIF', Object(Object(data).data).merchantCif);
            localStorage.setItem('MERCHANTID', Object(Object(data).data).merchantId);
            localStorage.setItem('MERCHANTNAME', Object(Object(data).data).merchantName);
            localStorage.setItem('DEPARTMENTID', Object(Object(data).data).departmentId);
            localStorage.setItem('DEPARTMENTNAME', Object(Object(data).data).departmentName);
			localStorage.setItem('UID', Object(Object(data).data).uid);
            localStorage.setItem('NAME', Object(Object(data).data).name);
            localStorage.setItem('MOBILE', Object(Object(data).data).mobile);
            localStorage.setItem('LEVEL', Object(Object(data).data).level);
            localStorage.setItem('SESSIONID', Object(Object(data).data).sessionid);
            localStorage.setItem('TERMINALID', Object(Object(data).data).terminalId);
            localStorage.setItem('WECHATTID', Object(Object(data).data).wechattid);

            if(Object(data).code === "0")
                this.navCtrl.push(TabsPage);
            else if(Object(data).code === "1")
                this.presentAlert("手機號碼不合法")
            else if(Object(data).code === "2")
                this.presentAlert("驗證碼不正確")
            else if (Object(data).code === "3")
                this.presentAlert("驗證碼已過期，請重新獲取")
            else
                this.presentAlert("網絡故障，請稍後再試")
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

    // eyeOnOff(){
    //     this.eyetype = this.eyetype == 'eye-off'?'eye':'eye-off';
    //     this.passwordtype = this.passwordtype == 'password'? 'tel':'password';
    //
    // }

    presentAlert(note) {
        let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: note,
            buttons: ['OK']
        });
        alert.present();
    }

}
