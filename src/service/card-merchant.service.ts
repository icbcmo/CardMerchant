import { Component, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import "rxjs/add/operator/toPromise";
import { sha256, sha224 } from "js-sha256";
import jsrsasign from "jsrsasign";
import { environment as ENV } from "../environments/environment";

@Injectable()
export class CardMerchantService {
  constructor(private http: HttpClient) {
  }

  private gwUrl = ENV.gwUrl;
  private privateKey = ENV.privateKey;
  private publicKey = ENV.publicKey;

  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" })
    //headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })
    //headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };

  getSignInit(str: any): any {

    let rsa = jsrsasign.KEYUTIL.getKey(this.privateKey);
    let sig = new jsrsasign.KJUR.crypto.Signature({ "alg": "SHA256withRSA" });
    sig.init(rsa);

    sig.updateString(str);

    let sign = jsrsasign.hextob64(sig.sign());
    sign = encodeURIComponent(sign);
    return sign;
  }

  checkLoginSession(sessionid) {
    let str = "sessionId=" + sessionid;

    let sign = this.getSignInit(str);
    let merCert = encodeURIComponent(this.publicKey);

    let url = this.gwUrl + "cardmerchant/getsessionContent" + "?" + str + "&"
      + "sign=" + sign + "&merCert=" + merCert;
    //console.log(url);

    return this.http.get(url);
  }


  scancoupon(data) {
    let str = JSON.stringify(data);
    let sign = this.getSignInit(str);
    let merCert = encodeURIComponent(this.publicKey);
    let url = this.gwUrl + "cardmerchant/eshopgetproductcode" + "?sign=" + sign + "&merCert=" + merCert;
    //console.log(url);

    return this.http.post(url, data);
  }


  addUser(data) {
    let str = JSON.stringify(data);
    let sign = this.getSignInit(str);
    let merCert = encodeURIComponent(this.publicKey);
    let url = this.gwUrl + "cardmerchant/addseconduser" + "?sign=" + sign + "&merCert=" + merCert;
    //console.log(url);

    return this.http.post(url, data);
  }

  deleteseconduser(data) {
    let str = JSON.stringify(data);
    let sign = this.getSignInit(str);
    let merCert = encodeURIComponent(this.publicKey);
    let url = this.gwUrl + "cardmerchant/deleteseconduser" + "?sign=" + sign + "&merCert=" + merCert;
    //console.log(url);

    return this.http.post(url, data);
  }

  //审批
  approverequest(data) {
    let str = JSON.stringify(data);
    let sign = this.getSignInit(str);
    let merCert = encodeURIComponent(this.publicKey);
    let url = this.gwUrl + "cardmerchant/approverequest" + "?sign=" + sign + "&merCert=" + merCert;
    //console.log(url);

    return this.http.post(url, data);
  }

  //否決
  deleterequest(data) {
    let str = JSON.stringify(data);
    let sign = this.getSignInit(str);
    let merCert = encodeURIComponent(this.publicKey);
    let url = this.gwUrl + "cardmerchant/deleterequest" + "?sign=" + sign + "&merCert=" + merCert;
    //console.log(url);

    return this.http.post(url, data);
  }

  getShopList(data) {
    let str = "merchantId=" + data.merchantId + "&sessionId=" + data.sessionId;
    let sign = this.getSignInit(str);
    let merCert = encodeURIComponent(this.publicKey);
    let url = this.gwUrl + "cardmerchant/getMerchantInfoByMerchantId?" + str + "&sign=" + sign + "&merCert=" + merCert;
    //console.log(url);

    return this.http.get(url);
  }

  getrequestlist(data) {
    let str = "field1=" + data.field1 + "&sessionid=" + data.sessionid;
    let sign = this.getSignInit(str);
    let merCert = encodeURIComponent(this.publicKey);
    let url = this.gwUrl + "cardmerchant/getrequestlist?" + str + "&sign=" + sign + "&merCert=" + merCert;
    //console.log(url);

    return this.http.get(url);
  }

  addrefund(data) {
    let str = JSON.stringify(data);
    let sign = this.getSignInit(str);
    let merCert = encodeURIComponent(this.publicKey);
    let url = this.gwUrl + "cardmerchant/addrefund" + "?sign=" + sign + "&merCert=" + merCert;
    //console.log(url);

    return this.http.post(url, data);
  }

  addwechatrefund(data) {
    let str = JSON.stringify(data);
    let sign = this.getSignInit(str);
    let merCert = encodeURIComponent(this.publicKey);
    let url = this.gwUrl + "cardmerchant/addwechatrefund" + "?sign=" + sign + "&merCert=" + merCert;
    //console.log(url);

    return this.http.post(url, data);
  }

  addmachinerequest(data) {
    let str = JSON.stringify(data);
    let sign = this.getSignInit(str);
    let merCert = encodeURIComponent(this.publicKey);
    let url = this.gwUrl + "cardmerchant/addmachinerequest" + "?sign=" + sign + "&merCert=" + merCert;
    //console.log(url);

    return this.http.post(url, data);
  }


  sendVerifyCode_rsa(mobile: any) {

    let data = {
      "mobile": mobile
    };

    let str = JSON.stringify(data);
    //console.log("str:" ,str);

    let sign = this.getSignInit(str);
    let merCert = encodeURIComponent(this.publicKey);

    let url = this.gwUrl + "cardmerchant/sendverifycode"
      + "?sign=" + sign + "&merCert=" + merCert;
    //console.log(url);

    return this.http.post(url, data, this.httpOptions);
  }

  checkVerifyCode_rsa(mobile: any, verifycode: any) {

    let data = {
      "mobile": mobile,
      "verifycode": verifycode
    };

    let str = JSON.stringify(data);
    //console.log("str:" ,str);

    let sign = this.getSignInit(str);
    let merCert = encodeURIComponent(this.publicKey);

    let url = this.gwUrl + "cardmerchant/checkverifycode"
      + "?sign=" + sign + "&merCert=" + merCert;
    //console.log(url);

    return this.http.post(url, data, this.httpOptions);
  }

  getSecondUsers(sessionid: any) {

    let str = "sessionId=" + sessionid;

    let sign = this.getSignInit(str);
    let merCert = encodeURIComponent(this.publicKey);

    let url = this.gwUrl + "cardmerchant/getseconduser" + "?" + str + "&"
      + "sign=" + sign + "&merCert=" + merCert;
    //console.log(url);

    return this.http.get(url);
  }

  addCounterPoints(data: any) {
    let url = this.gwUrl + "cardmerchant/addcounterpoints?sessionid=" + localStorage.getItem("SESSIONID");
    //console.log(url);
    return this.http.post(url, data, this.httpOptions);
  }

  newPointsToMoney(cardno: any, points: any) {
    let data = {
      "cardno": cardno,
      "points": points,
      "sessionid": localStorage.getItem("SESSIONID")
    };

    let str = JSON.stringify(data);
    //console.log("str:" ,str);

    let sign = this.getSignInit(str);
    let merCert = encodeURIComponent(this.publicKey);

    let url = this.gwUrl + "cardmerchant/newpointstomoney"
      + "?sign=" + sign + "&merCert=" + merCert;
    //console.log(url);

    return this.http.post(url, data, this.httpOptions);
  }

  getTrxInfoByMerchantId(data) {
    let str = JSON.stringify(data);
    let sign = this.getSignInit(str);
    let merCert = encodeURIComponent(this.publicKey);
    let url = this.gwUrl + "cardmerchant/gettrxinfobymerchantid" + "?sign=" + sign + "&merCert=" + merCert;
    //console.log(url);

    return this.http.post(url, data);
  }

  getPaymentList(pageNum: number, pageSize: number) {

    let str = `pageNum=${pageNum}&pageSize=${pageSize}&sessionid=${localStorage.getItem("SESSIONID")}`

    let sign = this.getSignInit(str);
    let merCert = encodeURIComponent(this.publicKey);

    let url = this.gwUrl + "cardmerchant/getPaymentList?" + str + "&sign=" + sign + "&merCert=" + merCert;
    //console.log(url);

    return this.http.get(url);
  }

  getMerchantName(mid: any) {

    let str = `mid=${mid}`

    let sign = this.getSignInit(str);
    let merCert = encodeURIComponent(this.publicKey);

    let url = this.gwUrl + "cardmerchant/getMerchantName?" + str + "&sign=" + sign + "&merCert=" + merCert;

    return this.http.get(url);
  }

  getPictures(requestId: any) {

    let str = "requestid=" + requestId + "&sessionid=" + localStorage.getItem("SESSIONID");

    let sign = this.getSignInit(str);
    let merCert = encodeURIComponent(this.publicKey);

    let url = this.gwUrl + "cardmerchant/getpictures" + "?" + str + "&"
      + "sign=" + sign + "&merCert=" + merCert;
    //console.log(url);

    return this.http.get(url);
  }

  addPicture(data) {
    let str = JSON.stringify(data);
    let sign = this.getSignInit(str);
    let merCert = encodeURIComponent(this.publicKey);
    let url = this.gwUrl + "cardmerchant/addpictures" + "?sign=" + sign + "&merCert=" + merCert;
    //console.log(url);

    return this.http.post(url, data);
  }

  //调单
  uploadForRequest(data) {
    let str = JSON.stringify(data);
    let sign = this.getSignInit(str);
    let merCert = encodeURIComponent(this.publicKey);
    let url = this.gwUrl + "cardmerchant/uploadforrequest" + "?sign=" + sign + "&merCert=" + merCert;
    //console.log(url);

    return this.http.post(url, data);
  }

  getRecordByDepartmentIdTransactionRef(trxRef) {
    let str = "sessionId=" + localStorage.getItem("SESSIONID") + "&trxRef=" + trxRef;
    let sign = this.getSignInit(str);
    let merCert = encodeURIComponent(this.publicKey);
    let url = this.gwUrl + "cardmerchant/inqbytrxref?" + str + "&sign=" + sign + "&merCert=" + merCert;
    //console.log(url);
    return this.http.get(url);
  }

  // 穫取商戶二維碼
  getMerchantID1(mid) {
    let str = "mid=" + mid;
    let sign = this.getSignInit(str);
    let merCert = encodeURIComponent(this.publicKey);
    let url = this.gwUrl + "cardmerchant/getMerchantID1?" + str + "&sign=" + sign + "&merCert=" + merCert;
    //console.log(url);
    return this.http.get(url);
  }

  // 增加渠道退款記錄
  addchannelrefund(data) {
    let str = JSON.stringify(data);
    let sign = this.getSignInit(str);
    let merCert = encodeURIComponent(this.publicKey);
    let url = this.gwUrl + "cardmerchant/addchannelrefund" + "?sign=" + sign + "&merCert=" + merCert;
    //console.log(url);
    return this.http.post(url, data);
  }

  // scanEshopCode() {
  //     let url = this.gwUrl + 'cardmerchant/eshopgetproductcode';
  //     //console.log(url);
  //     let data = {
  //         comment: "1234"
  //     }
  //
  //     return this.http.post(url, data);
  // }
}
