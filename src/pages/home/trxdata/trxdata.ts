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

    wechat_start_n = 1;
    wechat_fetch_num = 20;

    DapaData =null;
    WechatData = null;

    date1:any;
    date2:any;
    cpuClick = true;
    visaClick = false;
    masterClick = false;

    tradeDate1: any;
    tradeDate2: any;

    tradeDate1_wechat: any;
    tradeDate2_wechat: any;

    filteramount: any ;
    filteramount_wechat: any ;
    filtertrxno: any ;
    filterwechattrxno: any ;
    filterrefno: any ;

    cpuSelect(){
        this.cpuClick = this.cpuClick?false:true;
    }
    visaSelect(){
        this.visaClick = this.visaClick?false:true;
    }
    masterSelect(){
        this.masterClick = this.masterClick?false:true;
    }

    doFilter(){
        //console.log(this.filteramount);
        //console.log(this.filteramount_wechat);
        //console.log(this.filtertrxno);
        //console.log(this.tradeDate1);
        //console.log(this.tradeDate2);
        //console.log(this.cpuClick);
        //console.log(this.visaClick);
        //console.log(this.masterClick);
        //console.log(this.filterwechattrxno);
        //console.log(this.filterrefno);

        let channelType = "undefined";
        if(this.cpuClick) channelType="CUP";
        else if(this.visaClick) channelType="Visa";
        else if(this.masterClick) channelType="Master";

        if(this.showType =='posData'){

            let loading = this.loadingCtrl.create({
                content: 'Please wait...',
                duration: 5000
            });
            loading.present();

            let data = {
                sessionId:localStorage.getItem("SESSIONID"),
                datestart:this.tradeDate1.replace(/-/g,""),
                dateend:this.tradeDate2.replace(/-/g,""),
                start:this.start_n,
                fetchnum:this.fetch_num,
                transactionAmount:(this.filteramount==""||this.filtertrxno == undefined?"undefined":this.filteramount),
                transactionChannel:channelType,
                transactionRef:(this.filtertrxno==""||this.filtertrxno == undefined?"undefined":this.filtertrxno)
            };

            this.reportDataService.getTrxRecordByDepartmentIdTransactionConditions(data).toPromise().then(data=>{
                //console.log(data);
                this.DapaData = (Object(data).data)[0];
                loading.dismiss();
                //console.log(this.DapaData);
            });
        }

        if(this.showType =='wechatData'){
            let loading = this.loadingCtrl.create({
                content: 'Please wait...',
                duration: 5000
            });
            loading.present();
            let data = {
                sessionid:localStorage.getItem("SESSIONID"),
                merchantid:localStorage.getItem("WECHATMERCHANTID"),
                datestart:this.tradeDate1_wechat.replace(/-/g,""),
                dateend:this.tradeDate2_wechat.replace(/-/g,""),
                ref:(this.filterrefno=="" || this.filterrefno == undefined)?"undefined":this.filterrefno,
                amount:(this.filteramount_wechat=="" || this.filteramount_wechat == undefined)?"undefined":this.filteramount_wechat,
                startnum:this.wechat_start_n,
                fetchnum:this.wechat_fetch_num
            };
            //console.log(data);
            this.reportDataService.getWechatTrxInfoByConditionsAndPages(data).toPromise().then(data=>{
                //console.log(data);
                this.WechatData = (Object(data).data)[0];
                loading.dismiss();
                //console.log(this.WechatData);
            });
        }
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
        this.tradeDate1_wechat = BaseDate.getDateNow();
        this.tradeDate2_wechat = BaseDate.getDateNow();
    }

    goBack() {
        this.viewCtrl.dismiss();
    }

    doInfinite(infiniteScroll) {
        //console.log('Begin async operation');
        if(this.showType == 'posData')
        {
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
                    //console.log(data);
                    //this.DapaData = this.DapaData.addAll((Object(data).data)[0]);
                    this.DapaData = this.DapaData.concat((Object(data).data)[0]);
                    infiniteScroll.complete();

                    //console.log(this.DapaData);
                });
            }
            else if("SECONDCLASS" === localStorage.getItem('LEVEL')){
                this.reportDataService.getTrxInfoByDepartmentId(data).toPromise().then(data=>{
                    //console.log(data);
                    this.DapaData = this.DapaData.concat((Object(data).data)[0]);
                    infiniteScroll.complete();

                    //console.log(this.DapaData);
                });
            }
        }

        if(this.showType == 'wechatData')
        {
            this.wechat_start_n = this.wechat_start_n + this.wechat_fetch_num;
            let data = {
                sessionid:localStorage.getItem("SESSIONID"),
                merchantid:localStorage.getItem("WECHATMERCHANTID"),
                datestart:this.date2,
                dateend:this.date1,
                ref:this.filterrefno==""?"undefined":this.filterrefno,
                amount:this.filteramount_wechat==""?"undefined":this.filteramount_wechat,
                startnum:this.wechat_start_n,
                fetchnum:this.wechat_fetch_num
            };
            this.reportDataService.getWechatTrxInfoByConditionsAndPages(data).toPromise().then(data=>{
                //console.log(data);
                this.WechatData = this.WechatData.concat((Object(data).data)[0]);
                infiniteScroll.complete();
                //console.log(this.WechatData);
            });
        }

        //console.log('Async operation has ended');


    }

    ionViewDidEnter() {
        this.showWhat();
    }

    showWhat(){
        //console.log(this.showType);
        if(this.showType == 'posData'){
            if(this.DapaData  === null || this.DapaData ==="" || this.DapaData === undefined ){
                let loading = this.loadingCtrl.create({
                    content: 'Please wait...',
                    duration: 5000
                });
                loading.present();

                this.date1 = this.getyyyyMMdd(0);
                this.date2 = this.getyyyyMMdd(-7);

                let data = {
                    sessionid:localStorage.getItem("SESSIONID"),
                    merchantid:localStorage.getItem("MERCHANTID"),
                    departmentid:localStorage.getItem("DEPARTMENTID"),
                    datestart:this.date2,
                    dateend:this.date1,
                    start:this.start_n,
                    fetchnum:this.fetch_num
                };

                this.reportDataService.getTrxInfoByDepartmentId(data).toPromise().then(data=>{
                    //console.log(data);
                    this.DapaData = (Object(data).data)[0];
                    loading.dismiss();
                    //console.log(this.DapaData);
                });

                /*if("FIRSTCLASS"===localStorage.getItem('LEVEL')){
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
                }*/
            }
        }
        if(this.showType == 'wechatData'){
            if(this.WechatData  === null || this.WechatData ==="" || this.WechatData === undefined ){
                let loading = this.loadingCtrl.create({
                    content: 'Please wait...',
                    duration: 5000
                });
                loading.present();

                this.date1 = this.getyyyyMMdd(0);
                this.date2 = this.getyyyyMMdd(-7);

                let data = {
                    sessionid:localStorage.getItem("SESSIONID"),
                    merchantid:localStorage.getItem("WECHATMERCHANTID"),
                    datestart:this.date2,
                    dateend:this.date1,
                    ref:(this.filterrefno=="" || this.filterrefno == undefined)?"undefined":this.filterrefno,
                    amount:(this.filteramount_wechat=="" || this.filteramount_wechat == undefined)?"undefined":this.filteramount_wechat,
                    startnum:this.wechat_start_n,
                    fetchnum:this.wechat_fetch_num
                };
                //console.log(data);
                // this.reportDataService.getWechatTrxInfoByConditions(data).toPromise().then(data=>{
                this.reportDataService.getWechatTrxInfoByConditionsAndPages(data).toPromise().then(data=>{
                    //console.log(data);
                    this.WechatData = (Object(data).data)[0];
                    loading.dismiss();
                    //console.log(this.WechatData);
                });
            }
        }
    }





}
