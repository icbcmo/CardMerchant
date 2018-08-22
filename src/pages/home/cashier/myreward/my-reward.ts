import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LoadingController, NavController, ViewController} from "ionic-angular";
import {ReportDataService} from "../../../../service/report-data.service";
import {MyRewardExchange} from "./my-reward-exchange";
declare var localStorage: any;

@Component({
    selector: 'my-reward',
    templateUrl: 'my-reward.html'
})

export class MyReward implements OnInit{
    showType = 'weekData';
    weekData =[];
    dayData =[];
    myTotal = 0;
    myWeekData:any;
    myDayData:any;

    constructor(public reportDataService:ReportDataService,
                public loadingCtrl: LoadingController,
                public viewCtrl: ViewController,
                public navCtrl: NavController){
        this.showType ='weekData';

    }
    //沟崽子们
    ionViewDidLoad(){
        console.log('触发ionViewDidLoad');
    }

    ionViewWillEnter(){
        console.log('触发ionViewWillEnter');
        let loading = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        loading.present();

        this.reportDataService.getScanWeekList156().toPromise().then(data=>{
            console.log(data);
            this.weekData = Object(Object(data).data);
            this.myTotal = Object(data).message;
            loading.dismiss();

        });
    }

    ionViewDidEnter(){
        console.log('触发ionViewDidEnter');
    }

    ionViewWillLeave(){
        console.log('触发ionViewWillLeave');
    }

    ionViewDidLeave(){
        console.log('触发ionViewDidLeave');
    }

    ionViewWillUnload(){
        console.log('触发ionViewWillUnload');
    }

    ngOnInit()
    {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        loading.present();

        this.reportDataService.getScanWeekList156().toPromise().then(data=>{
            console.log(data);
            this.weekData = Object(Object(data).data);
            this.myTotal = Object(data).message;
            loading.dismiss();

        });
    }

    toCash(){
        console.log("toCash click");
        this.navCtrl.push(MyRewardExchange,{total:this.myTotal})

    }
    // showWhat()
    // {
    //     let loading = this.loadingCtrl.create({
    //         content: 'Please wait...',
    //     });
    //     loading.present();
    //
    //     console.log(this.showType);
    //     if(this.showType == 'weekData'){
    //         this.reportDataService.getScanWeekList156().toPromise().then(data=>{
    //             console.log(data);
    //             this.weekData = Object(Object(data).data);
    //
    //             loading.dismiss();
    //
    //         });
    //
    //
    //     }
    //     else if(this.showType == 'todayData'){
    //         this.reportDataService.getScanDayList156().toPromise().then(data=>{
    //             console.log(data);
    //             this.dayData = Object(Object(data).data);
    //
    //             loading.dismiss();
    //
    //         });
    //     }
    // }

    goBack() {
        this.viewCtrl.dismiss();
    }
}