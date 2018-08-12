
import {Component, OnInit} from '@angular/core';
import { ModalController, Platform,NavController, ViewController } from 'ionic-angular';
import {CardMerchantService} from "../../../service/card-merchant.service";
import {NativeStorage} from "@ionic-native/native-storage";
import {AddUser} from "./adduser";
import {UserDetail} from "./userdetail";

declare var localStorage: any;

@Component({
  selector: 'page-usermgt',
  templateUrl: 'usermgt.html'
})

export class UserMgt implements OnInit{
	userList: any;

    constructor(
        public platform: Platform,
		public cardMerchantService: CardMerchantService,
		private nativeStorage: NativeStorage,
		public viewCtrl: ViewController,
		public modalCtrl: ModalController,
        public navCtrl: NavController
    ) {
    }


    ngOnInit() {
		var data = localStorage.getItem('SESSIONID');
		this.cardMerchantService.getSecondUsers(data).toPromise().then(data => {
            console.log(data);
            this.userList = Object(data).data;
		});
	}

	
	openUserDetail(user){
		console.log(user);
		let modal = this.modalCtrl.create(UserDetail);
        modal.present();
		//this.router.navigate(['userdetail', {userid: user.currpeople, username: user.field2}]);
		
	}
	
	addUser(){
		let modal = this.modalCtrl.create(AddUser);
        modal.present();
	}
	
	goBack(){
		//this.viewCtrl.dismiss();
		this.navCtrl.pop();
	}

}
