import {Component, OnInit } from '@angular/core';
import {LoadingController,ViewController,NavController,NavParams} from "ionic-angular";
import {CardMerchantService} from "../../../../service/card-merchant.service";
import {ReportDataService} from "../../../../service/report-data.service";
declare var localStorage: any;

@Component({
    selector: 'my-reward-exchange',
    templateUrl: 'my-reward-exchange.html'
})

export class MyRewardExchange implements OnInit{
    constructor(public cardMerchantService:CardMerchantService,
                public reportDataService:ReportDataService,
                public loadingCtrl: LoadingController,
                public viewCtrl: ViewController,
                public navCtrl: NavController,public navParams: NavParams)
    {

    }
    myTotal=0;
    canExchangeMaxPoints=0;
    ngOnInit()
    {
        this.myTotal = this.navParams.get('total');
        console.log(this.myTotal);
        this.canExchangeMaxPoints=(parseInt((this.myTotal/100).toString()))*100;
        console.log(this.canExchangeMaxPoints);
    }

    doExchangeToCash(points:any,cardno:any) {

        console.log(points);
        console.log(cardno);
        this.cardMerchantService.newPointsToMoney(points.toString()).toPromise().then(data=>{
            console.log(data);

            if(Object(data).code == "0"){
                let loading = this.loadingCtrl.create({
                    content: '兌換成功',
                });
                loading.present();

                this.reportDataService.getScanWeekList156().toPromise().then(data=>{
                    console.log(data);
                    //this.myTotal = Object(data).message;
                    this.myTotal = Object(Object(data).data)[0].field8;

                    loading.dismiss();

                });
            }
        })
    }
    scanCard(){

    }
}