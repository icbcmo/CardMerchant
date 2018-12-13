import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LoadingController, ModalController, ViewController} from "ionic-angular";
import {ReportDataService} from "../../../../service/report-data.service";
import {SigninPage} from "../../../auth/signin";
declare var localStorage: any;

@Component({
    selector: 'reward-ranking',
    templateUrl: 'reward-ranking.html'
})

export class RewardRanking implements OnInit{
    showType = 'todayData';
    weekData =[];
    dayData =[];
    myWeekData:any;
    myDayData:any;

    constructor(public reportDataService:ReportDataService,
                public loadingCtrl: LoadingController,
                public viewCtrl: ViewController,
                public modalCtrl: ModalController)
    {
        this.showType ='todayData';

    }
    ngOnInit()
    {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        loading.present();

        this.reportDataService.getScanDayRanking156().toPromise().then(data=>{
            //console.log(data);
            if(Object(data).code == "1"){
                localStorage.clear();
                let modal = this.modalCtrl.create(SigninPage);
                modal.present();
            }
            this.dayData = Object(Object(data).data);
            for(let i=0 ;i<this.dayData.length;i++)
            {
                if(this.dayData[i].MOBILE == localStorage.getItem("MOBILE"))
                {
                    this.myDayData = this.dayData[i];
                }
            }
            loading.dismiss();

        });
    }

    showWhat()
    {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...',
        });
        loading.present();

        //console.log(this.showType);
        if(this.showType == 'weekData'){
            this.reportDataService.getScanWeekRanking156().toPromise().then(data=>{
                //console.log(data);
                if(Object(data).code == "1"){
                    localStorage.clear();
                    let modal = this.modalCtrl.create(SigninPage);
                    modal.present();
                }
                this.weekData = Object(Object(data).data);
                for(let i=0 ;i<this.weekData.length;i++)
                {
                    if(this.weekData[i].MOBILE == localStorage.getItem("MOBILE"))
                    {
                        this.myWeekData = this.weekData[i];
                    }
                }
                loading.dismiss();

            });


        }
        else if(this.showType == 'todayData'){
            this.reportDataService.getScanDayRanking156().toPromise().then(data=>{
                //console.log(data);
                if(Object(data).code == "1"){
                    localStorage.clear();
                    let modal = this.modalCtrl.create(SigninPage);
                    modal.present();
                }
                this.dayData = Object(Object(data).data);
                for(let i=0 ;i<this.dayData.length;i++)
                {
                    if(this.dayData[i].MOBILE == localStorage.getItem("MOBILE"))
                    {
                        this.myDayData = this.dayData[i];
                    }
                }
                loading.dismiss();

            });
        }
    }

    goBack() {
        this.viewCtrl.dismiss();
    }
}