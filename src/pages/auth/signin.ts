import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { AlertController } from 'ionic-angular';
import {CardMerchantService} from "../../service/card-merchant.service";
import {NativeStorage} from "@ionic-native/native-storage";
import { Router } from '@angular/router';
import { NavController } from 'ionic-angular';
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
                public cardMerchantService: CardMerchantService,
                private nativeStorage: NativeStorage,
				public navCtrl: NavController,
                public jpush: JPush,
                device: Device)
	{
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

        console.log("test2 click!")
        this.cardMerchantService.checkVerifyCode_rsa(acc,psw).toPromise().then(data=> {
            console.log(data);

			localStorage.setItem('UID', Object(Object(data).data).uid);
			localStorage.setItem('SESSIONID', Object(Object(data).data).sessionid);
			//可以把merchantId等信息都存于localStorage,后续功能会用到
			localStorage.setItem('MERCHANTID', Object(Object(data).data).merchantId);
			localStorage.setItem('DEPARTMENTID', Object(Object(data).data).departmentId);

            if(Object(data).code === "0")
                this.navCtrl.push(TabsPage);
            else if(Object(data).code === "1")
                alert("手機號碼不合法")
            else if(Object(data).code === "2")
                alert("驗證碼不正確")
            else if (Object(data).code === "3")
                alert("驗證碼已過期，請重新獲取")
            else
                alert("網絡故障，請稍後再試")
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
            buttons: ['Dismiss']
        });
        alert.present();
    }

}
