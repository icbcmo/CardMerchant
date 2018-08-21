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

      let loading = this.loadingCtrl.create({
          content: 'Please wait...',
          duration: 5000
      });
      loading.present();

      let data = {
          sessionid:localStorage.getItem("SESSIONID"),
          merchantid:localStorage.getItem("MERCHANTID"),
          departmentid:localStorage.getItem("DEPARTMENTID"),
          datestart:this.getyyyyMMdd(-1205),
          dateend:this.getyyyyMMdd(-1198),
          start:1,
          fetchnum:99999999
      };

      if("FIRSTCLASS"===localStorage.getItem('LEVEL')){
          this.reportDataService.getTrxInfoByMerchantId(data).toPromise().then(data=>{
              console.log(data);
              this.chart1Data = (Object(data).data)[0];
              this.chart1setOption(loading);
          });
      }
      else if("SECONDCLASS" === localStorage.getItem('LEVEL')){
          this.reportDataService.getTrxInfoByDepartmentId(data).toPromise().then(data=>{
              console.log(data);
              this.chart1Data = (Object(data).data)[0];
              this.chart1setOption(loading);
          });
      }

  }

  chart1setOption(loading){
      let myChart = echarts.init(this.chart1.nativeElement);
      let x_data=[];
      let y_data=[];
      let dateList=[];
      let totalList=[];
      for(let i =0; i<this.chart1Data.length; i++){

          if(dateList.indexOf(this.chart1Data[i].txnDate)<0){
              let date_total = {
                  "trxdate":this.chart1Data[i].txnDate,
                  "total":0
              }
              dateList.push(this.chart1Data[i].txnDate);
              totalList.push(date_total);
          }


          for(let j =0; j<totalList.length; j++){
              if(this.chart1Data[i].txnDate == totalList[j].trxdate){
                  totalList[j].total= totalList[j].total + (parseInt(this.chart1Data[i].txnAmount));
              }
          }
      }

      for( let x=0;x<totalList.length;x++){
          x_data.push(totalList[x].trxdate);
          y_data.push((parseInt(totalList[x].total)/100).toFixed(2));
      }
      console.log(x_data);
      console.log(y_data);
      console.log(this.chart1Data);
      console.log(dateList);

      loading.dismiss();

      let option = {
          title: {
              text: ''
          },
          tooltip: {},
          legend: {
              data:['销售额']
          },
          xAxis: {
              data: x_data,
              axisLabel: {
                  interval:0,
                  rotate:90
              }
          },

          grid: {

              bottom:'35%'
          },
          yAxis: {},
          series: [{
              name: '销售额',
              type: 'bar',
              data: y_data
          }],

      };



      myChart.on('click', (param)=> {
          console.log(param);
          this.chart2setOption(loading,param.name);

      });



      myChart.setOption(option);
  }

  initChart2(){

        let loading = this.loadingCtrl.create({
            content: 'Please wait...',
            duration: 5000
        });
        loading.present();

        let data = {
            sessionid:localStorage.getItem("SESSIONID"),
            merchantid:localStorage.getItem("MERCHANTID"),
            departmentid:localStorage.getItem("DEPARTMENTID"),
            datestart:this.getyyyyMMdd(-1205),
            dateend:this.getyyyyMMdd(-1198),
            start:1,
            fetchnum:99999999
        };

        if("FIRSTCLASS"===localStorage.getItem('LEVEL')){
            this.reportDataService.getTrxInfoByMerchantId(data).toPromise().then(data=>{
                console.log(data);
                this.chart2Data = (Object(data).data)[0];
                this.chart2setOption(loading,"");
            });
        }
        else if("SECONDCLASS" === localStorage.getItem('LEVEL')){
            this.reportDataService.getTrxInfoByDepartmentId(data).toPromise().then(data=>{
                console.log(data);
                this.chart2Data = (Object(data).data)[0];
                this.chart2setOption(loading,"");
            });
        }


    }

    chart2setOption(loading,mytrxdate){
        console.log(this.chart2Data);
        let myChart = echarts.init(this.chart2.nativeElement);
        let departmantList=[];
        let totalList=[];
        let tmp=[];
        let title="各分店近7天总销售情况"

        if(mytrxdate != ""){
            for(let i =0; i<this.chart2Data.length; i++){
                if(this.chart2Data[i].txnDate == mytrxdate)
                    tmp.push(this.chart2Data[i]);
            }
            title = mytrxdate+":各分店销售情况";
        }
        else{
            tmp = this.chart2Data;
        }

        for(let i =0; i<tmp.length; i++){

            if(departmantList.indexOf(tmp[i].departmentName)<0){
                let department_total = {
                    "name":tmp[i].departmentName,
                    "value":0
                }
                departmantList.push(tmp[i].departmentName);
                totalList.push(department_total);
            }


            for(let j =0; j<totalList.length; j++){
                if(tmp[i].departmentName == totalList[j].name){
                    totalList[j].value= totalList[j].value + (parseInt(tmp[i].txnAmount)/100).toFixed(2);
                }
            }
        }


        console.log(tmp);
        console.log(departmantList);
        console.log(totalList);

        loading.dismiss();
        let option = {
            title:{
                left: 'center',
                top: 20,
                text: title
            },

            series: {
                name:'',
                type: 'pie',
                data: totalList,
                radius: ['70%', '90%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                        //formatter: "{a} :{b} \n销售总金额: {c} ({d}%)"
                        formatter: "{b} \n 销售金额:{c}\n 占比:{d}%"
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '15',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                }
            }

        };

        myChart.setOption(option);
    }

}
