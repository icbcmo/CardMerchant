import {Component, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import {sha256, sha224} from 'js-sha256';
import jsrsasign from 'jsrsasign';
import { environment as ENV } from '../environments/environment';

@Injectable()
export class ReportDataService {
    constructor(private http: HttpClient) {
    }

    private privateKey = ENV.privateKey;
    private publicKey = ENV.publicKey;
    private gwUrl = ENV.gwUrl;

    private httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
        //headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })
        //headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
    };

    getSignInit(str: any): any {

        let rsa = jsrsasign.KEYUTIL.getKey(this.privateKey);
        let sig = new jsrsasign.KJUR.crypto.Signature({"alg": "SHA256withRSA"});
        sig.init(rsa);

        sig.updateString(str);

        let sign = jsrsasign.hextob64(sig.sign());
        sign = encodeURIComponent(sign);
        return sign;
    }


    getWechatTrxInfoByConditions(data) {

        let str = "amount=" + data.amount
            + "&date_end_yyyymmdd=" + data.dateend
            + "&date_start_yyyymmdd=" + data.datestart
            + "&merchantid=" + data.merchantid
            + "&ref=" + data.ref
            + "&sessionid=" + data.sessionid;
        let sign = this.getSignInit(str);
        let merCert = encodeURIComponent(this.publicKey);
        let url = this.gwUrl + 'cardmerchant/getwechatdatabyconditions?' + str + '&sign=' + sign + '&merCert=' + merCert;
        console.log(url);
        return this.http.get(url);
    }

    getWechatTrxInfoByConditionsAndPages(data) {

        let str = "amount=" + data.amount
            + "&date_end_yyyymmdd=" + data.dateend
            + "&date_start_yyyymmdd=" + data.datestart
            + "&fetchnum=" + data.fetchnum
            + "&merchantid=" + data.merchantid
            + "&ref=" + data.ref
            + "&sessionid=" + data.sessionid
            + "&startnum=" + data.startnum;
        let sign = this.getSignInit(str);
        let merCert = encodeURIComponent(this.publicKey);
        let url = this.gwUrl + 'cardmerchant/getwechatdatabyconditionsandpages?' + str + '&sign=' + sign + '&merCert=' + merCert;
        console.log(url);
        return this.http.get(url);
    }

    getTrxInfoByMerchantId(data) {
        let str = "dateend=" + data.dateend
            + "&datestart=" + data.datestart
            + "&fetchnum=" + data.fetchnum
            + "&merchantid=" + data.merchantid
            + "&sessionid=" + data.sessionid
            + "&start=" + data.start;
        let sign = this.getSignInit(str);
        let merCert = encodeURIComponent(this.publicKey);
        let url = this.gwUrl + 'cardmerchant/getTrxInfoByMerchantId?' + str + '&sign=' + sign + '&merCert=' + merCert;
        console.log(url);
        return this.http.get(url);
    }

    getTrxInfoByDepartmentId(data) {
        let str = "dateend=" + data.dateend
            + "&datestart=" + data.datestart
            + "&departmentid=" + data.departmentid
            + "&fetchnum=" + data.fetchnum
            + "&sessionid=" + data.sessionid
            + "&start=" + data.start;
        let sign = this.getSignInit(str);
        let merCert = encodeURIComponent(this.publicKey);
        let url = this.gwUrl + 'cardmerchant/getTrxInfoByDepartmentId?' + str + '&sign=' + sign + '&merCert=' + merCert;
        console.log(url);
        return this.http.get(url);
    }

    getScanWeekRanking156() {
        let str = "sessionid=" + localStorage.getItem('SESSIONID');
        let sign = this.getSignInit(str);
        let merCert = encodeURIComponent(this.publicKey);
        let url = this.gwUrl + 'cardmerchant/getscanweekranking180?' + str + '&sign=' + sign + '&merCert=' + merCert;
        console.log(url);
        return this.http.get(url);
    }

    getScanDayRanking156() {
        let str = "sessionid=" + localStorage.getItem('SESSIONID');
        let sign = this.getSignInit(str);
        let merCert = encodeURIComponent(this.publicKey);
        let url = this.gwUrl + 'cardmerchant/getscandayranking180?' + str + '&sign=' + sign + '&merCert=' + merCert;
        console.log(url);
        return this.http.get(url);
    }


    getScanWeekList156() {
        let str = "sessionid=" + localStorage.getItem('SESSIONID');
        let sign = this.getSignInit(str);
        let merCert = encodeURIComponent(this.publicKey);
        let url = this.gwUrl + 'cardmerchant/getscanweeklist180?' + str + '&sign=' + sign + '&merCert=' + merCert;
        console.log(url);
        return this.http.get(url);
    }

    getScanDayList156() {
        let str = "sessionid=" + localStorage.getItem('SESSIONID');
        let sign = this.getSignInit(str);
        let merCert = encodeURIComponent(this.publicKey);
        let url = this.gwUrl + 'cardmerchant/getscandaylist180?' + str + '&sign=' + sign + '&merCert=' + merCert;
        console.log(url);
        return this.http.get(url);
    }

    getCashier157() {
        let str = "sessionid=" + localStorage.getItem('SESSIONID');
        let sign = this.getSignInit(str);
        let merCert = encodeURIComponent(this.publicKey);
        let url = this.gwUrl + 'cardmerchant/getcashierinfo157?' + str + '&sign=' + sign + '&merCert=' + merCert;
        console.log(url);
        return this.http.get(url);
    }

    getPointsUsage() {
        let str = "sessionid=" + localStorage.getItem('SESSIONID');
        let sign = this.getSignInit(str);
        let merCert = encodeURIComponent(this.publicKey);
        let url = this.gwUrl + 'cardmerchant/getpointsusage?' + str + '&sign=' + sign + '&merCert=' + merCert;
        console.log(url);
        return this.http.get(url);
    }

    getTrxRecordByDepartmentIdTransactionConditions(data) {


        let str = "dateEnd=" + data.dateend
            + "&dateStart=" + data.datestart
            + "&fetchNum=" + data.fetchnum
            + "&sessionId=" + data.sessionId
            + "&start=" + data.start
            + "&transactionAmount=" + data.transactionAmount
            + "&transactionChannel=" + data.transactionChannel
            + "&transactionRef=" + data.transactionRef
        ;
        let sign = this.getSignInit(str);
        let merCert = encodeURIComponent(this.publicKey);
        let url = this.gwUrl + 'cardmerchant/inqbytrxconditions?' + str + '&sign=' + sign + '&merCert=' + merCert;
        console.log(url);
        return this.http.get(url);
    }

}