
import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { Platform } from 'ionic-angular';
import {CardMerchantService} from "../../../service/card-merchant.service";
import {NativeStorage} from "@ionic-native/native-storage";

declare var localStorage: any;

@Component({
  selector: 'page-adduser',
  templateUrl: 'adduser.html'
})

export class AddUserPage implements OnInit{
	shopList: any;
	@ViewChild('mobile') Mobile: ElementRef;
	@ViewChild('name') Name: ElementRef;
	@ViewChild('departmentid') Departmentid: ElementRef;
	
    constructor(
        public platform: Platform,
		public cardMerchantService: CardMerchantService,
		private nativeStorage: NativeStorage
    ) {
    }


    ngOnInit() {
		var data = {
			merchantId: localStorage.getItem('MERCHANTID'),
			sessionId: localStorage.getItem('SESSIONID')
		};
		console.log(data);
		this.cardMerchantService.getShopList(data).toPromise().then(data=> {
			console.log(Object(data));
			this.shopList = Object(data).data[0];
		});
	}

	
	submitForm(){
		var data = {
			sessionid: localStorage.getItem('SESSIONID'),
			mobile: Object(this.Mobile).value,
			name: Object(this.Name).value,
			departmentid: Object(this.Departmentid).value,
		};
		console.log(data);
		this.cardMerchantService.addUser(data).toPromise().then(data=> {
			console.log(Object(data));
			if(Object(data).code == 0){
				console.log('提交成功');
				history.back(-1);
			}else{
				alert(Object(data).message);
			}
		});
	}
	
	goBack(){
		history.back(-1);
	}

}
