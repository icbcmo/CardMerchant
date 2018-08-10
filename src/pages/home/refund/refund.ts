
import {Component, OnInit} from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'page-home',
  templateUrl: 'refund.html',
})
export class Refund implements OnInit{

    constructor(
        public viewCtrl: ViewController,
		private router: Router
    ) {
    }


    ngOnInit() {}
	
	goCommonRefund(){
		this.viewCtrl.dismiss();
		this.router.navigate(['commonrefund']);
	}
	
	goWeixinRefund(){
		this.viewCtrl.dismiss();
		this.router.navigate(['weixinrefund']);
	}
	
	goRefundVerify(){
		this.dismiss();
		this.router.navigate(['refundverify']);
	}
	
	goRefundProgress(){
		this.viewCtrl.dismiss();
		this.router.navigate(['refundprogress']);
	}

    dismiss() {
        this.viewCtrl.dismiss();
    }

}
