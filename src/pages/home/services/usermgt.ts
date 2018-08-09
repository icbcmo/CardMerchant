
import {Component, OnInit} from '@angular/core';
import { Platform } from 'ionic-angular';
import {CardMerchantService} from "../../../service/card-merchant.service";
import {NativeStorage} from "@ionic-native/native-storage";
import { Router } from '@angular/router';

declare var localStorage: any;

@Component({
  selector: 'page-usermgt',
  templateUrl: 'usermgt.html'
})

export class UserMgtPage implements OnInit{
	userList: any;

    constructor(
        public platform: Platform,
		public cardMerchantService: CardMerchantService,
		private nativeStorage: NativeStorage,
		private router: Router
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
		this.router.navigate(['userdetail', {userid: user.currpeople, username: user.field2}]);
	}
	
	addUser(){
		this.router.navigate(['adduser']);
	}
	
	goBack(){
		history.back(-1);
	}

}
