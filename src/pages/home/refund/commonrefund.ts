
import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {CardMerchantService} from "../../../service/card-merchant.service";
import {Camera, CameraOptions} from '@ionic-native/camera';

@Component({
  selector: 'page-commonrefund',
  templateUrl: 'commonrefund.html'
})
export class CommonRefundPage implements OnInit{	
	base64Image: any;
	needView: Boolean = false;
	
	@ViewChild('merchantname') merchantname: ElementRef;
	@ViewChild('departmentname') departmentname: ElementRef;
	@ViewChild('refundcardno4') refundcardno4: ElementRef;
	@ViewChild('trxdate') trxdate: ElementRef;
	@ViewChild('authno') authno: ElementRef;
	@ViewChild('trxamount') trxamount: ElementRef;
	@ViewChild('refundamount') refundamount: ElementRef;
	@ViewChild('applymobile') applymobile: ElementRef;

    constructor(
		public cardMerchantService: CardMerchantService,
		private camera: Camera
    ) {
    }


    ngOnInit() {
		console.log(this);
	}
	
	openCamera(){
        //手機上使用部分開始
        const options: CameraOptions = {
            quality: 80,
            targetWidth: 600,
            targetHeight: 1200,
            //allowEdit: true,
            sourceType: 1,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };

        this.camera.getPicture(options).then((imageData) => {
            this.base64Image = imageData;
            this.base64Image = 'data:image/jpeg;base64,' + this.base64Image;
            var obj = document.getElementById("imgview"); // 照片预览显示
			Object(obj).src = this.base64Image;
			this.needView = true;
        });
    }
	
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
			applymobile: Object(this.applymobile).value,
			picture: this.base64Image
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
