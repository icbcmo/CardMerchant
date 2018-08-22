import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LoadingController,ViewController} from "ionic-angular";
import {ReportDataService} from "../../../../service/report-data.service";
declare var localStorage: any;

@Component({
    selector: 'my-reward',
    templateUrl: 'my-reward.html'
})

export class MyReward implements OnInit{
    showType = 'weekData';
    weekData =[];
    dayData =[];
    myWeekData:any;
    myDayData:any;

    constructor(public reportDataService:ReportDataService,public loadingCtrl: LoadingController
        ,public viewCtrl: ViewController){
        this.showType ='weekData';

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

            loading.dismiss();

        });
    }

    showWhat()
    {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        loading.present();

        console.log(this.showType);
        if(this.showType == 'weekData'){
            this.reportDataService.getScanWeekList156().toPromise().then(data=>{
                console.log(data);
                this.weekData = Object(Object(data).data);

                loading.dismiss();

            });


        }
        else if(this.showType == 'todayData'){
            this.reportDataService.getScanDayList156().toPromise().then(data=>{
                console.log(data);
                this.dayData = Object(Object(data).data);

                loading.dismiss();

            });
        }
    }

    goBack() {
        this.viewCtrl.dismiss();
    }
}