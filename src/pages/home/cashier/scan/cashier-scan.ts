
import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { ModalController, Platform,NavController, ViewController, AlertController, LoadingController } from 'ionic-angular';
import {CardMerchantService} from "../../../../service/card-merchant.service";
import {NativeStorage} from "@ionic-native/native-storage";
import {TipService} from '../../../../service/tip.service';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

@Component({
    selector: 'page-cashier-scan',
    templateUrl: 'cashier-scan.html'
})

export class CashierScan implements OnInit{
	
	items: any[] = [];
	historyList: any[] = [];
	pointsnum: Number = 0;
	tabs: any;
	openInput: Boolean = false;
	
	@ViewChild('cardno') Cardno: ElementRef;
	
    constructor(
        public viewCtrl: ViewController,
		public modalCtrl: ModalController,
        public navCtrl: NavController,
		private nativeStorage: NativeStorage,
		public loadingCtrl: LoadingController,
		private alertCtrl: AlertController,
		public tipService: TipService,
		public cardMerchantService: CardMerchantService,
		private qrScanner: QRScanner
    ) {
    }


    ngOnInit() {
		this.tabs = 'jifen';
		this.qrScanner.prepare()
            .then((status: QRScannerStatus) => {
                if (status.authorized) {
                    // camera permission was granted
                    // start scanning
                    let scanSub = this.qrScanner.scan().subscribe((text: string) => {
                        console.log('Scanned something', text);
                        this.qrScanner.hide(); // hide camera preview
                        //scanSub.unsubscribe(); // stop scanning
						if(text){
							//添加一笔柜员扫码内容
							var obj = JSON.parse(text);
							var data = {
								sessionid: localStorage.getItem('SESSIONID'),
								orderid: obj.orderid,
								orderamount: obj.orderamount,
								orderdate: obj.orderdate,
								pointsnum: obj.orderdate
							};
							this.cardMerchantService.addcounterpoints(data).toPromise().then(data=> {
								console.log(Object(data));
								if(Object(data).code == 0){
									//每次扫码数据经后台检查确认有效才加入累计，防止重复扫码
									this.items.push(Object(data).data);
									this.pointsnum += Object(data).points;
									//重新获取本周扫码历史明细
									this.cardMerchantService.getscanweeklist180(data).toPromise().then(data=> {
										console.log(Object(data));
										if(Object(data).code == 0){
											this.historyList = Object(data).data;
										}
									});
								}
								var instance = this;
								setTimeout(function(){
									instance.qrScanner.show(); // show camera preview
								},2000);
							});
						}
                    });
                } else if (status.denied) {
                    // camera permission was permanently denied
                    // you must use QRScanner.openSettings() method to guide the user to the settings page
                    // then they can grant the permission from there
                } else {
                    // permission was denied, but not permanently. You can ask for permission again at a later time.
                }
            })
            .catch((e: any) => console.log('Error is', e));
			this.getWeeklyHistory();
	}
	
	getWeeklyHistory(){
		//获取本周扫码历史明细
		var params = {};
		this.cardMerchantService.getscanweeklist180(params).toPromise().then(data=> {
			console.log(Object(data));
			if(Object(data).code == 0){
				this.historyList = Object(data).data;
			}
		});
	}
	
	toCash(){
		this.openInput = true;
	}
	
	submitForm(){
		if(!/^\d{16,22}$/.test(Object(this.Cardno).value)){
			this.tipService.show('银行卡号至少16位数字');
		}else{
			var data = {
				sessionid: localStorage.getItem('SESSIONID'),
				cardno: Object(this.Cardno).value,
				points: this.pointsnum
			};
			console.log(data);
			let loading = this.loadingCtrl.create({
				content: 'Please wait...',
				duration: 5000
			});
			loading.present();
			this.cardMerchantService.newpointstomoney(data).toPromise().then(data=> {
				console.log(Object(data));
				loading.dismiss();
				if(Object(data).code == 0){
					this.tipService.show('提交成功').then( () => {
						this.openInput = false;
						this.tabs = 'history';  // 显示历史列表
						this.getWeeklyHistory();  // 重新从后台获取和更新历史列表数据
					});
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
	}

    dismiss() {
        this.viewCtrl.dismiss();
    }

}