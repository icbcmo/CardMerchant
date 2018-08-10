
import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {CardMerchantService} from "../../../service/card-merchant.service";


@Component({
  selector: 'page-refundverify',
  templateUrl: 'refundverify.html',
})
export class RefundVerifyPage implements OnInit{
	@ViewChild('merchantname') merchantname: ElementRef;
	@ViewChild('departmentname') departmentname: ElementRef;
	@ViewChild('refundcardno4') refundcardno4: ElementRef;
	@ViewChild('trxdate') trxdate: ElementRef;
	@ViewChild('authno') authno: ElementRef;
	@ViewChild('trxamount') trxamount: ElementRef;
	@ViewChild('refundamount') refundamount: ElementRef;
	@ViewChild('applymobile') applymobile: ElementRef;

    constructor(
		public cardMerchantService: CardMerchantService
    ) {
    }


    ngOnInit() {}
	
	submitForm(){
		var data = {
			sessionid: localStorage.getItem('SESSIONID'),
			merchantid: localStorage.getItem("MERCHANTID"),
			merchantname: localStorage.getItem("MERCHANTNAME"),
			departmentid: localStorage.getItem("DEPARTMENTID"),
			departmentname: Object(this.departmentname).value,
			refundcardno4: Object(this.refundcardno4).value,
			trxdate: Object(this.trxdate).value,
			authno: Object(this.authno).value,
			trxamount: Object(this.trxamount).value,
			refundamount: Object(this.refundamount).value,
			//applymobile: localStorage.getItem("APPLYMOBILE"),
			applymobile: Object(this.applymobile).value 
		};
		console.log(data);
		this.cardMerchantService.addrefund(data).toPromise().then(data=> {
			console.log(Object(data));
			if(Object(data).code == 0){
				console.log('提交成功');
				history.back();
			}else{
				alert(Object(data).message);
			}
		});
	}

    goBack() {
        history.back();
    }

}
