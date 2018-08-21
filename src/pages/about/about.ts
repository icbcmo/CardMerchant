import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ReportDataService} from "../../service/report-data.service";
import {DateFormatter} from "@angular/common/src/pipes/deprecated/intl";
import {LoadingController} from "ionic-angular";

declare let echarts;

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit{


    showType:any;
    @ViewChild('chart1') chart1: ElementRef;
    @ViewChild('chart2') chart2: ElementRef;

    start_n = 1;
    fetch_num = 20;
    DapaData =null;
    chart1Data = null;
    chart2Data = null;
    date1:any;
    date2:any;
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
    constructor(public reportDataService:ReportDataService,public loadingCtrl: LoadingController) {
        this.showType ='charts';
    }

    ngOnInit() {

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
        this.initChart1();
        this.initChart2();
    }

    showWhat(){
      console.log(this.showType);
      if(this.showType == 'charts'){

          this.initChart1()
          this.initChart2()
      }
      else if(this.showType == 'posData'){
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


  initChart1(){
      let myChart = echarts.init(this.chart1.nativeElement);

      // let loading = this.loadingCtrl.create({
      //     content: 'Please wait...',
      //     duration: 5000
      // });
      // loading.present();

      let data = {
          sessionid:localStorage.getItem("SESSIONID"),
          merchantid:localStorage.getItem("MERCHANTID"),
          departmentid:localStorage.getItem("DEPARTMENTID"),
          datestart:this.getyyyyMMdd(-7),
          dateend:this.getyyyyMMdd(0),
          start:1,
          fetchnum:99999999
      };

      // if("FIRSTCLASS"===localStorage.getItem('LEVEL')){
      //     this.reportDataService.getTrxInfoByMerchantId(data).toPromise().then(data=>{
      //         console.log(data);
      //         this.chart1Data = (Object(data).data)[0];
      //         let dateList=[];
      //         for(let i =0; i<this.chart1Data.length; i++){
      //             if(dateList.indexOf(this.chart1Data[i].txnDate)<0)
      //                 dateList.push(this.chart1Data[i].txnDate);
      //
      //             for(let j =0; j<dateList.length; j++){
      //
      //             }
      //
      //
      //         }
      //         loading.dismiss();
      //         console.log(this.DapaData);
      //     });
      // }
      // else if("SECONDCLASS" === localStorage.getItem('LEVEL')){
      //     this.reportDataService.getTrxInfoByDepartmentId(data).toPromise().then(data=>{
      //         console.log(data);
      //         this.DapaData = (Object(data).data)[0];
      //         loading.dismiss();
      //         console.log(this.DapaData);
      //     });
      // }
      let option = {
          title: {
              text: ''
          },
          tooltip: {},
          legend: {
              data:['销量']
          },
          xAxis: {
              data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
          }]
      };

      myChart.setOption(option);
  }


    initChart2(){
        let myChart = echarts.init(this.chart2.nativeElement);

        let option = {
            series: {
                type: 'pie',
                data: [{
                    name: 'A',
                    value: 10
                }, {
                    name: 'B',
                    value: 20
                }, {
                    name: 'C',
                    value: 30
                }]
            }
        };

        myChart.setOption(option);
    }

}
