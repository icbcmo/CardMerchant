import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DateFormatter} from "@angular/common/src/pipes/deprecated/intl";
import {LoadingController, ModalController, ViewController, MenuController} from "ionic-angular";
import {ReportDataService} from "../../../service/report-data.service";
import {SigninPage} from "../../auth/signin";
import {BaseDate} from "../../../service/BaseDate.service";

declare let echarts;
declare var localStorage: any;

@Component({
    selector: 'page-trxdata',
    templateUrl: 'trxdata.html'
})
export class Trxdata implements OnInit{


    showType:any;
    activeMenu: string;

    start_n = 1;
    fetch_num = 20;
    DapaData =null;
    chart1Data = null;
    chart2Data = null;
    date1:any;
    date2:any;
    cpuClick = true;
    visaClick = false;
    masterClick = false;

    tradeDate1: any;
    tradeDate2: any;

    cpuSelect(){
        this.cpuClick = this.cpuClick?false:true;
    }
    visaSelect(){
        this.visaClick = this.visaClick?false:true;
    }
    masterSelect(){
        this.masterClick = this.masterClick?false:true;
    }

    doFilter(eee){
        console.log(eee);
        console.log(this.tradeDate1);
        console.log(this.tradeDate2);
        console.log(this.cpuClick);
        console.log(this.visaClick);
        console.log(this.masterClick);
    }

    getyyyyMMdd(n){
        var d = new Date();
        d.setDate(d.getDate()+n);
        var curr_date = d.getDate().toString();
        var curr_month = (d.getMonth() + 1).toString();
        var curr_year = (d.getFullYear()).toString();
        curr_month = ("0"+curr_month).substr(-2);
        curr_date = ("0"+curr_date).substr(-2);
        var yyyyMMdd = curr_year + "" + curr_month +""+ curr_date;
        return yyyyMMdd;
    }
    constructor(public reportDataService:ReportDataService,
                public loadingCtrl: LoadingController,
                public modalCtrl: ModalController,
                public viewCtrl: ViewController,
                public menu: MenuController) {
        this.showType ='posData';
        this.activeMenu = 'filterMenu';
        this.menu.enable(true, 'filterMenu');
    }

    ngOnInit() {
        this.tradeDate1 = BaseDate.getDateNow();
        this.tradeDate2 = BaseDate.getDateNow();
    }

    goBack() {
        this.viewCtrl.dismiss();
    }

    doInfinite(infiniteScroll) {
        console.log('Begin async operation');
        this.start_n = this.start_n + this.fetch_num;
        let data = {
            sessionid:localStorage.getItem("SESSIONID"),
            merchantid:localStorage.getItem("MERCHANTID"),
            departmentid:localStorage.getItem("DEPARTMENTID"),
            datestart:this.date2,
            dateend:this.date1,
            start:this.start_n,
            fetchnum:this.fetch_num
        };

        if("FIRSTCLASS"===localStorage.getItem('LEVEL')){
            this.reportDataService.getTrxInfoByMerchantId(data).toPromise().then(data=>{
                if(Object(data).code ==1){
                    localStorage.clear();
                    let modal = this.modalCtrl.create(SigninPage);
                    modal.present();
                }
                console.log(data);
                //this.DapaData = this.DapaData.addAll((Object(data).data)[0]);

                this.DapaData = this.DapaData.concat((Object(data).data)[0]);
                infiniteScroll.complete();

                console.log(this.DapaData);
            });
        }
        else if("SECONDCLASS" === localStorage.getItem('LEVEL')){
            this.reportDataService.getTrxInfoByDepartmentId(data).toPromise().then(data=>{
                console.log(data);
                //this.DapaData = (Object(data).data)[0];
                this.DapaData = this.DapaData.addAll((Object(data).data)[0]);
                infiniteScroll.complete();

                console.log(this.DapaData);
            });
        }

        console.log('Async operation has ended');


    }
    // ionViewWillEnter(){
    //   console.log("ionViewWillEnter")
    //   this.showType ='charts';
    //   this.initChart1()
    //   this.initChart2()
    //
    //
    // }

    ionViewDidEnter() {
        this.showWhat();
    }

    showWhat(){
        console.log(this.showType);
        if(this.showType == 'posData'){
            if(this.DapaData  === null || this.DapaData ==="" || this.DapaData === undefined ){
                let loading = this.loadingCtrl.create({
                    content: 'Please wait...',
                    //duration: 5000
                });
                loading.present();

                this.date1 = this.getyyyyMMdd(0);
                this.date2 = this.getyyyyMMdd(-2000);



                let data = {
                    sessionid:localStorage.getItem("SESSIONID"),
                    merchantid:localStorage.getItem("MERCHANTID"),
                    departmentid:localStorage.getItem("DEPARTMENTID"),
                    datestart:this.date2,
                    dateend:this.date1,
                    start:this.start_n,
                    fetchnum:this.fetch_num
                };

                if("FIRSTCLASS"===localStorage.getItem('LEVEL')){
                    this.reportDataService.getTrxInfoByMerchantId(data).toPromise().then(data=>{
                        console.log(data);
                        this.DapaData = (Object(data).data)[0];
                        loading.dismiss();
                        console.log(this.DapaData);
                    });
                }
                else if("SECONDCLASS" === localStorage.getItem('LEVEL')){
                    this.reportDataService.getTrxInfoByDepartmentId(data).toPromise().then(data=>{
                        console.log(data);
                        this.DapaData = (Object(data).data)[0];
                        loading.dismiss();
                        console.log(this.DapaData);
                    });
                }
            }
        }
    }





}
