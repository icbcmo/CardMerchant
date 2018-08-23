import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LoadingController, NavController, ViewController, AlertController, ModalController} from "ionic-angular";
import {ReportDataService} from "../../../../service/report-data.service";
import {CardMerchantService} from "../../../../service/card-merchant.service";
import {SigninPage} from "../../../auth/signin";
declare var localStorage: any;

@Component({
    selector: 'scan-record',
    templateUrl: 'scan-record.html'
})

export class ScanRecord implements OnInit{
    showType = 'weekData';
    weekData =[];
    dayData =[];
    myTotal = 0;
    canExchangeMaxPoints=0;
    myWeekData:any;
    myDayData:any;

    constructor(public reportDataService:ReportDataService,
                public loadingCtrl: LoadingController,
                public viewCtrl: ViewController,
                public navCtrl: NavController,
                public alertCtrl: AlertController,
                public cardMerchantService:CardMerchantService,
                public modalCtrl: ModalController
    ){
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
            if(Object(data).code == "1"){
                localStorage.clear();
                let modal = this.modalCtrl.create(SigninPage);
                modal.present();
            }
            this.weekData = Object(Object(data).data);
            //this.myTotal = Object(data).message;
            this.reportDataService.getCashier157().toPromise().then( data=>{
                console.log(data);
                this.myTotal = Object(Object(data).data)[0].field8;
                loading.dismiss();
            })


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

    }

    goBack() {
        this.viewCtrl.dismiss();
    }
}