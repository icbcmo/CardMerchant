import {Component, ElementRef, OnInit, ViewChild, Renderer2} from '@angular/core';
import {LoadingController, NavController, ViewController, AlertController, ModalController} from "ionic-angular";
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {ReportDataService} from "../../../../service/report-data.service";
import {MyRewardExchange} from "./my-reward-exchange";
import {CardMerchantService} from "../../../../service/card-merchant.service";
import {SigninPage} from "../../../auth/signin";
declare var localStorage: any;

@Component({
    selector: 'my-reward',
    templateUrl: 'my-reward.html'
})

export class MyReward implements OnInit{
    showType = 'weekData';
    weekData =[];
    dayData =[];
    myData = [];
    myTotal = 0;
    canExchangeMaxPoints=0;
    myWeekData:any;
    myDayData:any;


    //待入賬-1；已入賬-2
    constructor(public reportDataService:ReportDataService,
                public loadingCtrl: LoadingController,
                public viewCtrl: ViewController,
                public navCtrl: NavController,
                public alertCtrl: AlertController,
                public cardMerchantService:CardMerchantService,
                public modalCtrl: ModalController,
                public element: ElementRef,
                public renderer2: Renderer2,
                private iab: InAppBrowser
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

        /*this.reportDataService.getScanWeekList156().toPromise().then(data=>{
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


        });*/

        this.reportDataService.getPointsUsage().toPromise().then(data=>{
            console.log(data);
            if(Object(data).code == "1"){
                localStorage.clear();
                let modal = this.modalCtrl.create(SigninPage);
                modal.present();
            }
            this.myData = Object(Object(data).data);
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

    toCash(){
        console.log("toCash click");
        //this.navCtrl.push(MyRewardExchange,{total:this.myTotal})
        this.canExchangeMaxPoints=(parseInt((this.myTotal/10).toString()))*10;
        let msg = "是否兌換"+this.canExchangeMaxPoints.toString()+"積分？";
            const prompt = this.alertCtrl.create({
                title: '兌換',
                message: msg+`<span>申請信用卡</span>`,
                cssClass: 'my-reward-alert',
                inputs: [
                    {
                        name: 'cardno',
                        placeholder: '金沙聯名信用卡卡號'
                    }
                ],
                buttons: [
                    {
                        text: '取消',
                        handler: data => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: '兌換',
                        handler: data => {
                            console.log('Saved clicked');
                            console.log(data);
                            this.doExchangeToCash(this.canExchangeMaxPoints.toString(),data.cardno);

                        }
                    }
                ]
            });
            prompt.present();
            setTimeout(()=>{
                let ele = document.body.querySelector(".my-reward-alert .alert-message span");
                this.renderer2.listen(ele,"click",()=> {
                    this.toCreditCard();
                })
            },0);
    }

    toCreditCard(){
        const browser = this.iab.create('https://cardstyle.icbc.com.mo/#/sub-fun/creditapply', '_blank', 'location=yes');
        browser.show();
    }

    doExchangeToCash(points:any,cardno:any) {

        console.log(points);
        console.log(cardno);
        this.cardMerchantService.newPointsToMoney(cardno.toString(),points.toString()).toPromise().then(data=>{
            console.log(data);
            if(Object(data).code == "1"){
                localStorage.clear();
                let modal = this.modalCtrl.create(SigninPage);
                modal.present();
            }
            if(Object(data).code == "0"){
                let loading = this.loadingCtrl.create({
                    content: '兌換成功',
                });
                loading.present();

                this.reportDataService.getCashier157().toPromise().then(data=>{
                    console.log(data);
                    //this.myTotal = Object(data).message;
                    this.myTotal = Object(Object(data).data)[0].field8;

                    loading.dismiss();

                });
            }
        })
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