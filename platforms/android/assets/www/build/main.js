webpackJsonp([0],{

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_card_merchant_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__jiguang_ionic_jpush__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SigninPage = /** @class */ (function () {
    // @ViewChild('eyes') eyes: ElementRef;
    // @ViewChild('ps') ps: ElementRef;
    // eyetype = 'eye-off'
    // passwordtype = 'password'
    function SigninPage(alertCtrl, loadingCtrl, cardMerchantService, nativeStorage, navCtrl, jpush, device) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.cardMerchantService = cardMerchantService;
        this.nativeStorage = nativeStorage;
        this.navCtrl = navCtrl;
        this.jpush = jpush;
        console.log("SigninPage constructor");
    }
    SigninPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log("SigninPage ionViewWillEnter");
        var sessionid = localStorage.getItem("SESSIONID");
        this.cardMerchantService.checkLoginSession(sessionid).toPromise().then(function (data) {
            console.log(data);
            if (Object(data).code == "0")
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
        });
    };
    SigninPage.prototype.ngOnInit = function () {
        console.log("SigninPage Oninit");
    };
    // checkEnter(event,acc,psw){
    //     console.log(event)
    //     if(event.keyCode == 13)
    //         this.signin(acc,psw);
    // }
    SigninPage.prototype.send = function (mobile) {
        console.log("test click!");
        this.cardMerchantService.sendVerifyCode_rsa(mobile).toPromise().then(function (data) {
            console.log(data);
        });
    };
    SigninPage.prototype.signin = function (acc, psw) {
        var _this = this;
        console.log("test2 click!");
        var loading = this.loadingCtrl.create({
            content: 'Please wait...',
            duration: 5000
        });
        loading.present();
        this.cardMerchantService.checkVerifyCode_rsa(acc, psw).toPromise().then(function (data) {
            console.log(data);
            loading.dismiss();
            localStorage.setItem('MERCHANTCIF', Object(Object(data).data).merchantCif);
            localStorage.setItem('MERCHANTCIFNAME', Object(Object(data).data).merchantCifName);
            localStorage.setItem('MERCHANTID', Object(Object(data).data).merchantId);
            localStorage.setItem('MERCHANTNAME', Object(Object(data).data).merchantName);
            localStorage.setItem('DEPARTMENTID', Object(Object(data).data).departmentId);
            localStorage.setItem('DEPARTMENTNAME', Object(Object(data).data).departmentName);
            localStorage.setItem('WECHATMERCHANTID', Object(Object(data).data).wechatMerchantId);
            localStorage.setItem('LEVEL', Object(Object(data).data).level);
            localStorage.setItem('SESSIONID', Object(Object(data).data).sessionid);
            localStorage.setItem('MOBILE', Object(Object(data).data).mobile);
            localStorage.setItem('NAME', Object(Object(data).data).name);
            localStorage.setItem('UID', Object(Object(data).data).uid);
            localStorage.setItem('UID2', Object(Object(data).data).uid2);
            if (Object(data).code === "0")
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
            else if (Object(data).code === "1")
                _this.presentAlert("手機號碼不合法");
            else if (Object(data).code === "2")
                _this.presentAlert("驗證碼不正確");
            else if (Object(data).code === "3")
                _this.presentAlert("驗證碼已過期，請重新獲取");
            else
                _this.presentAlert("網絡故障，請稍後再試");
        }, function () {
            loading.dismiss();
            loading = _this.loadingCtrl.create({
                spinner: 'hide',
                content: '网络故障',
                duration: 2000
            });
            loading.present();
        });
    };
    // eyeOnOff(){
    //     this.eyetype = this.eyetype == 'eye-off'?'eye':'eye-off';
    //     this.passwordtype = this.passwordtype == 'password'? 'tel':'password';
    //
    // }
    SigninPage.prototype.presentAlert = function (note) {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: note,
            buttons: ['OK']
        });
        alert.present();
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signin',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/auth/signin.html"*/'<ion-content>\n    <ion-grid class="grid1">\n        <ion-row class="row1">\n            <ion-col>\n                <img src="assets/imgs/logo.png" class="image1" alt="ICBC">\n            </ion-col>\n        </ion-row>\n        <ion-row class="row2">\n            <ion-col col-10 offset-1>\n                <img src="assets/imgs/login_icon1.png" class="image1" alt="手機號">\n                <!--<ion-input #myaccount type="tel" placeholder="Account Input" (keyup)="checkEnter($event,myaccount.value, mypassword.value)"></ion-input>-->\n                <ion-input #myaccount type="tel" placeholder="請輸入手機號"></ion-input>\n            </ion-col>\n        </ion-row>\n        <ion-row class="row2">\n            <ion-col col-10 offset-1>\n                <img src="assets/imgs/login_icon2.png" class="image2" alt="驗證碼">\n                <!--<ion-input #mypassword [type]="passwordtype" pattern="[0-9]*" inputmode="numeric" placeholder="Password Input" (keyup)="checkEnter($event,myaccount.value, mypassword.value)" ></ion-input>-->\n                <ion-input #mypassword type="tel" placeholder="請輸入驗證碼"></ion-input>\n                <span (click)="send(myaccount.value)">獲取驗證碼</span>\n                <!--<ion-icon [name]="eyetype" item-end (click)="eyeOnOff()"></ion-icon>-->\n            </ion-col>\n        </ion-row>\n        <ion-row class="row3">\n            <ion-col col-10 offset-1>\n                <button ion-button block (click)="signin(myaccount.value, mypassword.value)">登錄</button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/auth/signin.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__service_card_merchant_service__["a" /* CardMerchantService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__jiguang_ionic_jpush__["a" /* JPush */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_device__["a" /* Device */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CounterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//declare var EventSource;
var EventSource = window['EventSource'];

// @Injectable()
// export class Sse {
//
//     constructor(private zone: NgZone) { }
//
//     get(sseUrl: string): Observable<any> {
//         return new Observable<any>(obs => {
//             const es = new EventSource(sseUrl);
//             es.onmessage = evt => {
//                 const data = JSON.parse(evt.data);
//                 this.zone.run(() => obs.next(data));
//             };
//             return () => es.close();
//         });
//     }
//
// }
var CounterService = /** @class */ (function () {
    function CounterService(http) {
        this.http = http;
        // constructor(private http: HttpClient ,private sse: Sse) {
        //     this.sse.get('http://localhost:8182/stream').subscribe(data => {
        //         this.content$.next(data);
        //     });
        // }
        this.content$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["BehaviorSubject"](null);
    }
    CounterService.prototype.findAll = function () {
        return this.content$.share();
    };
    CounterService.prototype.doAdd = function () {
        return this.http.post('http://localhost:8182/add1money/9', '');
    };
    CounterService.prototype.getValue = function () {
        return this.http.get('http://localhost:8182/finduser/9');
    };
    CounterService.prototype.addUser = function () {
        var data = {
            "name": "zzz",
            "phone": "88833333",
            "asset": 0
        };
        return this.http.post('http://localhost:8182/createuser', data);
    };
    CounterService.prototype.addUser2 = function (n) {
        var data = {
            "id": n,
            "name": "zzz",
            "phone": "88833333",
            "asset": 0
        };
        return this.http.post('http://localhost:8182/createuser2', data);
    };
    CounterService.prototype.addUser3 = function () {
        var data = [
            {
                "id": 123,
                "name": "zzz",
                "phone": "88833333",
                "asset": 0
            }, {
                "id": 234,
                "name": "zzz",
                "phone": "88833333",
                "asset": 0
            }
        ];
        return this.http.post('http://localhost:8182/createuser3', data);
    };
    CounterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CounterService);
    return CounterService;
}());

//# sourceMappingURL=counter.service.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardMerchantService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsrsasign__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsrsasign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jsrsasign__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CardMerchantService = /** @class */ (function () {
    function CardMerchantService(http) {
        this.http = http;
        this.privateKey = "-----BEGIN PRIVATE KEY-----\n            MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCEUh3NSfhxYPW85XlPlL5AM9byqdjirN1rthTJ7VtsqPLLruKcI64j9G2Pmu4GXPpAVAIHNgp9tPwiE4whv/8Q2VjRPQsCCzzZ5axy/G1rmWBeVlZ5423TPP9jFsJGVdGDZ7UKMGKvtMvR9nybBUL/2Ve1j3cELZStP3FL3vYyRoYoirCiyfxP0Jqq1PVxNODfDqA7CyEtrfMO2MxWnm7XxvA8Mk68cJ/V6816PsewWhY2DxK1To9XEmlEEqZT3taWb2Us/Ru6SKQxg5unaX8LOx4kw6t7qjA709O8YDXh+Q4y4DQT8qmbICLFnoSm+kyRuj+FsjjiW+MdfE07HB9jAgMBAAECggEADu7Fdjl21DTBBsRO4HBE2DIBe/k3BL3FbzZpOjCTNLwMSng+EqjkKiKXirFNU2KCy2evouiyXmViXuYd1mE4g8pDf7mH2H80KtMElyVto8r3WS4dLDxCVKh5mdEjs5RTxKSbhb7YJEQfDF7oyQXa/cylXVQHdm0+bh7OxmUvG5U2+0ib/EtsPo+yjQDRjPChZ3KNtCZA7Ei+d+sQl3OSCAsqWiKas79488971fCjNjRRi+7a9mfhNJZr6LulT9cPdEgj1GN8saEG2FdVw5dyqRv5mq4VcmyINAAe4VcksVu0l+nngNeYU7lvaXI4c4/+b3v3jS7qTaSlq+HV8y5u4QKBgQDt9P1t0EZmoyI+Ow+YaCnqnF9ztRA7o5j1Si9Q9vl8nir9J6NdxPUa4GeRD1SYXgdcOasqoxjHHGgN00KrP7yVzzyMWrVoRCw109FXbq0vQzj/ot0C7QSwGHQfjrd90u24zBJC4+QjULkHWamqv2z+F6v8ZGVoZVpR7/gnW4NpdwKBgQCOWpwZzxK6BOC4NPM90o4ibKMWsVFBG4njk9+ZeCUaQFoZ8M3ok/9w6HyiIagaURfke3n1dRsS+kwxGm7assnOTNHtBGx9+tQA8MvyJ/DYjcRGbbKYeqQGa1u6OD/6XEmR6ze9losXjTb0jhkPbJcRTGvj1Z6FAxCupmcl1pV0dQKBgDAMJNP0lxKIZBSutkJu3e/abUeeys1QBkWZGh6+D7hC86k0RL9dUqR/pUncD5fIfLH5jv9H+WvS54vLGY4ci4awVqh8dF6+TTL9NyrxVRTS/QJZL0k09JpeBayNk61bVtbWleVdwKYE2aeLSkAI8QgJXZfT6cn/lRIwYyoHR2yXAoGAPm9vV8KCrCPHjANtTAg1XtPXE/ThdnTlnXMV9vHDFCh1XDtJlGCVAKh3QYURfbljiUq+yvF51nEBSegWBsWzzU/UIuh1zSteIKt8R9FMyS4kj989HbNsjYQ4zwwsw1oGyoEoCXclukate8V3KFSwTV3/VAY1aJFXl8JUKzxagKECgYEAlkUie7XeH+XMD5Als5fRiOGBkUL7VEubXF5gwtZ46ztwmL4d670F+SPz9bSVOjzU6TC+MJzUW4b/etlNxWszb9VkhtaQe/hKedyenSjxy/Bk2f7QRggWUprWaJ695t9n67+4p4gZ1geeIp6NeJY/NMbGJHdX3CTNqTtPq+Kyi7I=\n            -----END PRIVATE KEY-----";
        this.publicKey = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAhFIdzUn4cWD1vOV5T5S+QDPW8qnY4qzda7YUye1bbKjyy67inCOuI/Rtj5ruBlz6QFQCBzYKfbT8IhOMIb//ENlY0T0LAgs82eWscvxta5lgXlZWeeNt0zz/YxbCRlXRg2e1CjBir7TL0fZ8mwVC/9lXtY93BC2UrT9xS972MkaGKIqwosn8T9CaqtT1cTTg3w6gOwshLa3zDtjMVp5u18bwPDJOvHCf1evNej7HsFoWNg8StU6PVxJpRBKmU97Wlm9lLP0bukikMYObp2l/CzseJMOre6owO9PTvGA14fkOMuA0E/KpmyAixZ6EpvpMkbo/hbI44lvjHXxNOxwfYwIDAQAB';
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
            //headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })
            //headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
        };
        this.gwUrl = 'http://202.175.59.29:10443/gwinternet/cardmerchant-svc/';
    }
    CardMerchantService.prototype.getSignInit = function (str) {
        var rsa = __WEBPACK_IMPORTED_MODULE_3_jsrsasign___default.a.KEYUTIL.getKey(this.privateKey);
        var sig = new __WEBPACK_IMPORTED_MODULE_3_jsrsasign___default.a.KJUR.crypto.Signature({ "alg": "SHA256withRSA" });
        sig.init(rsa);
        sig.updateString(str);
        var sign = __WEBPACK_IMPORTED_MODULE_3_jsrsasign___default.a.hextob64(sig.sign());
        sign = encodeURIComponent(sign);
        return sign;
    };
    CardMerchantService.prototype.checkLoginSession = function (sessionid) {
        var str = "sessionId=" + sessionid;
        var sign = this.getSignInit(str);
        var merCert = encodeURIComponent(this.publicKey);
        var url = this.gwUrl + 'cardmerchant/getsessionContent' + '?' + str + '&'
            + 'sign=' + sign + '&merCert=' + merCert;
        console.log(url);
        return this.http.get(url);
    };
    CardMerchantService.prototype.addUser = function (data) {
        var str = JSON.stringify(data);
        var sign = this.getSignInit(str);
        var merCert = encodeURIComponent(this.publicKey);
        var url = this.gwUrl + 'cardmerchant/addseconduser' + '?sign=' + sign + '&merCert=' + merCert;
        console.log(url);
        return this.http.post(url, data);
    };
    CardMerchantService.prototype.deleteseconduser = function (data) {
        var str = JSON.stringify(data);
        var sign = this.getSignInit(str);
        var merCert = encodeURIComponent(this.publicKey);
        var url = this.gwUrl + 'cardmerchant/deleteseconduser' + '?sign=' + sign + '&merCert=' + merCert;
        console.log(url);
        return this.http.post(url, data);
    };
    //审批
    CardMerchantService.prototype.approverequest = function (data) {
        var str = JSON.stringify(data);
        var sign = this.getSignInit(str);
        var merCert = encodeURIComponent(this.publicKey);
        var url = this.gwUrl + 'cardmerchant/approverequest' + '?sign=' + sign + '&merCert=' + merCert;
        console.log(url);
        return this.http.post(url, data);
    };
    CardMerchantService.prototype.getShopList = function (data) {
        var str = "merchantId=" + data.merchantId + "&sessionId=" + data.sessionId;
        var sign = this.getSignInit(str);
        var merCert = encodeURIComponent(this.publicKey);
        var url = this.gwUrl + 'cardmerchant/getMerchantInfoByMerchantId?' + str + '&sign=' + sign + '&merCert=' + merCert;
        console.log(url);
        return this.http.get(url);
    };
    CardMerchantService.prototype.getrequestlist = function (data) {
        var str = "field1=" + data.field1 + "&sessionid=" + data.sessionid;
        var sign = this.getSignInit(str);
        var merCert = encodeURIComponent(this.publicKey);
        var url = this.gwUrl + 'cardmerchant/getrequestlist?' + str + '&sign=' + sign + '&merCert=' + merCert;
        console.log(url);
        return this.http.get(url);
    };
    CardMerchantService.prototype.addrefund = function (data) {
        var str = JSON.stringify(data);
        var sign = this.getSignInit(str);
        var merCert = encodeURIComponent(this.publicKey);
        var url = this.gwUrl + 'cardmerchant/addrefund' + '?sign=' + sign + '&merCert=' + merCert;
        console.log(url);
        return this.http.post(url, data);
    };
    CardMerchantService.prototype.addwechatrefund = function (data) {
        var str = JSON.stringify(data);
        var sign = this.getSignInit(str);
        var merCert = encodeURIComponent(this.publicKey);
        var url = this.gwUrl + 'cardmerchant/addwechatrefund' + '?sign=' + sign + '&merCert=' + merCert;
        console.log(url);
        return this.http.post(url, data);
    };
    CardMerchantService.prototype.addmachinerequest = function (data) {
        var str = JSON.stringify(data);
        var sign = this.getSignInit(str);
        var merCert = encodeURIComponent(this.publicKey);
        var url = this.gwUrl + 'cardmerchant/addmachinerequest' + '?sign=' + sign + '&merCert=' + merCert;
        console.log(url);
        return this.http.post(url, data);
    };
    //根据商户号查找交易列表，用于报表统计
    CardMerchantService.prototype.getTrxInfoByMerchantId = function (data) {
        var str = JSON.stringify(data);
        var sign = this.getSignInit(str);
        var merCert = encodeURIComponent(this.publicKey);
        var url = this.gwUrl + 'cardmerchant/getTrxInfoByMerchantId' + '?sign=' + sign + '&merCert=' + merCert;
        console.log(url);
        return this.http.post(url, data);
    };
    //根据商户CIF查找交易列表
    CardMerchantService.prototype.getTrxInfoByMerchantCif = function (data) {
        var str = JSON.stringify(data);
        var sign = this.getSignInit(str);
        var merCert = encodeURIComponent(this.publicKey);
        var url = this.gwUrl + 'cardmerchant/getTrxInfoByMerchantCif' + '?sign=' + sign + '&merCert=' + merCert;
        console.log(url);
        return this.http.post(url, data);
    };
    //根据商户部門編號查找交易列表
    CardMerchantService.prototype.getTrxInfoByDepartmentId = function (data) {
        var str = JSON.stringify(data);
        var sign = this.getSignInit(str);
        var merCert = encodeURIComponent(this.publicKey);
        var url = this.gwUrl + 'cardmerchant/getTrxInfoByDepartmentId' + '?sign=' + sign + '&merCert=' + merCert;
        console.log(url);
        return this.http.post(url, data);
    };
    CardMerchantService.prototype.sendVerifyCode_rsa = function (mobile) {
        var data = {
            "mobile": mobile
        };
        var str = JSON.stringify(data);
        console.log("str:", str);
        var sign = this.getSignInit(str);
        var merCert = encodeURIComponent(this.publicKey);
        var url = this.gwUrl + 'cardmerchant/sendverifycode'
            + '?sign=' + sign + '&merCert=' + merCert;
        console.log(url);
        return this.http.post(url, data, this.httpOptions);
    };
    CardMerchantService.prototype.checkVerifyCode_rsa = function (mobile, verifycode) {
        var data = {
            "mobile": mobile,
            "verifycode": verifycode
        };
        var str = JSON.stringify(data);
        console.log("str:", str);
        var sign = this.getSignInit(str);
        var merCert = encodeURIComponent(this.publicKey);
        var url = this.gwUrl + 'cardmerchant/checkverifycode'
            + '?sign=' + sign + '&merCert=' + merCert;
        console.log(url);
        return this.http.post(url, data, this.httpOptions);
    };
    CardMerchantService.prototype.getSecondUsers = function (sessionid) {
        var str = "sessionId=" + sessionid;
        var sign = this.getSignInit(str);
        var merCert = encodeURIComponent(this.publicKey);
        var url = this.gwUrl + 'cardmerchant/getseconduser' + '?' + str + '&'
            + 'sign=' + sign + '&merCert=' + merCert;
        console.log(url);
        return this.http.get(url);
    };
    CardMerchantService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CardMerchantService);
    return CardMerchantService;
}());

//# sourceMappingURL=card-merchant.service.js.map

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 183;

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 227;

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TipService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TipService = /** @class */ (function () {
    function TipService(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    TipService.prototype.show = function (msg) {
        var _this = this;
        return new Promise(function (resolve) {
            var loading = _this.loadingCtrl.create({
                spinner: 'hide',
                content: msg,
                duration: 1500
            });
            loading.onDidDismiss(function () {
                resolve();
            });
            loading.present();
            //setTimeout(() => {
            //loading.dismiss();
            //resolve();
            //},1500);
        });
    };
    TipService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* LoadingController */]])
    ], TipService);
    return TipService;
}());

//# sourceMappingURL=tip.service.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="商戶服務" tabIcon="tab-tab1"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="交易報表" tabIcon="tab-tab2"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="我的信息" tabIcon="tab-tab3"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutPage = /** @class */ (function () {
    function AboutPage() {
        this.rows = [
            { name: 'Austin', gender: 'Male', company: 'Swimlane', age: 22 },
            { name: 'Dany', gender: 'Male', company: 'KFC', age: 33 },
            { name: 'Molly', gender: 'Female', company: 'Burger King', age: 11 }
        ];
        this.columns = [
            { prop: 'name' },
            { name: 'Gender' },
            { name: 'Company', sortable: false },
            { name: 'age' }
        ];
        this.showType = 'charts';
    }
    // ionViewWillEnter(){
    //   console.log("ionViewWillEnter")
    //   this.showType ='charts';
    //   this.initChart1()
    //   this.initChart2()
    //
    //
    // }
    AboutPage.prototype.ionViewDidEnter = function () {
        this.initChart1();
        this.initChart2();
    };
    AboutPage.prototype.showWhat = function () {
        console.log(this.showType);
        if (this.showType == 'charts') {
            this.initChart1();
            this.initChart2();
        }
        else if (this.showType == 'data') {
        }
    };
    AboutPage.prototype.ngOnInit = function () {
    };
    AboutPage.prototype.initChart1 = function () {
        var myChart = echarts.init(this.chart1.nativeElement);
        var option = {
            title: {
                text: ''
            },
            tooltip: {},
            legend: {
                data: ['销量']
            },
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
        };
        myChart.setOption(option);
    };
    AboutPage.prototype.initChart2 = function () {
        var myChart = echarts.init(this.chart2.nativeElement);
        var option = {
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
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chart1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AboutPage.prototype, "chart1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('chart2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AboutPage.prototype, "chart2", void 0);
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/about/about.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-segment [(ngModel)]="showType" color="light" (ionChange)="showWhat()">\n      <ion-segment-button value="charts">\n        數據圖表\n      </ion-segment-button>\n      <ion-segment-button value="data">\n        報表數據\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <div #chart1 [hidden]="showType !=\'charts\'" style="width:100%;height:400px;"></div>\n  <div #chart2 [hidden]="showType !=\'charts\'" style="width:100%;height:400px;"></div>\n\n  <div [hidden]="showType !=\'data\'" >\n    <ngx-datatable\n            [rows]="rows"\n\n            [columns]="columns" [columnMode]="\'force\'" [reorderable]="false" class="bootstrap">\n    </ngx-datatable>\n  </div>\n  <!--<div [ngSwitch]="showType">-->\n\n    <!--<div *ngSwitchCase="\'charts\'">-->\n      <!--&lt;!&ndash;<div #chart1 style="width:100%;height:400px;"></div>&ndash;&gt;-->\n      <!--&lt;!&ndash;<div #chart2 style="width:100%;height:400px;"></div>&ndash;&gt;-->\n\n    <!--</div>-->\n\n    <!--<ion-list *ngSwitchCase="\'data\'">-->\n      <!--<ion-item>-->\n        <!--Batman Begins-->\n      <!--</ion-item>-->\n      <!--<ion-item>-->\n        <!--Transporter-->\n      <!--</ion-item>-->\n      <!--<ion-item>-->\n        <!--Million Dollar Baby-->\n      <!--</ion-item>-->\n    <!--</ion-list>-->\n\n  <!--</div>-->\n\n</ion-content>\n'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_card_merchant_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_signin__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactPage = /** @class */ (function () {
    function ContactPage(cardMerchantService, nativeStorage, navCtrl, modalCtrl) {
        this.cardMerchantService = cardMerchantService;
        this.nativeStorage = nativeStorage;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.users = [];
    }
    //send verifycode
    ContactPage.prototype.test = function (mobile) {
        console.log("test click!");
        this.cardMerchantService.sendVerifyCode_rsa(mobile).toPromise().then(function (data) {
            console.log(data);
        });
    };
    //check verifycode
    ContactPage.prototype.test2 = function (mobile, verifycode) {
        var _this = this;
        console.log("test2 click!");
        this.cardMerchantService.checkVerifyCode_rsa(mobile, verifycode).toPromise().then(function (data) {
            console.log(data);
            console.log(Object(data).message);
            console.log(Object(Object(data).data).uid);
            console.log(Object(Object(data).data).sessionid);
            _this.nativeStorage.setItem('UID', Object(Object(data).data).uid)
                .then(function () { return console.log('Stored UID!'); }, function (error) { return console.error('Error storing item', error); });
            _this.nativeStorage.setItem('SESSIONID', Object(Object(data).data).sessionid)
                .then(function () { return console.log('Stored SESSIONID!'); }, function (error) { return console.error('Error storing item', error); });
        });
    };
    ContactPage.prototype.test3 = function () {
        this.nativeStorage.getItem('UID')
            .then(function (data) { return console.log(data); }, function (error) { return console.error(error); });
        this.nativeStorage.getItem('SESSIONID')
            .then(function (data) { return console.log(data); }, function (error) { return console.error(error); });
    };
    ContactPage.prototype.test4 = function () {
        var _this = this;
        var ss = localStorage.getItem('SESSIONID');
        this.cardMerchantService.getSecondUsers(ss).toPromise().then(function (data) {
            console.log(data);
            console.log((Object(data).data)[0].FIELD1);
            _this.users = Object(data).data;
        });
    };
    ContactPage.prototype.test5 = function () {
        localStorage.clear();
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__auth_signin__["a" /* SigninPage */]);
        modal.present();
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n    <ion-item>\n      <ion-input #mobile1 type="tel" placeholder="Mobile Input" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input #verifycode1 type="tel" placeholder="VerifyCode Input" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <button (click)="test(mobile1.value)">send verifycode</button>\n      <button (click)="test2(mobile1.value,verifycode1.value)">check verifycode</button>\n      <!--<button (click)="test(\'66767311\')">send verifycode</button>-->\n      <!--<button (click)="test2(\'66767311\',\'960938\')">check verifycode</button>-->\n      <button (click)="test3()">get UID</button>\n      <button (click)="test4()">get second users</button>\n    </ion-item>\n      <ion-item>\n\n      <button (click)="test5()">log out</button>\n        <button (click)="test6()">get merchant info</button>\n      </ion-item>\n  </ion-list>\n  <tr *ngFor="let content of users">\n    <td>{{content.FIELD1}}</td>\n    <td>{{content.FIELD6}}</td>\n    <td>{{content.FIELD3}}</td>\n  </tr>\n</ion-content>\n'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/contact/contact.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__service_card_merchant_service__["a" /* CardMerchantService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_card_merchant_service__["a" /* CardMerchantService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* ModalController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_counter_service__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__refund_refund__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__wrongtrx_wrongtrx__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__refund_orderrefund__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__qrcode_qrcode__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__jiguang_ionic_jpush__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__setup_setup__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__machine_machine__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__order_orderlist__ = __webpack_require__(711);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var EventSource = window['EventSource'];
var HomePage = /** @class */ (function () {
    function HomePage(store, counterService, camera, jpush, device, modalCtrl) {
        var _this = this;
        this.store = store;
        this.counterService = counterService;
        this.camera = camera;
        this.jpush = jpush;
        this.modalCtrl = modalCtrl;
        this.sequence = 0;
        this.tagResultHandler = function (result) {
            var sequence = result.sequence;
            var tags = result.tags == null ? [] : result.tags;
            alert("Success!" + "\nSequence: " + sequence + "\nTags: " + tags.toString());
        };
        this.aliasResultHandler = function (result) {
            var sequence = result.sequence;
            var alias = result.alias;
            alert("Success!" + "\nSequence: " + sequence + "\nAlias: " + alias);
        };
        this.errorHandler = function (err) {
            var sequence = err.sequence;
            var code = err.code;
            alert("Error!" + "\nSequence: " + sequence + "\nCode: " + code);
        };
        this.devicePlatform = device.platform;
        document.addEventListener("jpush.receiveNotification", function (event) {
            var content;
            if (_this.devicePlatform == "Android") {
                content = event.alert;
            }
            else {
                content = event.aps.alert;
            }
            alert("Receive notification: " + JSON.stringify(event));
        }, false);
        document.addEventListener("jpush.openNotification", function (event) {
            var content;
            if (_this.devicePlatform == "Android") {
                content = event.alert;
            }
            else {
                // iOS
                if (event.aps == undefined) {
                    // 本地通知
                    content = event.content;
                }
                else {
                    // APNS
                    content = event.aps.alert;
                }
            }
            alert("open notification: " + JSON.stringify(event));
        }, false);
        document.addEventListener("jpush.receiveLocalNotification", function (event) {
            // iOS(*,9) Only , iOS(10,*) 将在 jpush.openNotification 和 jpush.receiveNotification 中触发。
            var content;
            if (_this.devicePlatform == "Android") {
            }
            else {
                content = event.content;
            }
            alert("receive local notification: " + JSON.stringify(event));
        }, false);
        //this.cleanTags();
        var mytags = [];
        mytags.push(localStorage.getItem("MERCHANTCIF"));
        mytags.push(localStorage.getItem("MERCHANTID"));
        mytags.push(localStorage.getItem("DEPARTMENTID"));
        mytags.push(localStorage.getItem("WECHATMERCHANTID"));
        mytags.push(localStorage.getItem("LEVEL"));
        mytags.push(localStorage.getItem("MOBILE"));
        mytags.push(localStorage.getItem("UID"));
        mytags.push(localStorage.getItem("UID2"));
        console.log(mytags);
        this.setTags(mytags);
    }
    HomePage.prototype.getRegistrationID = function () {
        var _this = this;
        this.jpush.getRegistrationID().then(function (rId) {
            _this.registrationId = rId;
        });
    };
    HomePage.prototype.setTags = function (tags) {
        this.jpush
            .setTags({ sequence: this.sequence++, tags: tags })
            .then(this.tagResultHandler)
            .catch(this.errorHandler);
    };
    HomePage.prototype.addTags = function () {
        this.jpush
            .addTags({ sequence: this.sequence++, tags: ["Tag3", "Tag4"] })
            .then(this.tagResultHandler)
            .catch(this.errorHandler);
    };
    HomePage.prototype.checkTagBindState = function () {
        this.jpush
            .checkTagBindState({ sequence: this.sequence++, tag: "Tag1" })
            .then(function (result) {
            var sequence = result.sequence;
            var tag = result.tag;
            var isBind = result.isBind;
            alert("Sequence: " + sequence + "\nTag: " + tag + "\nIsBind: " + isBind);
        })
            .catch(this.errorHandler);
    };
    HomePage.prototype.deleteTags = function () {
        this.jpush
            .deleteTags({ sequence: this.sequence++, tags: ["Tag4"] })
            .then(this.tagResultHandler)
            .catch(this.errorHandler);
    };
    HomePage.prototype.getAllTags = function () {
        this.jpush
            .getAllTags({ sequence: this.sequence++ })
            .then(this.tagResultHandler)
            .catch(this.errorHandler);
    };
    HomePage.prototype.cleanTags = function () {
        this.jpush
            .cleanTags({ sequence: this.sequence++ })
            .then(this.tagResultHandler)
            .catch(this.errorHandler);
    };
    HomePage.prototype.setAlias = function () {
        this.jpush
            .setAlias({ sequence: this.sequence++, alias: "TestAlias" })
            .then(this.aliasResultHandler)
            .catch(this.errorHandler);
    };
    HomePage.prototype.getAlias = function () {
        this.jpush
            .getAlias({ sequence: this.sequence++ })
            .then(this.aliasResultHandler)
            .catch(this.errorHandler);
    };
    HomePage.prototype.deleteAlias = function () {
        this.jpush
            .deleteAlias({ sequence: this.sequence++ })
            .then(this.aliasResultHandler)
            .catch(this.errorHandler);
    };
    HomePage.prototype.addLocalNotification = function () {
        if (this.devicePlatform == "Android") {
            this.jpush.addLocalNotification(0, "Hello JPush", "JPush", 1, 5000);
        }
        else {
            this.jpush.addLocalNotificationForIOS(5, "Hello JPush", 1, "localNoti1");
        }
    };
    HomePage.prototype.updateOrderNum = function (num) {
        this.orderNum = num;
    };
    HomePage.prototype.ngOnInit = function () {
        this.orderNum = 12; //模拟订单数量更新
    };
    HomePage.prototype.openCamera = function () {
        //手機上使用部分開始
        var options = {
            quality: 80,
            targetWidth: 600,
            targetHeight: 1200,
            //allowEdit: true,
            sourceType: 1,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            var base64Image = imageData;
            base64Image = 'data:image/jpeg;base64,' + base64Image;
            console.log(base64Image);
        });
    };
    HomePage.prototype.openRefundModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__refund_refund__["a" /* Refund */]);
        modal.present();
    };
    HomePage.prototype.openWrongtrxModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__wrongtrx_wrongtrx__["a" /* Wrongtrx */]);
        modal.present();
    };
    HomePage.prototype.openOrderRefundModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__refund_orderrefund__["a" /* OrderRefund */]);
        modal.present();
    };
    HomePage.prototype.openCustserviceModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__machine_machine__["a" /* Machine */]);
        modal.present();
    };
    HomePage.prototype.openQrcodeModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__qrcode_qrcode__["a" /* Qrcode */]);
        modal.present();
    };
    HomePage.prototype.goSetup = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__setup_setup__["a" /* Setup */]);
        modal.present();
    };
    HomePage.prototype.openOrderList = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_13__order_orderlist__["a" /* OrderList */]);
        modal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/home.html"*/'<ion-header class="page-home-header">\n  <ion-grid class="grid1">\n      <ion-row class="row1">\n        <ion-col>\n          <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n        </ion-col>\n      </ion-row>\n      <ion-row class="row2">\n        <ion-col>\n          <div class="top">\n            <img class="image1" src="assets/imgs/index_fn1.png" alt="掃碼" (click)="openCamera()">\n          </div>\n          <p class="bottom">掃碼</p>\n        </ion-col>\n        <ion-col>\n          <div class="top">\n            <img class="image1" src="assets/imgs/index_fn2.png" alt="收款" (click)="openQrcodeModal()">\n          </div>\n          <p class="bottom">收款</p>\n        </ion-col>\n        <ion-col (click)="openOrderList()" >\n          <div class="top">\n            <img class="image1" src="assets/imgs/index_fn3.png" alt="訂單">\n            <span class="title">{{orderNum}}</span>\n          </div>\n          <p class="bottom">訂單</p>\n        </ion-col>\n        <ion-col>\n          <div class="top">\n            <img class="image1" src="assets/imgs/index_fn4.png" alt="設置" (click)="goSetup()">\n          </div>\n          <p class="bottom">設置</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class="row3">\n        <ion-col>\n          <div class="news">\n            <span class="span1">最新消息：</span>\n            <span class="span2">一條為方便客戶溝通聯絡時間的在線交流APP方便快捷利於攜帶出門旅行之利器</span>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  <ion-grid class="grid2">\n    <ion-row class="row1">\n      <ion-col>\n        <span class="circle">●</span>基本服務\n      </ion-col>\n    </ion-row>\n    <ion-row class="row2">\n      <ion-col col-3>\n        <div class="top">\n          <img class="image1" src="assets/imgs/index_pa2.png" alt="退款" (click)="openRefundModal()">\n        </div>\n        <p class="bottom">退款</p>\n      </ion-col>\n      <ion-col col-3>\n        <div class="top">\n          <img class="image1" src="assets/imgs/index_pa3.png" alt="差錯交易" (click)="openWrongtrxModal()">\n        </div>\n        <p class="bottom">差錯交易</p>\n      </ion-col>\n	  <ion-col>\n        <div class="top">\n          <img class="image1" src="assets/imgs/index_pa3.png" alt="调单/退款" (click)="openOrderRefundModal()">\n        </div>\n        <p class="bottom">调单/退款</p>\n      </ion-col>\n      <ion-col col-3>\n        <div class="top">\n          <img class="image1" src="assets/imgs/index_pa4.png" alt="客服" (click)="openCustserviceModal()">\n        </div>\n        <p class="bottom">客服</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n\n<ion-content class="page-home-content">\n  <ion-grid class="grid1">\n    <ion-row class="row1">\n      <ion-col>\n        <img src="assets/imgs/banner.png" style="border-radius: 6px;" width="100%" alt="">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!--<ion-list>\n    <ion-item>\n      <div>Registration Id: {{registrationId}}</div>\n      <button ion-button full (click)="getRegistrationID()">Get Registration Id</button>\n    </ion-item>\n\n    <ion-item>\n      <button ion-button full (click)="setTags()">Set tags - Tag1, Tag2</button>\n      <button ion-button full (click)="addTags()">Add tags - Tag3, Tag4</button>\n      <button ion-button full (click)="checkTagBindState()">Check tag bind state - Tag1</button>\n      <button ion-button full (click)="deleteTags()">Delete tags - Tag4</button>\n      <button ion-button full (click)="getAllTags()">Get all tags</button>\n      <button ion-button full (click)="cleanTags()">Clean tags</button>\n    </ion-item>\n\n    <ion-item>\n      <button ion-button full (click)="setAlias()">Set Alias - TestAlias</button>\n      <button ion-button full (click)="getAlias()">Get Alias</button>\n      <button ion-button full (click)="deleteAlias()">Delete Alias</button>\n    </ion-item>\n\n    <ion-item>\n      <button ion-button full (click)="addLocalNotification()">Trigger local notification after 5 seconds</button>\n    </ion-item>\n  </ion-list>-->\n</ion-content>\n'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_3__service_counter_service__["a" /* CounterService */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_9__jiguang_ionic_jpush__["a" /* JPush */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Refund; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__commonrefund__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__weixinrefund__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__refundverify__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__refundprogress__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Refund = /** @class */ (function () {
    function Refund(viewCtrl, modalCtrl, navCtrl, nativeStorage) {
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.nativeStorage = nativeStorage;
    }
    Refund.prototype.ngOnInit = function () { };
    Refund.prototype.goCommonRefund = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__commonrefund__["a" /* CommonRefund */]);
        modal.present();
    };
    Refund.prototype.goWeixinRefund = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__weixinrefund__["a" /* WeixinRefund */]);
        modal.present();
    };
    Refund.prototype.goRefundVerify = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__refundverify__["a" /* RefundVerify */]);
        modal.present();
    };
    Refund.prototype.goRefundProgress = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__refundprogress__["a" /* RefundProgress */]);
        modal.present();
    };
    Refund.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Refund = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-refund',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/refund/refund.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button small clear (click)="dismiss()">\n            <ion-icon ios="ios-arrow-back"></ion-icon>\n        </button>\n        <ion-title>退款</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-list no-lines class="item_list">\n        <button ion-item (click)="goCommonRefund()">\n            普通退款\n        </button>\n    </ion-list>\n    <ion-list no-lines class="item_list">\n        <button ion-item (click)="goWeixinRefund()">\n            微信退款\n        </button>\n    </ion-list>\n    <ion-list no-lines class="item_list">\n        <button ion-item (click)="goRefundVerify()">\n            退款审批\n        </button>\n    </ion-list>\n    <ion-list no-lines class="item_list">\n        <button ion-item (click)="goRefundProgress()">\n            退款进度\n        </button>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/refund/refund.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], Refund);
    return Refund;
}());

//# sourceMappingURL=refund.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonRefund; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_card_merchant_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_tip_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_BaseDate_service__ = __webpack_require__(384);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CommonRefund = /** @class */ (function () {
    function CommonRefund(cardMerchantService, camera, viewCtrl, loadingCtrl, alertCtrl, tipService) {
        this.cardMerchantService = cardMerchantService;
        this.camera = camera;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.tipService = tipService;
        this.pictures = [];
        this.needView = true;
    }
    CommonRefund.prototype.ngOnInit = function () {
        console.log(localStorage);
        Object(this.merchantname).value = localStorage.getItem('MERCHANTNAME');
        Object(this.departmentname).value = localStorage.getItem('DEPARTMENTNAME');
        //Object(this.merchantname).value = '测试商户名称';
        //Object(this.departmentname).value = '测试部门名称'; 
        Object(this.applymobile).value = localStorage.getItem('MOBILE');
        this.tradeDate = __WEBPACK_IMPORTED_MODULE_5__service_BaseDate_service__["a" /* BaseDate */].getDateNow();
        this.pictures[0] = 'data:image/gif;base64,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';
    };
    CommonRefund.prototype.openCamera = function () {
        var _this = this;
        if (this.pictures.length > 5) {
            this.tipService.show('最多拍照上传5张');
        }
        else {
            //手機上使用部分開始
            var options = {
                quality: 80,
                targetWidth: 600,
                targetHeight: 1200,
                //allowEdit: true,
                sourceType: 1,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then(function (imageData) {
                var base64Image = imageData;
                base64Image = 'data:image/jpeg;base64,' + base64Image;
                _this.pictures.push(base64Image);
                _this.needView = true;
            });
        }
    };
    CommonRefund.prototype.delPic = function (index) {
        this.pictures.splice(index, 1);
    };
    CommonRefund.prototype.submitForm = function () {
        var _this = this;
        this.alertCtrl.create({
            message: '退款金额:' + Object(this.refundamount).value,
            buttons: [
                {
                    text: '返回修改',
                    handler: function () {
                        return;
                    }
                },
                {
                    text: '确认退款',
                    handler: function () {
                        var data = {
                            sessionid: localStorage.getItem('SESSIONID'),
                            merchantid: localStorage.getItem("MERCHANTID"),
                            merchantname: localStorage.getItem("MERCHANTNAME"),
                            departmentid: localStorage.getItem("DEPARTMENTID"),
                            departmentname: Object(_this.departmentname).value,
                            refundcardno4: Object(_this.refundcardno4).value,
                            trxdate: _this.tradeDate,
                            authno: Object(_this.authno).value,
                            trxamount: Object(_this.trxamount).value,
                            refundamount: Object(_this.refundamount).value,
                            applymobile: Object(_this.applymobile).value,
                            applyname: Object(_this.applyname).value,
                            picture: _this.pictures
                        };
                        console.log(data);
                        var loading = _this.loadingCtrl.create({
                            content: 'Please wait...',
                            duration: 5000
                        });
                        loading.present();
                        _this.cardMerchantService.addrefund(data).toPromise().then(function (data) {
                            console.log(Object(data));
                            loading.dismiss();
                            if (Object(data).code == 0) {
                                _this.tipService.show('提交成功').then(function () {
                                    _this.viewCtrl.dismiss();
                                });
                            }
                            else {
                                _this.alertCtrl.create({
                                    message: Object(data).message,
                                    buttons: ['确定']
                                }).present();
                            }
                        }, function () {
                            loading.dismiss();
                            loading = _this.loadingCtrl.create({
                                spinner: 'hide',
                                content: '网络故障',
                                duration: 2000
                            });
                            loading.present();
                        });
                    }
                }
            ]
        }).present();
    };
    CommonRefund.prototype.goBack = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('merchantname'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CommonRefund.prototype, "merchantname", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('departmentname'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CommonRefund.prototype, "departmentname", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('refundcardno4'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CommonRefund.prototype, "refundcardno4", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('authno'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CommonRefund.prototype, "authno", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('trxamount'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CommonRefund.prototype, "trxamount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('refundamount'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CommonRefund.prototype, "refundamount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('applymobile'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CommonRefund.prototype, "applymobile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('applyname'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CommonRefund.prototype, "applyname", void 0);
    CommonRefund = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-commonrefund',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/refund/commonrefund.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button small clear (click)="goBack()">\n      <ion-icon ios="ios-arrow-back"></ion-icon>\n    </button>\n    <ion-title>退款</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list class="input_list">\n\n    <ion-item>\n      <ion-label>商戶名稱</ion-label>\n      <ion-input type="text" placeholder="請輸入商戶名稱" #merchantname ></ion-input>\n    </ion-item>\n	<ion-item>\n      <ion-label>部门名稱</ion-label>\n      <ion-input type="text" placeholder="請輸入部门名稱" #departmentname ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>退款卡號</ion-label>\n      <ion-input type="text" placeholder="請輸入退款卡號" #refundcardno4 ></ion-input>\n    </ion-item>\n    <button ion-item class="item-ios" >\n      <ion-label>交易日期</ion-label>\n	  <ion-datetime displayFormat="YYYY-MM-DD" pickerFormat="YYYY-MM-DD" [(ngModel)]="tradeDate"></ion-datetime>\n      <!-- <ion-input type="text" #trxdate ></ion-input> -->\n    </button>\n    <ion-item>\n      <ion-label>授權號</ion-label>\n      <ion-input type="text" placeholder="請輸入授權號" #authno ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>原交易金額</ion-label>\n      <ion-input type="text" placeholder="請輸入原交易金額" #trxamount ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>退款金額</ion-label>\n      <ion-input type="text" placeholder="請輸入退款金額" #refundamount ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>NAME</ion-label>\n      <ion-input type="text" placeholder="請輸入NAME" #name ></ion-input>\n    </ion-item>\n	<ion-item>\n      <ion-label>MOBILE</ion-label>\n      <ion-input type="text" placeholder="請輸入MOBILE" #applymobile ></ion-input>\n    </ion-item>\n	<ion-item>\n		<button ion-button (click)="openCamera()" >拍照</button>\n		<div *ngIf="needView" class="row" >\n			<div class="pic-wrapper" *ngFor="let picture of pictures;let i = index" >\n				<img [src]="picture" />\n				<div class="delete" (click)="delPic(i)" >x</div>\n			</div>\n		</div>\n    </ion-item>\n\n  </ion-list>\n\n  <div padding>\n    <button ion-button color="primary" (click)="submitForm()" block>提交</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/refund/commonrefund.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_card_merchant_service__["a" /* CardMerchantService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__service_tip_service__["a" /* TipService */]])
    ], CommonRefund);
    return CommonRefund;
}());

//# sourceMappingURL=commonrefund.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseDate; });
/**
* 日期处理公共类
*
* @export
* @class BaseDate
*/
var BaseDate = /** @class */ (function () {
    function BaseDate() {
    }
    /**
     * 获取当前日期:yyyy-mm-dd
     *
     * @returns{string}
     * @member of BaseDate
     */
    BaseDate.getDateNow = function () {
        var dateNow = new Date();
        var year = dateNow.getFullYear();
        var month = dateNow.getMonth() + 1;
        var day = dateNow.getDate();
        //return new Date(year, month, day);
        if (month < 10) {
            month = "0" + month;
        }
        if (day < 10) {
            day = "0" + day;
        }
        return year + "-" + month + "-" + day;
    };
    return BaseDate;
}());

//# sourceMappingURL=BaseDate.service.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeixinRefund; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_card_merchant_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_tip_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_BaseDate_service__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WeixinRefund = /** @class */ (function () {
    function WeixinRefund(cardMerchantService, viewCtrl, loadingCtrl, camera, alertCtrl, tipService) {
        this.cardMerchantService = cardMerchantService;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.tipService = tipService;
        this.pictures = [];
        this.needView = true;
    }
    WeixinRefund.prototype.ngOnInit = function () {
        Object(this.wechatapplymobile).value = localStorage.getItem('MOBILE');
        this.tradeDate = __WEBPACK_IMPORTED_MODULE_4__service_BaseDate_service__["a" /* BaseDate */].getDateNow();
        this.pictures[0] = 'data:image/gif;base64,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';
    };
    WeixinRefund.prototype.submitForm = function () {
        var _this = this;
        this.alertCtrl.create({
            message: '退款金额:' + Object(this.wechattrxamount).value,
            buttons: [
                {
                    text: '返回修改',
                    handler: function () {
                        return;
                    }
                },
                {
                    text: '确认退款',
                    handler: function () {
                        var data = {
                            sessionid: localStorage.getItem('SESSIONID'),
                            wechatmid: localStorage.getItem("MERCHANTID"),
                            wechatmerchantname: localStorage.getItem("MERCHANTNAME"),
                            wechattid: localStorage.getItem("WECHATTID"),
                            wechattrxno: Object(_this.wechattrxno).value,
                            wechattrxdate: _this.tradeDate,
                            wechattrxamount: Object(_this.wechattrxamount).value,
                            wechatapplymobile: Object(_this.wechatapplymobile).value,
                            wechatapplyname: Object(_this.wechatapplyname).value,
                            wechatapplypicture: _this.pictures
                        };
                        console.log(data);
                        var loading = _this.loadingCtrl.create({
                            content: 'Please wait...',
                            duration: 5000
                        });
                        loading.present();
                        _this.cardMerchantService.addwechatrefund(data).toPromise().then(function (data) {
                            console.log(Object(data));
                            loading.dismiss();
                            if (Object(data).code == 0) {
                                _this.tipService.show('提交成功').then(function () {
                                    _this.viewCtrl.dismiss();
                                });
                            }
                            else {
                                _this.alertCtrl.create({
                                    message: Object(data).message,
                                    buttons: ['确定']
                                }).present();
                            }
                        }, function () {
                            loading.dismiss();
                            loading = _this.loadingCtrl.create({
                                spinner: 'hide',
                                content: '网络故障',
                                duration: 2000
                            });
                            loading.present();
                        });
                    }
                }
            ]
        }).present();
    };
    WeixinRefund.prototype.openCamera = function () {
        var _this = this;
        if (this.pictures.length > 5) {
            this.tipService.show('最多拍照上传5张');
        }
        else {
            //手機上使用部分開始
            var options = {
                quality: 80,
                targetWidth: 600,
                targetHeight: 1200,
                //allowEdit: true,
                sourceType: 1,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE
            };
            this.camera.getPicture(options).then(function (imageData) {
                var base64Image = imageData;
                base64Image = 'data:image/jpeg;base64,' + base64Image;
                _this.pictures.push(base64Image);
                _this.needView = true;
            });
        }
    };
    WeixinRefund.prototype.goBack = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('wechattrxno'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], WeixinRefund.prototype, "wechattrxno", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('wechattrxdate'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], WeixinRefund.prototype, "wechattrxdate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('wechattrxamount'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], WeixinRefund.prototype, "wechattrxamount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('wechatapplymobile'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], WeixinRefund.prototype, "wechatapplymobile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('wechatapplyname'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], WeixinRefund.prototype, "wechatapplyname", void 0);
    WeixinRefund = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-weixinrefund',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/refund/weixinrefund.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button small clear (click)="goBack()">\n      <ion-icon ios="ios-arrow-back"></ion-icon>\n    </button>\n    <ion-title>微信退款</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list class="input_list">\n    <ion-item>\n      <ion-label>交易编号</ion-label>\n      <ion-input type="text" placeholder="請輸入交易编号" #wechattrxno ></ion-input>\n    </ion-item>\n    <button ion-item class="item-ios" >\n      <ion-label>交易日期</ion-label>\n	  <ion-datetime displayFormat="YYYY-MM-DD" pickerFormat="YYYY-MM-DD" [(ngModel)]="tradeDate"></ion-datetime>\n      <!-- <ion-input class="input-date" type="text" #wechattrxdate placeholder="请按格式yyyy-mm-dd输入日期" ></ion-input> -->\n    </button>\n    <ion-item>\n      <ion-label>原交易金額</ion-label>\n      <ion-input type="text" placeholder="請輸入原交易金額" #wechattrxamount ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label >申請人</ion-label>\n      <ion-input type="text" placeholder="請輸入申請人" #wechatapplyname ></ion-input>\n    </ion-item>\n	<ion-item>\n      <ion-label >聯絡電話</ion-label>\n      <ion-input type="text" placeholder="請輸入申請人聯絡電話" #wechatapplymobile ></ion-input>\n    </ion-item>\n	<ion-item>\n		<button ion-button (click)="openCamera()" >拍照</button>\n		<div *ngIf="needView" class="row" >\n			<div class="pic-wrapper" *ngFor="let picture of pictures;let i = index" >\n				<img [src]="picture" />\n				<div class="delete" (click)="delPic(i)" >x</div>\n			</div>\n		</div>\n    </ion-item>\n  </ion-list>\n\n  <div padding>\n    <button ion-button color="primary" (click)="submitForm()" block>提交</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/refund/weixinrefund.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_card_merchant_service__["a" /* CardMerchantService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__service_tip_service__["a" /* TipService */]])
    ], WeixinRefund);
    return WeixinRefund;
}());

//# sourceMappingURL=weixinrefund.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefundVerify; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_card_merchant_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_tip_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__showimage__ = __webpack_require__(387);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RefundVerify = /** @class */ (function () {
    function RefundVerify(viewCtrl, modalCtrl, navCtrl, nativeStorage, loadingCtrl, alertCtrl, tipService, cardMerchantService) {
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.nativeStorage = nativeStorage;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.tipService = tipService;
        this.cardMerchantService = cardMerchantService;
    }
    RefundVerify.prototype.ngOnInit = function () {
        var _this = this;
        var data = {
            sessionid: localStorage.getItem('SESSIONID'),
            field1: 1 //1-退款列表 2-机器问题列表
        };
        console.log(data);
        this.cardMerchantService.getrequestlist(data).toPromise().then(function (data) {
            console.log(Object(data));
            if (Object(data).code == 0) {
                _this.items = Object(data).data;
                if (_this.items.length > 0) {
                    for (var i = 0; i < _this.items.length; i++) {
                        switch (_this.items[i].status) {
                            case '0':
                                _this.items[i].status = '已审批';
                                break;
                            case '1':
                                _this.items[i].status = '审批中';
                                break;
                            default:
                                break;
                        }
                    }
                }
            }
            else {
                _this.alertCtrl.create({
                    message: Object(data).message,
                    buttons: ['确定']
                }).present();
            }
        }, function () {
            _this.loadingCtrl.create({
                spinner: 'hide',
                content: '网络故障',
                duration: 2000
            }).present();
        });
    };
    RefundVerify.prototype.goApprove = function (requestid) {
        var _this = this;
        var data = {
            Sessionid: localStorage.getItem('SESSIONID'),
            requestid: requestid
        };
        console.log(data);
        var loading = this.loadingCtrl.create({
            content: 'Please wait...',
            duration: 2000
        });
        loading.present();
        this.cardMerchantService.approverequest(data).toPromise().then(function (data) {
            console.log(Object(data));
            loading.dismiss();
            if (Object(data).code == 0) {
                _this.tipService.show('提交成功').then(function () {
                    _this.viewCtrl.dismiss();
                });
            }
            else {
                _this.alertCtrl.create({
                    message: Object(data).message,
                    buttons: ['确定']
                }).present();
            }
        }, function () {
            loading.dismiss();
            loading = _this.loadingCtrl.create({
                spinner: 'hide',
                content: '网络故障',
                duration: 2000
            });
            loading.present();
        });
    };
    RefundVerify.prototype.goDisplay = function (picurl) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__showimage__["a" /* ShowImage */], { picurl: picurl });
        modal.present();
    };
    RefundVerify.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    RefundVerify = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-refundverify',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/refund/refundverify.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button start (click)="dismiss()">返回</button>\n    <ion-title>退款审批</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n		<ion-item>\n			<h2>MID：工商银行</h2>\n			<h3>卡号：2122323233</h3>\n			<button ion-button class=""  item-end >\n				<ion-icon name="film" (click)="goDisplay(\'./assets/imgs/logo.png\')" >影像</ion-icon>\n				<ion-icon name="create" (click)="goApprove(\'123456\')" >审批</ion-icon>\n			</button>\n		</ion-item>\n		<ion-item *ngFor="let item of items" >\n			<h2>MID：工商银行</h2>\n			<h3>卡号：{{item.field5}}</h3>\n			<button ion-button class=""  item-end >\n				<ion-icon name="film" (click)="goDisplay(item.field6)" >影像</ion-icon>\n				<ion-icon name="create" (click)="goApprove(item.sequence)" >审批</ion-icon>\n			</button>\n		</ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/refund/refundverify.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__service_tip_service__["a" /* TipService */],
            __WEBPACK_IMPORTED_MODULE_2__service_card_merchant_service__["a" /* CardMerchantService */]])
    ], RefundVerify);
    return RefundVerify;
}());

//# sourceMappingURL=refundverify.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowImage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowImage = /** @class */ (function () {
    function ShowImage(viewCtrl, params) {
        this.viewCtrl = viewCtrl;
        this.params = params;
    }
    ShowImage.prototype.ngOnInit = function () {
        this.picurl = this.params.get('picurl');
        this.picurl = './assets/imgs/juana.gif';
    };
    ShowImage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ShowImage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-showimage',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/refund/showimage.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button start (click)="dismiss()">返回</button>\n    <ion-title>影像预览</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n	<img width="100%" height="100%" style="object-fit:cover;" src="{{picurl}}" />\n</ion-content>\n'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/refund/showimage.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ShowImage);
    return ShowImage;
}());

//# sourceMappingURL=showimage.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefundProgress; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_card_merchant_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_tip_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RefundProgress = /** @class */ (function () {
    function RefundProgress(viewCtrl, modalCtrl, navCtrl, nativeStorage, loadingCtrl, alertCtrl, tipService, cardMerchantService) {
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.nativeStorage = nativeStorage;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.tipService = tipService;
        this.cardMerchantService = cardMerchantService;
    }
    RefundProgress.prototype.ngOnInit = function () {
        var _this = this;
        var data = {
            sessionid: localStorage.getItem('SESSIONID'),
            field1: 1 //1-退款列表 2-机器问题列表
        };
        console.log(data);
        this.cardMerchantService.getrequestlist(data).toPromise().then(function (data) {
            console.log(Object(data));
            if (Object(data).code == 0) {
                _this.items = Object(data).data;
                if (_this.items.length > 0) {
                    for (var i = 0; i < _this.items.length; i++) {
                        switch (_this.items[i].status) {
                            case '0':
                                _this.items[i].status = '已审批';
                                break;
                            case '1':
                                _this.items[i].status = '审批中';
                                break;
                            default:
                                break;
                        }
                    }
                }
            }
            else {
                _this.alertCtrl.create({
                    message: Object(data).message,
                    buttons: ['确定']
                }).present();
            }
        }, function () {
            _this.loadingCtrl.create({
                spinner: 'hide',
                content: '网络故障',
                duration: 2000
            }).present();
        });
    };
    RefundProgress.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    RefundProgress = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-refundprogress',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/refund/refundprogress.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button start (click)="dismiss()">返回</button>\n    <ion-title>退款进度</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n		<ion-item *ngFor="let item of items" >\n			<h3>MID：工商银行</h3>\n			<h2>卡号：{{item.field5}}</h2>\n			<button ion-button class="" item-end>\n				{{item.status}}\n			</button>\n		</ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/refund/refundprogress.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__service_tip_service__["a" /* TipService */],
            __WEBPACK_IMPORTED_MODULE_2__service_card_merchant_service__["a" /* CardMerchantService */]])
    ], RefundProgress);
    return RefundProgress;
}());

//# sourceMappingURL=refundprogress.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wrongtrx; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_tip_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_card_merchant_service__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Wrongtrx = /** @class */ (function () {
    function Wrongtrx(viewCtrl, tipService, alertCtrl, loadingCtrl, cardMerchantService) {
        this.viewCtrl = viewCtrl;
        this.tipService = tipService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.cardMerchantService = cardMerchantService;
    }
    Wrongtrx.prototype.ngOnInit = function () { };
    Wrongtrx.prototype.submitForm = function () {
        var _this = this;
        //if(!/^\d{8,11}$/.test(Object(this.Mobile).value)){
        //this.tipService.show('手机号至少8位');
        //}else{
        var data = {
            sessionid: localStorage.getItem('SESSIONID'),
            billno: Object(this.Billno).value
        };
        console.log(data);
        var loading = this.loadingCtrl.create({
            content: 'Please wait...',
            duration: 5000
        });
        loading.present();
        this.cardMerchantService.getTrxInfoByMerchantId(data).toPromise().then(function (data) {
            console.log(Object(data));
            loading.dismiss();
            if (Object(data).code == 0) {
                _this.tipService.show('提交成功').then(function () {
                    _this.viewCtrl.dismiss();
                });
            }
            else {
                _this.alertCtrl.create({
                    message: Object(data).message,
                    buttons: ['确定']
                }).present();
            }
        }, function () {
            loading.dismiss();
            loading = _this.loadingCtrl.create({
                spinner: 'hide',
                content: '网络故障',
                duration: 2000
            });
            loading.present();
        });
        //}
    };
    Wrongtrx.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('billno'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], Wrongtrx.prototype, "Billno", void 0);
    Wrongtrx = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-wrongtrx',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/wrongtrx/wrongtrx.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button small clear (click)="dismiss()">\n      <ion-icon ios="ios-arrow-back"></ion-icon>\n    </button>\n    <ion-title>差錯交易</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>賬單號</ion-label>\n      <ion-input type="text" #billno ></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <div padding>\n    <button ion-button color="primary" (click)="submitForm()" block>查詢</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/wrongtrx/wrongtrx.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__service_tip_service__["a" /* TipService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__service_card_merchant_service__["a" /* CardMerchantService */]])
    ], Wrongtrx);
    return Wrongtrx;
}());

//# sourceMappingURL=wrongtrx.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderRefund; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_card_merchant_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_tip_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderRefund = /** @class */ (function () {
    function OrderRefund(viewCtrl, modalCtrl, navCtrl, nativeStorage, loadingCtrl, alertCtrl, tipService, cardMerchantService) {
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.nativeStorage = nativeStorage;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.tipService = tipService;
        this.cardMerchantService = cardMerchantService;
    }
    OrderRefund.prototype.ngOnInit = function () {
        var _this = this;
        var data = {
            sessionid: localStorage.getItem('SESSIONID'),
            field1: 1 //1-退款列表 2-机器问题列表
        };
        console.log(data);
        this.cardMerchantService.getrequestlist(data).toPromise().then(function (data) {
            console.log(Object(data));
            if (Object(data).code == 0) {
                _this.items = Object(data).data;
                if (_this.items.length > 0) {
                    for (var i = 0; i < _this.items.length; i++) {
                        switch (_this.items[i].status) {
                            case '0':
                                _this.items[i].status = '已审批';
                                break;
                            case '1':
                                _this.items[i].status = '审批中';
                                break;
                            default:
                                break;
                        }
                    }
                }
            }
            else {
                _this.alertCtrl.create({
                    message: Object(data).message,
                    buttons: ['确定']
                }).present();
            }
        }, function () {
            _this.loadingCtrl.create({
                spinner: 'hide',
                content: '网络故障',
                duration: 2000
            }).present();
        });
    };
    OrderRefund.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    OrderRefund = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-orderrefund',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/refund/orderrefund.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button start (click)="dismiss()">返回</button>\n    <ion-title>调单/退款</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n		<ion-item>\n			<h2>MID：工商银行</h2>\n			<h3>卡号：2122323233</h3>\n			<button ion-button class=""  item-end >\n				<ion-icon name="film" (click)="goDisplay(\'./assets/imgs/logo.png\')" >影像</ion-icon>\n				<ion-icon name="create" (click)="goApprove(\'123456\')" >审批</ion-icon>\n			</button>\n		</ion-item>\n		<ion-item *ngFor="let item of items" >\n			<h2>MID：工商银行</h2>\n			<h3>卡号：{{item.field5}}</h3>\n			<button ion-button class=""  item-end >\n				<ion-icon name="film" (click)="goDisplay(item.field6)" >影像</ion-icon>\n				<ion-icon name="create" (click)="goApprove(item.sequence)" >审批</ion-icon>\n			</button>\n		</ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/refund/orderrefund.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__service_tip_service__["a" /* TipService */],
            __WEBPACK_IMPORTED_MODULE_2__service_card_merchant_service__["a" /* CardMerchantService */]])
    ], OrderRefund);
    return OrderRefund;
}());

//# sourceMappingURL=orderrefund.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Qrcode; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Qrcode = /** @class */ (function () {
    function Qrcode(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
    }
    Qrcode.prototype.ngOnInit = function () { };
    Qrcode.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Qrcode = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-qrcode',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/qrcode/qrcode.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button small clear (click)="dismiss()">\n      <ion-icon ios="ios-arrow-back"></ion-icon>\n    </button>\n    <ion-title>二維碼</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-grid class="grid1">\n    <ion-row class="row1">\n      <ion-col col-10 offset-1>\n        <div class="qr_bg">\n          <div class="top">\n            <img src="../assets/imgs/qrcode_bg1.png" class="image1" alt="">\n            <div class="title">請掃描以下二維碼</div>\n          </div>\n          <div class="bottom">\n            <img src="../assets/imgs/qrcode_bg2.png" class="image1" alt="">\n            <div class="con">\n              <qr-code [value]="\'All QR Code data goes here!\'" [size]="500"></qr-code>\n            </div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class="row2">\n      <ion-col col-10 offset-1>\n        <img src="../assets/imgs/banner.png" class="image1">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/qrcode/qrcode.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], Qrcode);
    return Qrcode;
}());

//# sourceMappingURL=qrcode.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Setup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_card_merchant_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__usermgt__ = __webpack_require__(393);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Setup = /** @class */ (function () {
    function Setup(platform, cardMerchantService, modalCtrl, navCtrl, nativeStorage, viewCtrl) {
        this.platform = platform;
        this.cardMerchantService = cardMerchantService;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.nativeStorage = nativeStorage;
        this.viewCtrl = viewCtrl;
    }
    Setup.prototype.ngOnInit = function () {
    };
    Setup.prototype.openUserMgt = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__usermgt__["a" /* UserMgt */]);
        modal.present();
    };
    Setup.prototype.goBack = function () {
        this.viewCtrl.dismiss();
    };
    Setup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-setup',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/setup/setup.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button small clear (click)="goBack()">\n			<ion-icon ios="ios-arrow-back"></ion-icon>\n		</button>\n		<ion-title>設置</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-list no-lines class="item_list">\n		<button ion-item (click)="openUserMgt()">\n			用戶管理\n		</button>\n	</ion-list>\n</ion-content>'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/setup/setup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__service_card_merchant_service__["a" /* CardMerchantService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], Setup);
    return Setup;
}());

//# sourceMappingURL=setup.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMgt; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_card_merchant_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__adduser__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__userdetail__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_tip_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserMgt = /** @class */ (function () {
    function UserMgt(platform, cardMerchantService, nativeStorage, viewCtrl, modalCtrl, navCtrl, alertCtrl, loadingCtrl, tipService) {
        this.platform = platform;
        this.cardMerchantService = cardMerchantService;
        this.nativeStorage = nativeStorage;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.tipService = tipService;
    }
    UserMgt.prototype.ngOnInit = function () {
    };
    UserMgt.prototype.ionViewWillEnter = function () {
        var _this = this;
        var data = localStorage.getItem('SESSIONID');
        this.cardMerchantService.getSecondUsers(data).toPromise().then(function (data) {
            console.log(data);
            if (Object(data).code == 0) {
                _this.userList = Object(data).data;
            }
            else {
                _this.alertCtrl.create({
                    message: Object(data).message,
                    buttons: ['确定']
                }).present();
            }
        }, function () {
            _this.loadingCtrl.create({
                spinner: 'hide',
                content: '网络故障',
                duration: 2000
            }).present();
        });
    };
    UserMgt.prototype.openUserDetail = function (user) {
        console.log(user);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__userdetail__["a" /* UserDetail */], { user: user });
        modal.present();
    };
    UserMgt.prototype.addUser = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__adduser__["a" /* AddUser */]);
        modal.present();
    };
    UserMgt.prototype.delUser = function (e, userid) {
        var _this = this;
        console.log(e);
        e.stopPropagation();
        this.alertCtrl.create({
            message: '您确定要删除用户？',
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '确定',
                    role: 'confirm',
                    handler: function () {
                        var data = {
                            Sessionid: localStorage.getItem('SESSIONID'),
                            deleteuid: userid
                        };
                        console.log(data);
                        var loading = _this.loadingCtrl.create({
                            content: 'Please wait...'
                        });
                        loading.present();
                        _this.cardMerchantService.deleteseconduser(data).toPromise().then(function (data) {
                            console.log(Object(data));
                            loading.dismiss();
                            if (Object(data).code == 0) {
                                _this.tipService.show('提交成功').then(function () {
                                    _this.viewCtrl.dismiss();
                                });
                            }
                            else {
                                _this.alertCtrl.create({
                                    message: Object(data).message,
                                    buttons: ['确定']
                                }).present();
                            }
                        });
                    }
                }
            ]
        }).present();
    };
    UserMgt.prototype.goBack = function () {
        //this.viewCtrl.dismiss();
        this.navCtrl.pop();
    };
    UserMgt = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-usermgt',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/setup/usermgt.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button small clear (click)="goBack()">\n			<ion-icon ios="ios-arrow-back"></ion-icon>\n		</button>\n		<ion-title>用戶管理</ion-title>\n		<button ion-button small clear (click)="addUser()">\n			<ion-icon ios="md-add"></ion-icon>\n		</button>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-list class="useList">\n		<ion-item *ngFor="let user of userList" (click)="openUserDetail(user)">\n			<!-- <ion-icon color="primary" item-start="" name="ionic" role="img" class="icon icon-ios icon-ios-primary ion-ios-ionic item-icon" aria-label="ionic"></ion-icon> -->\n			<ion-avatar item-start>\n				<img src="../assets/imgs/head.png" class="image1">\n			</ion-avatar>\n			<ul class="center">\n				<li>{{user.field2}}</li>\n				<li>{{user.field1}}</li>\n				<li>{{user.field6}}</li>\n			</ul>\n			<img item-end src="../assets/imgs/delete.png" class="image2" alt="删除" (click)="delUser($event,user.sequence)">\n		</ion-item>\n	</ion-list>\n</ion-content>'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/setup/usermgt.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__service_card_merchant_service__["a" /* CardMerchantService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__service_tip_service__["a" /* TipService */]])
    ], UserMgt);
    return UserMgt;
}());

//# sourceMappingURL=usermgt.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_card_merchant_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_tip_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddUser = /** @class */ (function () {
    function AddUser(platform, cardMerchantService, nativeStorage, alertCtrl, loadingCtrl, viewCtrl, modalCtrl, navCtrl, tipService) {
        this.platform = platform;
        this.cardMerchantService = cardMerchantService;
        this.nativeStorage = nativeStorage;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.tipService = tipService;
    }
    AddUser.prototype.ngOnInit = function () {
        var _this = this;
        var data = {
            merchantId: localStorage.getItem('MERCHANTID'),
            sessionId: localStorage.getItem('SESSIONID')
        };
        console.log(data);
        this.cardMerchantService.getShopList(data).toPromise().then(function (data) {
            console.log(Object(data));
            _this.shopList = Object(data).data[0];
        });
    };
    AddUser.prototype.submitForm = function () {
        var _this = this;
        if (!/^\d{8,11}$/.test(Object(this.Mobile).value)) {
            this.tipService.show('手机号至少8位');
        }
        else {
            var data = {
                sessionid: localStorage.getItem('SESSIONID'),
                mobile: Object(this.Mobile).value,
                name: Object(this.Name).value,
                departmentid: Object(this.Departmentid).value,
            };
            console.log(data);
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait...',
                duration: 5000
            });
            loading_1.present();
            this.cardMerchantService.addUser(data).toPromise().then(function (data) {
                console.log(Object(data));
                loading_1.dismiss();
                if (Object(data).code == 0) {
                    _this.tipService.show('提交成功').then(function () {
                        _this.viewCtrl.dismiss();
                    });
                }
                else {
                    _this.alertCtrl.create({
                        message: Object(data).message,
                        buttons: ['确定']
                    }).present();
                }
            }, function () {
                loading_1.dismiss();
                loading_1 = _this.loadingCtrl.create({
                    spinner: 'hide',
                    content: '网络故障',
                    duration: 2000
                });
                loading_1.present();
            });
        }
    };
    AddUser.prototype.goBack = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mobile'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AddUser.prototype, "Mobile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('name'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AddUser.prototype, "Name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('departmentid'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AddUser.prototype, "Departmentid", void 0);
    AddUser = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-adduser',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/setup/adduser.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button small clear (click)="goBack()">\n			<ion-icon ios="ios-arrow-back"></ion-icon>\n		</button>\n		<ion-title>新增用户</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-list>\n\n		<ion-item>\n			<ion-label floating>手机号</ion-label>\n			<ion-input name="mobile" type="number"  #mobile ></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label floating>姓名</ion-label>\n			<ion-input name="name" type="text" #name ></ion-input>\n		</ion-item>\n		\n		<ion-item>\n			<ion-label floating>门店</ion-label>\n			<ion-select class="select select-ios ng-pristine ng-valid ng-touched" #departmentid >\n				<ion-option *ngFor="let shop of shopList" value="{{shop.departmentId}}" >{{shop.departmentName}}</ion-option>\n			</ion-select>\n		</ion-item>\n		\n    \n	</ion-list>\n\n  <div padding>\n    <button ion-button color="primary" (click)="submitForm()" block>提交</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/setup/adduser.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__service_card_merchant_service__["a" /* CardMerchantService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__service_tip_service__["a" /* TipService */]])
    ], AddUser);
    return AddUser;
}());

//# sourceMappingURL=adduser.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_card_merchant_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserDetail = /** @class */ (function () {
    function UserDetail(platform, cardMerchantService, nativeStorage, viewCtrl, modalCtrl, navCtrl, params) {
        this.platform = platform;
        this.cardMerchantService = cardMerchantService;
        this.nativeStorage = nativeStorage;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.params = params;
    }
    UserDetail.prototype.ngOnInit = function () {
        console.log(this.params.get('user'));
        this.user = this.params.get('user');
    };
    UserDetail.prototype.goBack = function () {
        this.viewCtrl.dismiss();
    };
    UserDetail = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-userdetail',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/setup/userdetail.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button start (click)="goBack()">返回</button>\n    <ion-title style="text-align:center;" >用户详情</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-grid>\n		<ion-row>\n			<ion-col>\n				branch：\n			</ion-col>\n			<ion-col>\n				{{user.branch}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				createby：\n			</ion-col>\n			<ion-col>\n				{{user.createby}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				currdept：\n			</ion-col>\n			<ion-col>\n				{{user.currdept}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				currpeople：\n			</ion-col>\n			<ion-col>\n				{{user.currpeople}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				datetime：\n			</ion-col>\n			<ion-col>\n				{{user.datetime}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				field1：\n			</ion-col>\n			<ion-col>\n				{{user.field1}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				field2：\n			</ion-col>\n			<ion-col>\n				{{user.field2}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				field3：\n			</ion-col>\n			<ion-col>\n				{{user.field3}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				field4：\n			</ion-col>\n			<ion-col>\n				{{user.field4}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				field5：\n			</ion-col>\n			<ion-col>\n				{{user.field5}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				field6：\n			</ion-col>\n			<ion-col>\n				{{user.field6}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				field7：\n			</ion-col>\n			<ion-col>\n				{{user.field7}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				field8：\n			</ion-col>\n			<ion-col>\n				{{user.field8}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				field9：\n			</ion-col>\n			<ion-col>\n				{{user.field9}}\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/setup/userdetail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1__service_card_merchant_service__["a" /* CardMerchantService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */]])
    ], UserDetail);
    return UserDetail;
}());

//# sourceMappingURL=userdetail.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Machine; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_card_merchant_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__machinerequest__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__machinerequestdetail__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_tip_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var Machine = /** @class */ (function () {
    function Machine(viewCtrl, modalCtrl, navCtrl, nativeStorage, loadingCtrl, alertCtrl, tipService, cardMerchantService) {
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.nativeStorage = nativeStorage;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.tipService = tipService;
        this.cardMerchantService = cardMerchantService;
    }
    Machine.prototype.ngOnInit = function () {
    };
    Machine.prototype.ionViewWillEnter = function () {
        var _this = this;
        var data = {
            sessionid: localStorage.getItem('SESSIONID'),
            field1: 2 //1-退款列表 2-机器问题列表
        };
        console.log(data);
        this.cardMerchantService.getrequestlist(data).toPromise().then(function (data) {
            console.log(Object(data));
            if (Object(data).code == 0) {
                _this.items = Object(data).data;
            }
            else {
                _this.alertCtrl.create({
                    message: Object(data).message,
                    buttons: ['确定']
                }).present();
            }
        }, function () {
            _this.loadingCtrl.create({
                spinner: 'hide',
                content: '网络故障',
                duration: 2000
            }).present();
        });
    };
    Machine.prototype.goMachineRequest = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__machinerequest__["a" /* MachineRequest */]);
        modal.present();
    };
    Machine.prototype.openMachineRequestDetail = function (item) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__machinerequestdetail__["a" /* MachineRequestDetail */], { item: item });
        modal.present();
    };
    Machine.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Machine = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-machine',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/machine/machine.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button small clear (click)="dismiss()">\n            <ion-icon ios="ios-arrow-back"></ion-icon>\n        </button>\n        <ion-title>机器报修</ion-title>\n        <button ion-button small clear (click)="goMachineRequest()">\n            <ion-icon ios="md-add"></ion-icon>\n        </button>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n		<button ion-item class="item item-block item-ios" *ngFor="let item of items" (click)="openMachineRequestDetail(item)">\n			{{item.datetime}}/{{item.currpeople}}\n			<div class="button-effect"></div>\n		</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/machine/machine.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__service_tip_service__["a" /* TipService */],
            __WEBPACK_IMPORTED_MODULE_2__service_card_merchant_service__["a" /* CardMerchantService */]])
    ], Machine);
    return Machine;
}());

//# sourceMappingURL=machine.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MachineRequest; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_card_merchant_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_tip_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MachineRequest = /** @class */ (function () {
    function MachineRequest(cardMerchantService, camera, viewCtrl, loadingCtrl, alertCtrl, tipService) {
        this.cardMerchantService = cardMerchantService;
        this.camera = camera;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.tipService = tipService;
        this.needView = true;
    }
    MachineRequest.prototype.ngOnInit = function () {
        console.log(this);
        this.items = ["机器", "纸张", "屏幕"];
        this.base64Image = 'data:image/gif;base64,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';
    };
    MachineRequest.prototype.openCamera = function () {
        var _this = this;
        //手機上使用部分開始
        var options = {
            quality: 80,
            targetWidth: 600,
            targetHeight: 1200,
            //allowEdit: true,
            sourceType: 1,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = imageData;
            _this.base64Image = 'data:image/jpeg;base64,' + _this.base64Image;
            _this.needView = true;
        });
    };
    MachineRequest.prototype.submitForm = function () {
        var _this = this;
        var data = {
            sessionid: localStorage.getItem('SESSIONID'),
            machinemerchantid: localStorage.getItem("MERCHANTID"),
            machinemerchantname: localStorage.getItem("MERCHANTNAME"),
            machinedepartmentid: localStorage.getItem("DEPARTMENTID"),
            machinedepartmentname: localStorage.getItem("DEPARTMENTNAME"),
            machinerequesttype: Object(this.machinerequesttype).value,
            machineno: Object(this.machineno).value,
            machineapplyname: Object(this.machineapplyname).value,
            machineapplymobile: Object(this.machineapplymobile).value,
            machinerequestdesc: Object(this.machinerequestdesc).value,
            machineattach: this.base64Image
        };
        console.log(data);
        var loading = this.loadingCtrl.create({
            content: 'Please wait...',
            duration: 5000
        });
        loading.present();
        this.cardMerchantService.addmachinerequest(data).toPromise().then(function (data) {
            console.log(Object(data));
            loading.dismiss();
            if (Object(data).code == 0) {
                _this.tipService.show('提交成功').then(function () {
                    _this.viewCtrl.dismiss();
                });
            }
            else {
                _this.alertCtrl.create({
                    message: Object(data).message,
                    buttons: ['确定']
                }).present();
            }
        }, function () {
            loading.dismiss();
            loading = _this.loadingCtrl.create({
                spinner: 'hide',
                content: '网络故障',
                duration: 2000
            });
            loading.present();
        });
    };
    MachineRequest.prototype.goBack = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('machinerequesttype'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], MachineRequest.prototype, "machinerequesttype", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('machineno'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], MachineRequest.prototype, "machineno", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('machineapplyname'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], MachineRequest.prototype, "machineapplyname", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('machineapplymobile'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], MachineRequest.prototype, "machineapplymobile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('machinerequestdesc'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], MachineRequest.prototype, "machinerequestdesc", void 0);
    MachineRequest = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-machinerequest',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/machine/machinerequest.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button small clear (click)="goBack()">\n            <ion-icon ios="ios-arrow-back"></ion-icon>\n        </button>\n        <ion-title>機器問題報修</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>问题类型</ion-label>\n      <ion-select class="select select-ios ng-pristine ng-valid ng-touched" #machinerequesttype >\n		<ion-option *ngFor="let item of items" value="{{item}}" >{{item}}</ion-option>\n	  </ion-select>\n    </ion-item>\n	<ion-item>\n      <ion-label floating>机器编号</ion-label>\n      <ion-input type="text" #machineno ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>机器名称</ion-label>\n      <ion-input type="text" #machineapplyname ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>联系电话</ion-label>\n      <ion-input type="text" #machineapplymobile ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>机器问题描述</ion-label>\n      <ion-input type="text" #machinerequestdesc ></ion-input>\n    </ion-item>\n	<ion-item>\n		<button ion-button (click)="openCamera()" >拍照/附件</button>\n		<div *ngIf="needView" class="pic-wrapper" >\n			<img [src]="base64Image" width="100" height="100" />\n		</div>\n    </ion-item>\n  </ion-list>\n\n  <div padding>\n    <button ion-button color="primary" (click)="submitForm()" block>提交</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/machine/machinerequest.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_card_merchant_service__["a" /* CardMerchantService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__service_tip_service__["a" /* TipService */]])
    ], MachineRequest);
    return MachineRequest;
}());

//# sourceMappingURL=machinerequest.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MachineRequestDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_card_merchant_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MachineRequestDetail = /** @class */ (function () {
    function MachineRequestDetail(platform, cardMerchantService, nativeStorage, viewCtrl, modalCtrl, navCtrl, params) {
        this.platform = platform;
        this.cardMerchantService = cardMerchantService;
        this.nativeStorage = nativeStorage;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.params = params;
    }
    MachineRequestDetail.prototype.ngOnInit = function () {
        console.log(this.params.get('item'));
        this.item = this.params.get('item');
    };
    MachineRequestDetail.prototype.goBack = function () {
        this.viewCtrl.dismiss();
    };
    MachineRequestDetail = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-machinerequestdetail',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/machine/machinerequestdetail.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button start (click)="goBack()">返回</button>\n    <ion-title style="text-align:center;" >机修详情</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-grid>\n		<ion-row>\n			<ion-col>\n				branch：\n			</ion-col>\n			<ion-col>\n				{{item.branch}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				createby：\n			</ion-col>\n			<ion-col>\n				{{item.createby}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				currdept：\n			</ion-col>\n			<ion-col>\n				{{item.currdept}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				currpeople：\n			</ion-col>\n			<ion-col>\n				{{item.currpeople}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				datetime：\n			</ion-col>\n			<ion-col>\n				{{item.datetime}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				field1：\n			</ion-col>\n			<ion-col>\n				{{item.field1}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				field2：\n			</ion-col>\n			<ion-col>\n				{{item.field2}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				field3：\n			</ion-col>\n			<ion-col>\n				{{item.field3}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				field4：\n			</ion-col>\n			<ion-col>\n				{{item.field4}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				field5：\n			</ion-col>\n			<ion-col>\n				{{item.field5}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				field6：\n			</ion-col>\n			<ion-col>\n				{{item.field6}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				field7：\n			</ion-col>\n			<ion-col>\n				{{item.field7}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				field8：\n			</ion-col>\n			<ion-col>\n				{{item.field8}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				field9：\n			</ion-col>\n			<ion-col>\n				{{item.field9}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				field10：\n			</ion-col>\n			<ion-col>\n				{{item.field10}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				field11：\n			</ion-col>\n			<ion-col>\n				{{item.field11}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				field12：\n			</ion-col>\n			<ion-col>\n				{{item.field12}}\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/machine/machinerequestdetail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1__service_card_merchant_service__["a" /* CardMerchantService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */]])
    ], MachineRequestDetail);
    return MachineRequestDetail;
}());

//# sourceMappingURL=machinerequestdetail.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = counterReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_counter_actions__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__status_counter_state__ = __webpack_require__(402);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


function counterReducer(state, action) {
    if (state === void 0) { state = __WEBPACK_IMPORTED_MODULE_1__status_counter_state__["a" /* counterInitialState */]; }
    console.log(action);
    switch (action.type) {
        // case CounterActions.Types.INCREMENT:
        //
        //     return {
        //         ...state,
        //         total: state.total + 1
        //
        //
        //     };
        case __WEBPACK_IMPORTED_MODULE_0__actions_counter_actions__["a" /* CounterActions */].Types.DECREMENT:
            return __assign({}, state, { total: state.total - 1 });
        case __WEBPACK_IMPORTED_MODULE_0__actions_counter_actions__["a" /* CounterActions */].Types.INCREMENT_SUCCESS:
            console.log(action.payload);
            return __assign({}, state, { total: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__actions_counter_actions__["a" /* CounterActions */].Types.RESET_SUCCESS:
            console.log(action.payload);
            return __assign({}, state, { total: action.payload });
        //return counterInitialState;
        default: {
            return state;
        }
    }
}
//# sourceMappingURL=counter.reducer.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CounterActions; });
var CounterActions;
(function (CounterActions) {
    CounterActions.Types = {
        INCREMENT: '[Counter] Increment',
        DECREMENT: '[Counter] Decrement',
        RESET: '[Counter] Reset',
        RESET_SUCCESS: '[Counter] ResetSucess',
        INCREMENT_SUCCESS: '[Counter] IncrementSucess'
    };
    var IncrementAction = /** @class */ (function () {
        function IncrementAction(payload) {
            this.payload = payload;
            this.type = CounterActions.Types.INCREMENT;
        }
        return IncrementAction;
    }());
    CounterActions.IncrementAction = IncrementAction;
    var DecrementAction = /** @class */ (function () {
        function DecrementAction(payload) {
            this.payload = payload;
            this.type = CounterActions.Types.DECREMENT;
        }
        return DecrementAction;
    }());
    CounterActions.DecrementAction = DecrementAction;
    var ResetAction = /** @class */ (function () {
        function ResetAction(payload) {
            this.payload = payload;
            this.type = CounterActions.Types.RESET;
            console.log('ResetAction');
        }
        return ResetAction;
    }());
    CounterActions.ResetAction = ResetAction;
    var ResetSuccessAction = /** @class */ (function () {
        function ResetSuccessAction(payload) {
            this.payload = payload;
            this.type = CounterActions.Types.RESET_SUCCESS;
            console.log('ResetSuccessAction');
        }
        return ResetSuccessAction;
    }());
    CounterActions.ResetSuccessAction = ResetSuccessAction;
    var IncrementSuccessAction = /** @class */ (function () {
        function IncrementSuccessAction(payload) {
            this.payload = payload;
            this.type = CounterActions.Types.INCREMENT_SUCCESS;
            this.ss = this.payload;
            console.log('IncrementSuccessAction', payload);
        }
        return IncrementSuccessAction;
    }());
    CounterActions.IncrementSuccessAction = IncrementSuccessAction;
})(CounterActions || (CounterActions = {}));
//# sourceMappingURL=counter.actions.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return counterInitialState; });
//  import { HttpClient,HttpHeaders } from '@angular/common/http';
// import 'rxjs/add/operator/toPromise';
var counterInitialState = {
    total: 0
};
//# sourceMappingURL=counter.state.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(408);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_auth_signin__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_setup_setup__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_setup_usermgt__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_setup_adduser__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_setup_userdetail__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_index_index__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ngrx_effects__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ngrx_store__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ngrx_store_devtools__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__nrwl_nx__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_reducer__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__reducers_counter_reducer__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__status_counter_state__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__effects_counter_effects__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_common_http__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__service_counter_service__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__service_card_merchant_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__service_tip_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__swimlane_ngx_datatable__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__jiguang_ionic_jpush__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_home_binsearch_binsearch__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_home_custservice_custservice__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_home_refund_refund__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_home_refund_refundverify__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_home_refund_refundprogress__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_home_refund_refunddetail__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_home_refund_commonrefund__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_home_refund_weixinrefund__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_home_refund_showimage__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_home_wrongtrx_wrongtrx__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_home_refund_orderrefund__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_home_qrcode_qrcode__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_angular2_qrcode__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_camera__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_native_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_device__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_home_machine_machine__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_home_machine_machinerequest__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_home_machine_machinerequestdetail__ = __webpack_require__(398);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














































//import {CounterService,Sse} from "../service/counter.service";



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_auth_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_home_binsearch_binsearch__["a" /* Binsearch */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_index_index__["a" /* IndexPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_home_custservice_custservice__["a" /* Custservice */],
                __WEBPACK_IMPORTED_MODULE_32__pages_home_refund_refund__["a" /* Refund */],
                __WEBPACK_IMPORTED_MODULE_33__pages_home_refund_refundverify__["a" /* RefundVerify */],
                __WEBPACK_IMPORTED_MODULE_34__pages_home_refund_refundprogress__["a" /* RefundProgress */],
                __WEBPACK_IMPORTED_MODULE_35__pages_home_refund_refunddetail__["a" /* RefundDetail */],
                __WEBPACK_IMPORTED_MODULE_36__pages_home_refund_commonrefund__["a" /* CommonRefund */],
                __WEBPACK_IMPORTED_MODULE_37__pages_home_refund_weixinrefund__["a" /* WeixinRefund */],
                __WEBPACK_IMPORTED_MODULE_38__pages_home_refund_showimage__["a" /* ShowImage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_setup_setup__["a" /* Setup */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_setup_usermgt__["a" /* UserMgt */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_setup_adduser__["a" /* AddUser */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_setup_userdetail__["a" /* UserDetail */],
                __WEBPACK_IMPORTED_MODULE_39__pages_home_wrongtrx_wrongtrx__["a" /* Wrongtrx */],
                __WEBPACK_IMPORTED_MODULE_40__pages_home_refund_orderrefund__["a" /* OrderRefund */],
                __WEBPACK_IMPORTED_MODULE_41__pages_home_qrcode_qrcode__["a" /* Qrcode */],
                __WEBPACK_IMPORTED_MODULE_46__pages_home_machine_machine__["a" /* Machine */],
                __WEBPACK_IMPORTED_MODULE_47__pages_home_machine_machinerequest__["a" /* MachineRequest */],
                __WEBPACK_IMPORTED_MODULE_48__pages_home_machine_machinerequestdetail__["a" /* MachineRequestDetail */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_42_angular2_qrcode__["a" /* QRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    backButtonText: '返回', iconMode: 'ios',
                    mode: 'ios',
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["j" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_20__app_reducer__["a" /* reducers */]),
                __WEBPACK_IMPORTED_MODULE_16__ngrx_effects__["c" /* EffectsModule */].forRoot([]),
                __WEBPACK_IMPORTED_MODULE_18__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument({ maxAge: 25 }),
                __WEBPACK_IMPORTED_MODULE_19__nrwl_nx__["a" /* NxModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["j" /* StoreModule */].forFeature('counter', __WEBPACK_IMPORTED_MODULE_21__reducers_counter_reducer__["a" /* counterReducer */], { initialState: __WEBPACK_IMPORTED_MODULE_22__status_counter_state__["a" /* counterInitialState */] }),
                __WEBPACK_IMPORTED_MODULE_16__ngrx_effects__["c" /* EffectsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_23__effects_counter_effects__["a" /* CounterEffects */]]),
                __WEBPACK_IMPORTED_MODULE_28__swimlane_ngx_datatable__["NgxDatatableModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_auth_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_index_index__["a" /* IndexPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_home_binsearch_binsearch__["a" /* Binsearch */],
                __WEBPACK_IMPORTED_MODULE_31__pages_home_custservice_custservice__["a" /* Custservice */],
                __WEBPACK_IMPORTED_MODULE_32__pages_home_refund_refund__["a" /* Refund */],
                __WEBPACK_IMPORTED_MODULE_33__pages_home_refund_refundverify__["a" /* RefundVerify */],
                __WEBPACK_IMPORTED_MODULE_34__pages_home_refund_refundprogress__["a" /* RefundProgress */],
                __WEBPACK_IMPORTED_MODULE_35__pages_home_refund_refunddetail__["a" /* RefundDetail */],
                __WEBPACK_IMPORTED_MODULE_36__pages_home_refund_commonrefund__["a" /* CommonRefund */],
                __WEBPACK_IMPORTED_MODULE_37__pages_home_refund_weixinrefund__["a" /* WeixinRefund */],
                __WEBPACK_IMPORTED_MODULE_38__pages_home_refund_showimage__["a" /* ShowImage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_setup_setup__["a" /* Setup */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_setup_usermgt__["a" /* UserMgt */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_setup_adduser__["a" /* AddUser */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_setup_userdetail__["a" /* UserDetail */],
                __WEBPACK_IMPORTED_MODULE_39__pages_home_wrongtrx_wrongtrx__["a" /* Wrongtrx */],
                __WEBPACK_IMPORTED_MODULE_40__pages_home_refund_orderrefund__["a" /* OrderRefund */],
                __WEBPACK_IMPORTED_MODULE_41__pages_home_qrcode_qrcode__["a" /* Qrcode */],
                __WEBPACK_IMPORTED_MODULE_46__pages_home_machine_machine__["a" /* Machine */],
                __WEBPACK_IMPORTED_MODULE_47__pages_home_machine_machinerequest__["a" /* MachineRequest */],
                __WEBPACK_IMPORTED_MODULE_48__pages_home_machine_machinerequestdetail__["a" /* MachineRequestDetail */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_43__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_29__jiguang_ionic_jpush__["a" /* JPush */],
                __WEBPACK_IMPORTED_MODULE_25__service_counter_service__["a" /* CounterService */],
                __WEBPACK_IMPORTED_MODULE_26__service_card_merchant_service__["a" /* CardMerchantService */],
                __WEBPACK_IMPORTED_MODULE_27__service_tip_service__["a" /* TipService */],
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_45__ionic_native_device__["a" /* Device */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_auth_signin__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jiguang_ionic_jpush__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import {TabsPage} from "../pages/tabs/tabs";


var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, jpush, nativeStorage) {
        var _this = this;
        //rootPage:any = TabsPage;
        //rootPage:any = SigninPage;
        this.rootPage = null;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            jpush.init();
            jpush.setDebugMode(true);
            console.log("Myapp:");
            //nativeStorage.getItem("SESSIONID").then(data=>console.log(data));
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_auth_signin__["a" /* SigninPage */];
            //this.rootPage = TabsPage;
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__jiguang_ionic_jpush__["a" /* JPush */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_card_merchant_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_tip_service__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderList = /** @class */ (function () {
    function OrderList(viewCtrl, modalCtrl, navCtrl, nativeStorage, loadingCtrl, alertCtrl, tipService, cardMerchantService) {
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.nativeStorage = nativeStorage;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.tipService = tipService;
        this.cardMerchantService = cardMerchantService;
    }
    OrderList.prototype.ngOnInit = function () {
    };
    OrderList.prototype.ionViewWillEnter = function () {
        var _this = this;
        var data = {
            sessionid: localStorage.getItem('SESSIONID'),
            field1: 2 //1-退款列表 2-机器问题列表
        };
        console.log(data);
        this.cardMerchantService.getrequestlist(data).toPromise().then(function (data) {
            console.log(Object(data));
            if (Object(data).code == 0) {
                _this.items = Object(data).data;
            }
            else {
                _this.alertCtrl.create({
                    message: Object(data).message,
                    buttons: ['确定']
                }).present();
            }
        }, function () {
            _this.loadingCtrl.create({
                spinner: 'hide',
                content: '网络故障',
                duration: 2000
            }).present();
        });
    };
    OrderList.prototype.goMachineRequest = function () {
    };
    OrderList.prototype.openMachineRequestDetail = function (item) {
    };
    OrderList.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    OrderList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-orderlist',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/order/orderlist.html"*/'<ion-header>\n    <ion-navbar>\n        <button ion-button small clear (click)="dismiss()">\n            <ion-icon ios="ios-arrow-back"></ion-icon>\n        </button>\n        <ion-title>订单列表</ion-title>\n        <button ion-button small clear (click)="goMachineRequest()">\n            <ion-icon ios="md-add"></ion-icon>\n        </button>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n		<button ion-item class="item item-block item-ios" *ngFor="let item of items" (click)="openMachineRequestDetail(item)">\n			{{item.datetime}}/{{item.currpeople}}\n			<div class="button-effect"></div>\n		</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/order/orderlist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__service_tip_service__["a" /* TipService */],
            __WEBPACK_IMPORTED_MODULE_2__service_card_merchant_service__["a" /* CardMerchantService */]])
    ], OrderList);
    return OrderList;
}());

//# sourceMappingURL=orderlist.js.map

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(399);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndexPage = /** @class */ (function () {
    function IndexPage(router) {
        this.router = router;
        this.tabsData = [
            { title: '商戶服務', url: '/index/home', classname: 'home' },
            { title: '交易報表', url: '/index/about', classname: 'paper' },
            { title: '我的信息', url: '/index/user', classname: 'contacts' }
        ];
    }
    IndexPage.prototype.goHome = function () {
        this.router.navigate(['index/home']);
    };
    IndexPage.prototype.goAbout = function () {
        this.router.navigate(['index/about']);
    };
    IndexPage.prototype.goUser = function () {
        this.router.navigate(['index/user']);
    };
    IndexPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-index',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/index/index.html"*/'<ion-tabs>\n    <ion-tab [root]="tabsData" ></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/index/index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], IndexPage);
    return IndexPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducers_counter_reducer__ = __webpack_require__(400);

var reducers = {
    counter: __WEBPACK_IMPORTED_MODULE_0__reducers_counter_reducer__["a" /* counterReducer */]
};
//# sourceMappingURL=app.reducer.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CounterEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_counter_actions__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_counter_service__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CounterEffects = /** @class */ (function () {
    function CounterEffects(actions$, counterService) {
        var _this = this;
        this.actions$ = actions$;
        this.counterService = counterService;
        // @Effect() resetSuccess$ = this.actions$.pipe(
        //     ofType(CounterActions.Types.RESET),
        //     map(() => new CounterActions.ResetSuccessAction(1))
        // );
        this.resetSuccess$ = this.actions$.pipe(Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["d" /* ofType */])(__WEBPACK_IMPORTED_MODULE_3__actions_counter_actions__["a" /* CounterActions */].Types.RESET), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["switchMap"])(function (_) {
            return _this.counterService.getValue().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) { return new __WEBPACK_IMPORTED_MODULE_3__actions_counter_actions__["a" /* CounterActions */].IncrementSuccessAction(parseInt(data.toString())); }));
        }));
        // @Effect() incrementSuccess$ = this.actions$.pipe
        // (ofType(CounterActions.Types.INCREMENT),
        //     switchMap(_ => this.counterService.doAdd()
        //         .toPromise()
        //         .then(data=>{console.log(data)})
        //
        //     ),
        //     map((data)=>new CounterActions.IncrementSuccessAction(data)
        //         ));
        this.incrementSuccess$ = this.actions$.pipe(Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["d" /* ofType */])(__WEBPACK_IMPORTED_MODULE_3__actions_counter_actions__["a" /* CounterActions */].Types.INCREMENT), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["switchMap"])(function (_) {
            return _this.counterService.doAdd().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["map"])(function (data) { return new __WEBPACK_IMPORTED_MODULE_3__actions_counter_actions__["a" /* CounterActions */].IncrementSuccessAction(parseInt(data.toString())); }));
        }));
        //constructor(private actions$: Actions ) {
        console.log('CounterEffects');
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], CounterEffects.prototype, "resetSuccess$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], CounterEffects.prototype, "incrementSuccess$", void 0);
    CounterEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */], __WEBPACK_IMPORTED_MODULE_4__service_counter_service__["a" /* CounterService */]])
    ], CounterEffects);
    return CounterEffects;
}());

//# sourceMappingURL=counter.effects.js.map

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Binsearch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Binsearch = /** @class */ (function () {
    function Binsearch(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
    }
    Binsearch.prototype.ngOnInit = function () { };
    Binsearch.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Binsearch = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/binsearch/binsearch.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button small clear (click)="dismiss()">\n      <ion-icon ios="ios-arrow-back"></ion-icon>\n    </button>\n    <ion-title>查詢卡號</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>卡Bin</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <div padding>\n    <button ion-button color="primary" block>查詢</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/binsearch/binsearch.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], Binsearch);
    return Binsearch;
}());

//# sourceMappingURL=binsearch.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Custservice; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Custservice = /** @class */ (function () {
    function Custservice(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
    }
    Custservice.prototype.ngOnInit = function () { };
    Custservice.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Custservice = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/custservice/custservice.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button small clear (click)="dismiss()">\n      <ion-icon ios="ios-arrow-back"></ion-icon>\n    </button>\n    <ion-title>客服</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>問題種類</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>MID</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>機具型號</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>聯絡人</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>聯絡人電話</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>問題描述</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>附件</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <div padding>\n    <button ion-button color="primary" block>提交</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/custservice/custservice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], Custservice);
    return Custservice;
}());

//# sourceMappingURL=custservice.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefundDetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_card_merchant_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RefundDetail = /** @class */ (function () {
    function RefundDetail(platform, cardMerchantService, nativeStorage, viewCtrl, modalCtrl, navCtrl, params) {
        this.platform = platform;
        this.cardMerchantService = cardMerchantService;
        this.nativeStorage = nativeStorage;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.params = params;
    }
    RefundDetail.prototype.ngOnInit = function () {
        console.log(this.params.get('item'));
        this.item = this.params.get('item');
    };
    RefundDetail.prototype.goBack = function () {
        this.viewCtrl.dismiss();
    };
    RefundDetail = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-refunddetail',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/refund/refunddetail.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button start (click)="goBack()">返回</button>\n    <ion-title style="text-align:center;" >退款详情</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-grid>\n		<ion-row>\n			<ion-col>\n				branch：\n			</ion-col>\n			<ion-col>\n				{{item.branch}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				createby：\n			</ion-col>\n			<ion-col>\n				{{item.createby}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				currdept：\n			</ion-col>\n			<ion-col>\n				{{item.currdept}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				currpeople：\n			</ion-col>\n			<ion-col>\n				{{item.currpeople}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				datetime：\n			</ion-col>\n			<ion-col>\n				{{item.datetime}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				field1：\n			</ion-col>\n			<ion-col>\n				{{item.field1}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				field2：\n			</ion-col>\n			<ion-col>\n				{{item.field2}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				field3：\n			</ion-col>\n			<ion-col>\n				{{item.field3}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				field4：\n			</ion-col>\n			<ion-col>\n				{{item.field4}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				field5：\n			</ion-col>\n			<ion-col>\n				{{item.field5}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				field6：\n			</ion-col>\n			<ion-col>\n				{{item.field6}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				field7：\n			</ion-col>\n			<ion-col>\n				{{item.field7}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				field8：\n			</ion-col>\n			<ion-col>\n				{{item.field8}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				field9：\n			</ion-col>\n			<ion-col>\n				{{item.field9}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				field10：\n			</ion-col>\n			<ion-col>\n				{{item.field10}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				field11：\n			</ion-col>\n			<ion-col>\n				{{item.field11}}\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col>\n				field12：\n			</ion-col>\n			<ion-col>\n				{{item.field12}}\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/refund/refunddetail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1__service_card_merchant_service__["a" /* CardMerchantService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavParams */]])
    ], RefundDetail);
    return RefundDetail;
}());

//# sourceMappingURL=refunddetail.js.map

/***/ })

},[403]);
//# sourceMappingURL=main.js.map