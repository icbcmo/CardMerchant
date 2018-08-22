import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LoadingController} from "ionic-angular";
import {ReportDataService} from "../../../../service/report-data.service";

@Component({
    selector: 'reward-ranking',
    templateUrl: 'reward-ranking.html'
})

export class RewardRanking implements OnInit{
    showType = 'weekData';
    weekData =[];
    dayData =[];
    constructor(public reportDataService:ReportDataService,public loadingCtrl: LoadingController){
        this.showType ='weekData';

    }
    ngOnInit()
    {
        this.reportDataService.getScanWeekRanking156().toPromise().then(data=>{
                    console.log(data);
                    this.weekData = Object(Object(data).data);
                });
    }

    showWhat(){
        console.log(this.showType);
        if(this.showType == 'weekData'){
            this.reportDataService.getScanWeekRanking156().toPromise().then(data=>{
                console.log(data);
                this.weekData = Object(Object(data).data);
            });

        }
        else if(this.showType == 'todayData'){
            this.reportDataService.getScanDayRanking156().toPromise().then(data=>{
                console.log(data);
                this.dayData = Object(Object(data).data);
            });
        }
    }
}