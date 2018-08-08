
import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import {CardMerchantService} from "../../../service/card-merchant.service";
import {NativeStorage} from "@ionic-native/native-storage";

declare var localStorage: any;

@Component({
  selector: 'page-home',
  templateUrl: 'setup.html',
})
export class Setup implements OnInit{
	@ViewChild('mobile') Mobile: ElementRef;
	@ViewChild('name') Name: ElementRef;
	@ViewChild('departmentid') Departmentid: ElementRef;
	@ViewChild('shopid') Shopid: ElementRef;
	
	openModalMgt: Boolean;
	openModalAdd: Boolean;
	mobile: any;
	name: any;
	departmentid: any;
	BacktoUserMgt: Boolean = false;

    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController,
		public cardMerchantService: CardMerchantService,
		private nativeStorage: NativeStorage
    ) {
    }


    ngOnInit() {
		this.openModalMgt = false;
		this.openModalAdd = false;
	}

    dismiss() {
        this.viewCtrl.dismiss();
    }
	
	openUserMgt(){
		console.log('clicked');
		this.openModalMgt = true;
		this.openModalAdd = false;
	}
	
	addUser(){
		console.log('clicked');
		this.openModalAdd = true;
		this.openModalMgt = false;
	}
	
	closeModalMgt(){
		this.openModalMgt = false;
	}
	
	closeModalAdd(){
		this.openModalAdd = false;
		this.openModalMgt = true;
		this.BacktoUserMgt = true;
	}
	
	submitForm(){
		var data = {
			sessionid: localStorage.getItem('SESSIONID'),
			mobile: Object(this.Mobile).value,
			name: Object(this.Name).value,
			departmentid: Object(this.Departmentid).value,
			shopid: Object(this.Shopid).value
		};
		console.log(data);
		this.cardMerchantService.addUser(data).toPromise().then(data=> {
			console.log(Object(data));
			if(Object(data).code == 0){
				console.log('提交成功');
				this.openModalAdd = false;
			}else{
				alert(Object(data).message);
				this.openModalAdd = false;
			}
			
		});
	}

}
