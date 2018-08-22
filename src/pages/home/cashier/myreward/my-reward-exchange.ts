import {Component, OnInit } from '@angular/core';
import {LoadingController,ViewController,NavController,NavParams} from "ionic-angular";
import {CardMerchantService} from "../../../../service/card-merchant.service";
declare var localStorage: any;

@Component({
    selector: 'my-reward-exchange',
    templateUrl: 'my-reward-exchange.html'
})

export class MyRewardExchange implements OnInit{
    constructor(public cardMerchantService:CardMerchantService,
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

    doExchangeToCash(points:any) {
        this.cardMerchantService.newPointsToMoney(points).toPromise().then(data=>{
            console.log(data);
        })
    }
}