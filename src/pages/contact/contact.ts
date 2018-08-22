import { Component } from '@angular/core';
import {CardMerchantService} from '../../service/card-merchant.service';
import { NativeStorage } from '@ionic-native/native-storage';
import {SigninPage} from "../auth/signin";
import {NavController,ModalController} from "ionic-angular";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
    providers:[CardMerchantService]
})
export class ContactPage {

  constructor(public cardMerchantService: CardMerchantService,
              private nativeStorage: NativeStorage,
              public navCtrl: NavController,
              public modalCtrl: ModalController){

  }

  //send verifycode
  test(mobile:any) {
    console.log("test click!")
    this.cardMerchantService.sendVerifyCode_rsa(mobile).toPromise().then(data=> {
      console.log(data);
    });
  }

  //check verifycode
  test2(mobile:any,verifycode:any) {
      console.log("test2 click!")
      this.cardMerchantService.checkVerifyCode_rsa(mobile,verifycode).toPromise().then(data=> {
        console.log(data);
        console.log(Object(data).message);
        console.log(Object(Object(data).data).uid);
        console.log(Object(Object(data).data).sessionid);
        this.nativeStorage.setItem('UID', Object(Object(data).data).uid)
            .then(
                () => console.log('Stored UID!'),
                error => console.error('Error storing item', error)
            );
        this.nativeStorage.setItem('SESSIONID', Object(Object(data).data).sessionid)
            .then(
                () => console.log('Stored SESSIONID!'),
                error => console.error('Error storing item', error)
            );

      });
  }

  test3() {
      this.nativeStorage.getItem('UID')
          .then(
              data => console.log(data),
              error => console.error(error)
          );
      this.nativeStorage.getItem('SESSIONID')
          .then(
              data => console.log(data),
              error => console.error(error)
          );
  }

  users = [];
    test4() {
        let ss = localStorage.getItem('SESSIONID');

        this.cardMerchantService.getSecondUsers(ss).toPromise().then(data => {
            console.log(data);
            console.log((Object(data).data)[0].FIELD1);
            this.users = Object(data).data;
        });

    }
  test5() {
      localStorage.clear();

      let modal = this.modalCtrl.create(SigninPage);
      modal.present();
  }

  test6() {

      this.cardMerchantService.addCounterPoints('321113322','44','20180504','99').toPromise().then(
          data => {
              console.log(data);
          }
      )
  }
}
