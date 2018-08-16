
import {Component, OnInit} from '@angular/core';
import { ModalController, Platform,NavController, ViewController, AlertController, LoadingController } from 'ionic-angular';
import {CardMerchantService} from "../../../service/card-merchant.service";
import {NativeStorage} from "@ionic-native/native-storage";
import {AddUser} from "./adduser";
import {UserDetail} from "./userdetail";
import {TipService} from '../../../service/tip.service';

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
        public navCtrl: NavController,
		private alertCtrl: AlertController,
		public loadingCtrl: LoadingController,
		public tipService: TipService
    ) {
    }


    ngOnInit() {
		var data = localStorage.getItem('SESSIONID');
		let loading = this.loadingCtrl.create({
				content: 'Please wait...',
				duration: 5000
			});
		loading.present();
		this.cardMerchantService.getSecondUsers(data).toPromise().then(data => {
            console.log(data);
			loading.dismiss();
			if(Object(data).code == 0){
				this.userList = Object(data).data;
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

	
	openUserDetail(user){
		console.log(user);
		let modal = this.modalCtrl.create(UserDetail, {user:user});
        modal.present();
	}
	
	addUser(){
		let modal = this.modalCtrl.create(AddUser);
        modal.present();
	}
	
	delUser(e,userid){
		console.log(e);
		e.stopPropagation();
		this.alertCtrl.create({
						message: '您确定要删除用户？',
						buttons: [
						{
							text: '取消',
							role: 'cancel',
							handler: () => {
								console.log('Cancel clicked');
							}
						},
						{
							text: '确定',
							role: 'confirm',
							handler: () => {
								var data = {
									Sessionid: localStorage.getItem('SESSIONID'),
									deleteuid: userid
								};
								console.log(data);
								let loading = this.loadingCtrl.create({
									content: 'Please wait...'
								});
								loading.present();
								this.cardMerchantService.deleteseconduser(data).toPromise().then(data=> {
									console.log(Object(data));
									loading.dismiss();
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
								});
							}
						}]
					}).present();
	}
	
	goBack(){
		//this.viewCtrl.dismiss();
		this.navCtrl.pop();
	}

}
