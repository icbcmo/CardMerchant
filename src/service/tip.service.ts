import { LoadingController } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()

export class TipService{
    constructor(public loadingCtrl: LoadingController) {}
	
	show(msg) {
		return new Promise((resolve) => {
			let loading = this.loadingCtrl.create({
						spinner: 'hide',
						content: msg,
						duration: 1500
					});
			loading.onDidDismiss(() => {
				resolve();
			});

			loading.present();
			//setTimeout(() => {
				//loading.dismiss();
				//resolve();
			//},1500);
		});
	}	
}

