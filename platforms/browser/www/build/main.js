webpackJsonp([0],{

/***/ 157:
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

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_card_merchant_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(42);
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
    function ContactPage(cardMerchantService, nativeStorage) {
        this.cardMerchantService = cardMerchantService;
        this.nativeStorage = nativeStorage;
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
        this.nativeStorage.getItem('SESSIONID')
            .then(function (data) {
            console.log(data);
            _this.cardMerchantService.getSecondUsers(data).toPromise().then(function (data) {
                console.log(data);
                console.log((Object(data).data)[0].FIELD1);
                _this.users = Object(data).data;
            });
        }, function (error) { return console.error(error); });
    };
    ContactPage.prototype.test5 = function () {
        localStorage.clear();
        //this.navCtrl.push(SigninPage);
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n    <ion-item>\n      <ion-input #mobile1 type="tel" placeholder="Mobile Input" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input #verifycode1 type="tel" placeholder="VerifyCode Input" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <button (click)="test(mobile1.value)">send verifycode</button>\n      <button (click)="test2(mobile1.value,verifycode1.value)">check verifycode</button>\n      <!--<button (click)="test(\'66767311\')">send verifycode</button>-->\n      <!--<button (click)="test2(\'66767311\',\'960938\')">check verifycode</button>-->\n      <button (click)="test3()">get UID</button>\n      <button (click)="test4()">get second users</button>\n    </ion-item>\n      <ion-item>\n\n      <button (click)="test5()">log out</button>\n      </ion-item>\n  </ion-list>\n  <tr *ngFor="let content of users">\n    <td>{{content.FIELD1}}</td>\n    <td>{{content.FIELD6}}</td>\n    <td>{{content.FIELD3}}</td>\n  </tr>\n</ion-content>\n'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/contact/contact.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__service_card_merchant_service__["a" /* CardMerchantService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_card_merchant_service__["a" /* CardMerchantService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_counter_service__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__refund_refund__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_binsarch__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_wrongtrx__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_custservice__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__qrcode_qrcode__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__jiguang_ionic_jpush__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_device__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__(31);
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
    function HomePage(store, counterService, camera, jpush, device, modalCtrl, router) {
        var _this = this;
        this.store = store;
        this.counterService = counterService;
        this.camera = camera;
        this.jpush = jpush;
        this.modalCtrl = modalCtrl;
        this.router = router;
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
    }
    HomePage.prototype.getRegistrationID = function () {
        var _this = this;
        this.jpush.getRegistrationID().then(function (rId) {
            _this.registrationId = rId;
        });
    };
    HomePage.prototype.setTags = function () {
        this.jpush
            .setTags({ sequence: this.sequence++, tags: ["Tag1", "Tag2"] })
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
    HomePage.prototype.ngOnInit = function () { };
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
    HomePage.prototype.openBinsarchModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__services_binsarch__["a" /* Binsarch */]);
        modal.present();
    };
    HomePage.prototype.openWrongtrxModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__services_wrongtrx__["a" /* Wrongtrx */]);
        modal.present();
    };
    HomePage.prototype.openCustserviceModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__services_custservice__["a" /* Custservice */]);
        modal.present();
    };
    HomePage.prototype.openQrcodeModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__qrcode_qrcode__["a" /* Qrcode */]);
        modal.present();
    };
    HomePage.prototype.goSetup = function () {
        this.router.navigate(['setup']);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <div style="height: 90px; background-color: #607483;">\n    <ion-grid style="padding-left: 10px; padding-right: 10px;">\n      <ion-row style="color: #ffffff;">\n        <ion-col style="text-align:  center;line-height:  40px; padding: 0px;">\n          <ion-icon name="ios-qr-scanner" style="font-size: 40px;" (click)="openCamera()"></ion-icon>\n        </ion-col>\n        <ion-col style="text-align:  center;line-height:  40px; padding: 0px;">\n          <ion-icon name="ios-barcode-outline" style="font-size: 40px;" (click)="openQrcodeModal()"></ion-icon>\n        </ion-col>\n        <ion-col style="text-align:  center;line-height:  40px; padding: 0px;">\n          <ion-icon name="ios-clipboard-outline" style="font-size: 40px;margin-left: 15px;"></ion-icon><ion-badge color="secondary" style="z-index: 100;margin-left:  -15px;">10</ion-badge>\n        </ion-col>\n        <ion-col style="text-align:  center;line-height:  40px; padding: 0px;">\n          <ion-icon name="ios-contact-outline" style="font-size: 40px;" (click)="goSetup()"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row style="color: #ffffff;">\n        <ion-col style="text-align:  center;line-height:  20px; padding: 0px;">\n          掃碼\n        </ion-col>\n        <ion-col style="text-align:  center;line-height:  20px; padding: 0px;">\n          收款\n        </ion-col>\n        <ion-col style="text-align:  center;line-height:  20px; padding: 0px;">\n          訂單\n        </ion-col>\n        <ion-col style="text-align:  center;line-height:  20px; padding: 0px;">\n          設置\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div>\n    <ion-grid>\n      <ion-row>\n        <ion-col style="border-bottom-width:  1px;border-bottom-style:  solid;border-bottom-color:  #eeeeee;color: #607483;">\n            <div style="width: 6px; background-color: #ff7b7b; height: 20px; float: left;"></div><div style="float: left">&nbsp;基本服務</div>\n        </ion-col>\n      </ion-row>\n      <ion-row style="text-align: center; height: 50px;">\n        <ion-col>\n          <a (click)="openBinsarchModal()"><i class="fa fa-credit-card-alt" aria-hidden="true" padding style="font-size: 22px; background: linear-gradient(to right, #6eb845, #6eb84566);-webkit-background-clip: text;color: transparent;"></i></a><br>\n        </ion-col>\n        <ion-col>\n          <a (click)="openRefundModal()"><i class="fa fa-refresh" aria-hidden="true" padding style="font-size: 26px; background: linear-gradient(to right, #ed4238, #ed423866);-webkit-background-clip: text;color: transparent;"></i></a><br>\n        </ion-col>\n        <ion-col>\n          <a (click)="openWrongtrxModal()"><i class="fa fa-check-square-o" aria-hidden="true" padding style="font-size: 26px; background: linear-gradient(to right, #2eb2a5, #2eb2a566);-webkit-background-clip: text;color: transparent;"></i></a><br>\n        </ion-col>\n        <ion-col>\n          <a (click)="openCustserviceModal()"><i class="fa fa-user-o" aria-hidden="true" padding style="font-size: 26px; background: linear-gradient(to right, #2681b8, #2681b866);-webkit-background-clip: text;color: transparent;"></i></a><br>\n        </ion-col>\n      </ion-row>\n      <ion-row style="text-align: center;">\n        <ion-col>\n          <span style="font-size: 14px; color: #424242;">查詢卡號</span>\n        </ion-col>\n        <ion-col>\n          <span style="font-size: 14px; color: #424242;">退款</span>\n        </ion-col>\n        <ion-col>\n          <span style="font-size: 14px; color: #424242;">差錯交易</span>\n        </ion-col>\n        <ion-col>\n          <span style="font-size: 14px; color: #424242;">客服</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <ion-list>\n    <ion-item>\n      <div>Registration Id: {{registrationId}}</div>\n      <button ion-button full (click)="getRegistrationID()">Get Registration Id</button>\n    </ion-item>\n\n    <ion-item>\n      <button ion-button full (click)="setTags()">Set tags - Tag1, Tag2</button>\n      <button ion-button full (click)="addTags()">Add tags - Tag3, Tag4</button>\n      <button ion-button full (click)="checkTagBindState()">Check tag bind state - Tag1</button>\n      <button ion-button full (click)="deleteTags()">Delete tags - Tag4</button>\n      <button ion-button full (click)="getAllTags()">Get all tags</button>\n      <button ion-button full (click)="cleanTags()">Clean tags</button>\n    </ion-item>\n\n    <ion-item>\n      <button ion-button full (click)="setAlias()">Set Alias - TestAlias</button>\n      <button ion-button full (click)="getAlias()">Get Alias</button>\n      <button ion-button full (click)="deleteAlias()">Delete Alias</button>\n    </ion-item>\n\n    <ion-item>\n      <button ion-button full (click)="addLocalNotification()">Trigger local notification after 5 seconds</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */],
            __WEBPACK_IMPORTED_MODULE_3__service_counter_service__["a" /* CounterService */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_10__jiguang_ionic_jpush__["a" /* JPush */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_device__["a" /* Device */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_12__angular_router__["d" /* Router */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CounterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(289);
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

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardMerchantService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsrsasign__ = __webpack_require__(447);
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
    CardMerchantService.prototype.getShopList = function (data) {
        var str = "merchantId=" + data.merchantId + "&sessionId=" + data.sessionId;
        var sign = this.getSignInit(str);
        var merCert = encodeURIComponent(this.publicKey);
        var url = this.gwUrl + 'cardmerchant/getMerchantInfoByMerchantId?' + str + '&sign=' + sign + '&merCert=' + merCert;
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

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(31);
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
            selector: 'page-index',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/index/index.html"*/'<router-outlet></router-outlet>\n<custom-tabs [items]="tabsData" ></custom-tabs>'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/index/index.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]])
    ], IndexPage);
    return IndexPage;
}());

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Refund; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(31);
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
    function Refund(viewCtrl, router) {
        this.viewCtrl = viewCtrl;
        this.router = router;
    }
    Refund.prototype.ngOnInit = function () { };
    Refund.prototype.goCommonRefund = function () {
        this.viewCtrl.dismiss();
        this.router.navigate(['commonrefund']);
    };
    Refund.prototype.goWeixinRefund = function () {
        this.viewCtrl.dismiss();
        this.router.navigate(['weixinrefund']);
    };
    Refund.prototype.goRefundVerify = function () {
        this.dismiss();
        this.router.navigate(['refundverify']);
    };
    Refund.prototype.goRefundProgress = function () {
        this.viewCtrl.dismiss();
        this.router.navigate(['refundprogress']);
    };
    Refund.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Refund = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/refund/refund.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button start (click)="dismiss()">返回</button>\n    <ion-title>退款</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <a (click)="goCommonRefund()" >普通退款</a>\n    </ion-item>\n	<ion-item>\n      <a (click)="goWeixinRefund()" >微信退款</a>\n    </ion-item>\n	<ion-item>\n      <a (click)="goRefundVerify()" >退款审批</a>\n    </ion-item>\n	<ion-item>\n      <a (click)="goRefundProgress()" >退款进度</a>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/refund/refund.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]])
    ], Refund);
    return Refund;
}());

//# sourceMappingURL=refund.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Binsarch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Binsarch = /** @class */ (function () {
    function Binsarch(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
    }
    Binsarch.prototype.ngOnInit = function () { };
    Binsarch.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Binsarch = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/services/binsearch.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button start (click)="dismiss()">返回</button>\n    <ion-title>查詢卡號</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>卡Bin</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <div padding>\n    <button ion-button color="primary" block>查詢</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/services/binsearch.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */]])
    ], Binsarch);
    return Binsarch;
}());

//# sourceMappingURL=binsarch.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wrongtrx; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
    function Wrongtrx(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
    }
    Wrongtrx.prototype.ngOnInit = function () { };
    Wrongtrx.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Wrongtrx = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/services/wrongtrx.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button start (click)="dismiss()">返回</button>\n    <ion-title>差錯交易</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>賬單號</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <div padding>\n    <button ion-button color="primary" block>查詢</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/services/wrongtrx.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */]])
    ], Wrongtrx);
    return Wrongtrx;
}());

//# sourceMappingURL=wrongtrx.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Custservice; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/services/custservice.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button start (click)="dismiss()">返回</button>\n    <ion-title>客服</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>問題種類</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>MID</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>機具型號</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>聯絡人</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>聯絡人電話</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>問題描述</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>附件</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <div padding>\n    <button ion-button color="primary" block>提交</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/services/custservice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */]])
    ], Custservice);
    return Custservice;
}());

//# sourceMappingURL=custservice.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Qrcode; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/qrcode/qrcode.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button start (click)="dismiss()">返回</button>\n    <ion-title></ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <table width="100%" style="background-image: url(\'./assets/imgs/titlebk.png\');background-size: 100%;background-repeat:  no-repeat;">\n    <tr>\n      <td align="center" height="600px">\n        <div style="text-align:  center;height:  500px;background-color:  rgba(255, 255, 255, 0.8); width: 320px;box-shadow:  0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 48px 0 rgba(0,0,0,.12);border-radius:  30px;">\n          <table width="100%">\n            <tr>\n              <td align="center" height="60px">\n\n              </td>\n            </tr>\n            <tr>\n              <td align="center" height="60px" style="color: #607483; font-size: 16px;">\n                請掃描以下二維碼\n              </td>\n            </tr>\n            <tr>\n              <td align="center">\n                <div style="background-image: url(\'./assets/imgs/qrborder.png\');background-size: 100%;width:200px;height:  200px;line-height: 340px;">\n                  <qr-code [value]="\'All QR Code data goes here!\'" [size]="150"></qr-code>\n                </div>\n              </td>\n            </tr>\n          </table>\n        </div>\n      </td>\n    </tr>\n  </table>\n</ion-content>\n'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/qrcode/qrcode.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */]])
    ], Qrcode);
    return Qrcode;
}());

//# sourceMappingURL=qrcode.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_card_merchant_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(31);
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
    function SigninPage(alertCtrl, cardMerchantService, nativeStorage, router) {
        this.alertCtrl = alertCtrl;
        this.cardMerchantService = cardMerchantService;
        this.nativeStorage = nativeStorage;
        this.router = router;
        this.eyetype = 'eye-off';
        this.passwordtype = 'password';
        console.log("SigninPage constructor");
    }
    //沟崽子们
    SigninPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log("SigninPage ionViewWillEnter");
        // this.nativeStorage.getItem("SESSIONID").then(data=>{
        //     this.cardMerchantService.checkLoginSession(data).toPromise().then(data=>{
        //         console.log(data);
        //         if(Object(data).code == "0")
        //             this.navCtrl.push(TabsPage);
        //
        //     })
        // })
        var sessionid = localStorage.getItem("SESSIONID");
        this.cardMerchantService.checkLoginSession(sessionid).toPromise().then(function (data) {
            console.log(data);
            if (Object(data).code == "0")
                //this.navCtrl.push(TabsPage);
                _this.router.navigate(['index/home']);
        });
    };
    SigninPage.prototype.ngOnInit = function () {
        console.log("SigninPage Oninit");
    };
    SigninPage.prototype.checkEnter = function (event, acc, psw) {
        console.log(event);
        if (event.keyCode == 13)
            this.signin(acc, psw);
    };
    SigninPage.prototype.send = function (mobile) {
        console.log("test click!");
        this.cardMerchantService.sendVerifyCode_rsa(mobile).toPromise().then(function (data) {
            console.log(data);
        });
    };
    SigninPage.prototype.signin = function (acc, psw) {
        var _this = this;
        console.log(acc, psw);
        // if(acc == '1' && psw == '1')
        //     this.navCtrl.push(TabsPage);
        // else if(acc !='1')
        //     this.presentAlert('account do not exist!')
        // else if(acc =='1' && psw != '1')
        //     this.presentAlert('wrong password!')
        console.log("test2 click!");
        this.cardMerchantService.checkVerifyCode_rsa(acc, psw).toPromise().then(function (data) {
            console.log(data);
            console.log(Object(data).message);
            console.log(Object(Object(data).data).uid);
            console.log(Object(Object(data).data).sessionid);
            /* this.nativeStorage.setItem('UID', Object(Object(data).data).uid)
                .then(
                    () => console.log('Stored UID!'),
                    error => console.error('Error storing item', error)
                );
            this.nativeStorage.setItem('SESSIONID', Object(Object(data).data).sessionid)
                .then(
                    () => console.log('Stored SESSIONID!'),
                    error => console.error('Error storing item', error)
                ); */
            localStorage.setItem('UID', Object(Object(data).data).uid);
            localStorage.setItem('SESSIONID', Object(Object(data).data).sessionid);
            //可以把merchantId等信息都存于localStorage,后续功能会用到
            localStorage.setItem('MERCHANTID', Object(Object(data).data).merchantId);
            if (Object(data).code === "0")
                //this.navCtrl.push(TabsPage);
                _this.router.navigate(['index/home']);
            else if (Object(data).code === "1")
                alert("手機號碼不合法");
            else if (Object(data).code === "2")
                alert("驗證碼不正確");
            else if (Object(data).code === "3")
                alert("驗證碼已過期，請重新獲取");
            else
                alert("網絡故障，請稍後再試");
        });
    };
    SigninPage.prototype.eyeOnOff = function () {
        this.eyetype = this.eyetype == 'eye-off' ? 'eye' : 'eye-off';
        this.passwordtype = this.passwordtype == 'password' ? 'tel' : 'password';
    };
    SigninPage.prototype.presentAlert = function (note) {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: note,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('eyes'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SigninPage.prototype, "eyes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('ps'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SigninPage.prototype, "ps", void 0);
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signin',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/auth/signin.html"*/'\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            登錄\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div style="height: 60px;"></div>\n    <ion-list padding>\n        <ion-item style="border-top: none;">\n            <ion-label color="primary">\n                <ion-icon name="contact" item-start></ion-icon>\n                手機號\n            </ion-label>\n            <ion-input #myaccount type="tel" placeholder="Account Input" (keyup)="checkEnter($event,myaccount.value, mypassword.value)"></ion-input>\n        </ion-item>\n        <ion-item style="border-bottom: none;">\n            <ion-label color="primary">\n                <ion-icon name="arrow-dropright" item-start></ion-icon>\n                驗證碼\n            </ion-label>\n            <ion-input #mypassword [type]="passwordtype" pattern="[0-9]*" inputmode="numeric" placeholder="Password Input" (keyup)="checkEnter($event,myaccount.value, mypassword.value)" ></ion-input>\n            <ion-icon [name]="eyetype" item-end (click)="eyeOnOff()"></ion-icon>\n\n        </ion-item>\n        <ion-item style="border-bottom: none;">\n\n            <button (click)="send(myaccount.value)">獲取驗證碼</button>\n        </ion-item>\n\n    </ion-list>\n    <div style="text-align: center;">\n        <button ion-button (click)="signin(myaccount.value, mypassword.value)" style="width: 280px;"> OK</button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/auth/signin.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__service_card_merchant_service__["a" /* CardMerchantService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* Router */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_card_merchant_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SetupPage = /** @class */ (function () {
    function SetupPage(platform, cardMerchantService, nativeStorage, router) {
        this.platform = platform;
        this.cardMerchantService = cardMerchantService;
        this.nativeStorage = nativeStorage;
        this.router = router;
    }
    SetupPage.prototype.ngOnInit = function () {
    };
    SetupPage.prototype.openUserMgt = function () {
        this.router.navigate(['usermgt']);
    };
    SetupPage.prototype.goBack = function () {
        this.router.navigate(['index/home']);
    };
    SetupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-setup',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/services/setup.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button start (click)="goBack()">返回</button>\n    <ion-title style="text-align:center;" >设置</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n	<button class="item item-block item-ios" ion-item="" (click)="openUserMgt()">\n		<ion-icon color="secondary" item-start="" name="people" role="img" class="icon icon-ios icon-ios-secondary ion-ios-people item-icon" aria-label="call"></ion-icon>\n		用户管理\n		<div class="button-effect"></div>\n	</button>\n</ion-content>'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/services/setup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__service_card_merchant_service__["a" /* CardMerchantService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* Router */]])
    ], SetupPage);
    return SetupPage;
}());

//# sourceMappingURL=setup.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserMgtPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_card_merchant_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserMgtPage = /** @class */ (function () {
    function UserMgtPage(platform, cardMerchantService, nativeStorage, router) {
        this.platform = platform;
        this.cardMerchantService = cardMerchantService;
        this.nativeStorage = nativeStorage;
        this.router = router;
    }
    UserMgtPage.prototype.ngOnInit = function () {
        var _this = this;
        var data = localStorage.getItem('SESSIONID');
        this.cardMerchantService.getSecondUsers(data).toPromise().then(function (data) {
            console.log(data);
            _this.userList = Object(data).data;
        });
    };
    UserMgtPage.prototype.openUserDetail = function (user) {
        console.log(user);
        this.router.navigate(['userdetail', { userid: user.currpeople, username: user.field2 }]);
    };
    UserMgtPage.prototype.addUser = function () {
        this.router.navigate(['adduser']);
    };
    UserMgtPage.prototype.goBack = function () {
        history.back();
    };
    UserMgtPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-usermgt',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/services/usermgt.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button start (click)="goBack()">返回</button>\n    <ion-title style="text-align:center;" >用户管理</ion-title>\n	<button ion-button end (click)="addUser()">新增</button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-list>\n		<ion-item *ngFor="let user of userList" (click)="openUserDetail(user)" >{{user.field2}}</ion-item>\n	</ion-list>\n</ion-content>'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/services/usermgt.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__service_card_merchant_service__["a" /* CardMerchantService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* Router */]])
    ], UserMgtPage);
    return UserMgtPage;
}());

//# sourceMappingURL=usermgt.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_card_merchant_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddUserPage = /** @class */ (function () {
    function AddUserPage(platform, cardMerchantService, nativeStorage) {
        this.platform = platform;
        this.cardMerchantService = cardMerchantService;
        this.nativeStorage = nativeStorage;
    }
    AddUserPage.prototype.ngOnInit = function () {
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
    AddUserPage.prototype.submitForm = function () {
        if (!/^\d{8}$/.test(Object(this.Mobile).value)) {
            alert("手机号至少8位");
        }
        else {
            var data = {
                sessionid: localStorage.getItem('SESSIONID'),
                mobile: Object(this.Mobile).value,
                name: Object(this.Name).value,
                departmentid: Object(this.Departmentid).value,
            };
            console.log(data);
            this.cardMerchantService.addUser(data).toPromise().then(function (data) {
                console.log(Object(data));
                if (Object(data).code == 0) {
                    console.log('提交成功');
                    history.back();
                }
                else {
                    alert(Object(data).message);
                }
            });
        }
    };
    AddUserPage.prototype.goBack = function () {
        history.back();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mobile'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AddUserPage.prototype, "Mobile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('name'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AddUserPage.prototype, "Name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('departmentid'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AddUserPage.prototype, "Departmentid", void 0);
    AddUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-adduser',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/services/adduser.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button start (click)="goBack()">返回</button>\n    <ion-title style="text-align:center;" >新增用户</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-list>\n\n		<ion-item>\n			<ion-label floating>手机号</ion-label>\n			<ion-input name="mobile" type="number"  #mobile ></ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label floating>姓名</ion-label>\n			<ion-input name="name" type="text" #name ></ion-input>\n		</ion-item>\n		\n		<ion-item>\n			<ion-label floating>门店</ion-label>\n			<ion-select class="select select-ios ng-pristine ng-valid ng-touched" #departmentid >\n				<ion-option *ngFor="let shop of shopList" value="{{shop.departmentId}}" >{{shop.departmentName}}</ion-option>\n			</ion-select>\n		</ion-item>\n		\n    \n	</ion-list>\n\n  <div padding>\n    <button ion-button color="primary" (click)="submitForm()" block>提交</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/services/adduser.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__service_card_merchant_service__["a" /* CardMerchantService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], AddUserPage);
    return AddUserPage;
}());

//# sourceMappingURL=adduser.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_card_merchant_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserDetailPage = /** @class */ (function () {
    function UserDetailPage(platform, cardMerchantService, nativeStorage, router, activatedRoute) {
        this.platform = platform;
        this.cardMerchantService = cardMerchantService;
        this.nativeStorage = nativeStorage;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    UserDetailPage.prototype.ngOnInit = function () {
        this.user = {
            userid: this.activatedRoute.snapshot.params['userid'],
            username: this.activatedRoute.snapshot.params['username']
        };
    };
    UserDetailPage.prototype.delUser = function () {
    };
    UserDetailPage.prototype.goBack = function () {
        history.back();
    };
    UserDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-userdetail',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/services/userdetail.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button start (click)="goBack()">返回</button>\n    <ion-title style="text-align:center;" >用户详情</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-list>\n		<ion-item >{{user.username}}</ion-item>\n		<ion-item > <button ion-button (click)="delUser(user.userid)">删除</button></ion-item>\n	</ion-list>\n</ion-content>'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/services/userdetail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__service_card_merchant_service__["a" /* CardMerchantService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], UserDetailPage);
    return UserDetailPage;
}());

//# sourceMappingURL=userdetail.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = counterReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_counter_actions__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__status_counter_state__ = __webpack_require__(393);
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

/***/ 392:
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

/***/ 393:
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

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonRefundPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_card_merchant_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommonRefundPage = /** @class */ (function () {
    function CommonRefundPage(cardMerchantService) {
        this.cardMerchantService = cardMerchantService;
    }
    CommonRefundPage.prototype.ngOnInit = function () {
    };
    CommonRefundPage.prototype.submitForm = function () {
        var data = {
            sessionid: localStorage.getItem('SESSIONID'),
            merchantid: localStorage.getItem("MERCHANTID"),
            merchantname: localStorage.getItem("MERCHANTNAME"),
            departmentid: localStorage.getItem("DEPARTMENTID"),
            departmentname: Object(this.departmentname).value,
            refundcardno4: Object(this.refundcardno4).value,
            trxdate: Object(this.trxdate).value,
            authno: Object(this.authno).value,
            trxamount: Object(this.trxamount).value,
            refundamount: Object(this.refundamount).value,
            //applymobile: localStorage.getItem("APPLYMOBILE"),
            applymobile: Object(this.applymobile).value
        };
        console.log(data);
        this.cardMerchantService.addrefund(data).toPromise().then(function (data) {
            console.log(Object(data));
            if (Object(data).code == 0) {
                console.log('提交成功');
                history.back();
            }
            else {
                alert(Object(data).message);
            }
        });
    };
    CommonRefundPage.prototype.goBack = function () {
        history.back();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('merchantname'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CommonRefundPage.prototype, "merchantname", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('departmentname'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CommonRefundPage.prototype, "departmentname", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('refundcardno4'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CommonRefundPage.prototype, "refundcardno4", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('trxdate'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CommonRefundPage.prototype, "trxdate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('authno'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CommonRefundPage.prototype, "authno", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('trxamount'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CommonRefundPage.prototype, "trxamount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('refundamount'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CommonRefundPage.prototype, "refundamount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('applymobile'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CommonRefundPage.prototype, "applymobile", void 0);
    CommonRefundPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-commonrefund',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/refund/commonrefund.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button start (click)="goBack()">返回</button>\n    <ion-title>普通退款</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>MID</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>商戶名稱</ion-label>\n      <ion-input type="text" #merchantname ></ion-input>\n    </ion-item>\n	<ion-item>\n      <ion-label floating>部门名稱</ion-label>\n      <ion-input type="text" #departmentname ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>退款卡號</ion-label>\n      <ion-input type="text" #refundcardno4 ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>交易日期</ion-label>\n      <ion-input type="text" #trxdate ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>授權號</ion-label>\n      <ion-input type="text" #authno ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>原交易金額</ion-label>\n      <ion-input type="text" #trxamount ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>退款金額</ion-label>\n      <ion-input type="text" #refundamount ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>申請人/聯絡電話</ion-label>\n      <ion-input type="text" #applymobile ></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <div padding>\n    <button ion-button color="primary" (click)="submitForm()" block>提交</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/refund/commonrefund.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_card_merchant_service__["a" /* CardMerchantService */]])
    ], CommonRefundPage);
    return CommonRefundPage;
}());

//# sourceMappingURL=commonrefund.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeixinRefundPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_card_merchant_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeixinRefundPage = /** @class */ (function () {
    function WeixinRefundPage(cardMerchantService) {
        this.cardMerchantService = cardMerchantService;
    }
    WeixinRefundPage.prototype.ngOnInit = function () { };
    WeixinRefundPage.prototype.submitForm = function () {
        var data = {
            sessionid: localStorage.getItem('SESSIONID'),
            merchantid: localStorage.getItem("MERCHANTID"),
            merchantname: localStorage.getItem("MERCHANTNAME"),
            departmentid: localStorage.getItem("DEPARTMENTID"),
            departmentname: Object(this.departmentname).value,
            refundcardno4: Object(this.refundcardno4).value,
            trxdate: Object(this.trxdate).value,
            authno: Object(this.authno).value,
            trxamount: Object(this.trxamount).value,
            refundamount: Object(this.refundamount).value,
            //applymobile: localStorage.getItem("APPLYMOBILE"),
            applymobile: Object(this.applymobile).value
        };
        console.log(data);
        this.cardMerchantService.addrefund(data).toPromise().then(function (data) {
            console.log(Object(data));
            if (Object(data).code == 0) {
                console.log('提交成功');
                history.back();
            }
            else {
                alert(Object(data).message);
            }
        });
    };
    WeixinRefundPage.prototype.goBack = function () {
        history.back();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('merchantname'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], WeixinRefundPage.prototype, "merchantname", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('departmentname'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], WeixinRefundPage.prototype, "departmentname", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('refundcardno4'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], WeixinRefundPage.prototype, "refundcardno4", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('trxdate'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], WeixinRefundPage.prototype, "trxdate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('authno'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], WeixinRefundPage.prototype, "authno", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('trxamount'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], WeixinRefundPage.prototype, "trxamount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('refundamount'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], WeixinRefundPage.prototype, "refundamount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('applymobile'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], WeixinRefundPage.prototype, "applymobile", void 0);
    WeixinRefundPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-weixinrefund',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/refund/weixinrefund.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button start (click)="goBack()">返回</button>\n    <ion-title>微信退款</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>MID</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>商戶名稱</ion-label>\n      <ion-input type="text" #merchantname ></ion-input>\n    </ion-item>\n	<ion-item>\n      <ion-label floating>部门名稱</ion-label>\n      <ion-input type="text" #departmentname ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>退款卡號</ion-label>\n      <ion-input type="text" #refundcardno4 ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>交易日期</ion-label>\n      <ion-input type="text" #trxdate ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>授權號</ion-label>\n      <ion-input type="text" #authno ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>原交易金額</ion-label>\n      <ion-input type="text" #trxamount ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>退款金額</ion-label>\n      <ion-input type="text" #refundamount ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>申請人/聯絡電話</ion-label>\n      <ion-input type="text" #applymobile ></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <div padding>\n    <button ion-button color="primary" (click)="submitForm()" block>提交</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/refund/weixinrefund.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_card_merchant_service__["a" /* CardMerchantService */]])
    ], WeixinRefundPage);
    return WeixinRefundPage;
}());

//# sourceMappingURL=weixinrefund.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefundVerifyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_card_merchant_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RefundVerifyPage = /** @class */ (function () {
    function RefundVerifyPage(cardMerchantService) {
        this.cardMerchantService = cardMerchantService;
    }
    RefundVerifyPage.prototype.ngOnInit = function () { };
    RefundVerifyPage.prototype.submitForm = function () {
        var data = {
            sessionid: localStorage.getItem('SESSIONID'),
            merchantid: localStorage.getItem("MERCHANTID"),
            merchantname: localStorage.getItem("MERCHANTNAME"),
            departmentid: localStorage.getItem("DEPARTMENTID"),
            departmentname: Object(this.departmentname).value,
            refundcardno4: Object(this.refundcardno4).value,
            trxdate: Object(this.trxdate).value,
            authno: Object(this.authno).value,
            trxamount: Object(this.trxamount).value,
            refundamount: Object(this.refundamount).value,
            //applymobile: localStorage.getItem("APPLYMOBILE"),
            applymobile: Object(this.applymobile).value
        };
        console.log(data);
        this.cardMerchantService.addrefund(data).toPromise().then(function (data) {
            console.log(Object(data));
            if (Object(data).code == 0) {
                console.log('提交成功');
                history.back();
            }
            else {
                alert(Object(data).message);
            }
        });
    };
    RefundVerifyPage.prototype.goBack = function () {
        history.back();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('merchantname'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], RefundVerifyPage.prototype, "merchantname", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('departmentname'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], RefundVerifyPage.prototype, "departmentname", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('refundcardno4'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], RefundVerifyPage.prototype, "refundcardno4", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('trxdate'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], RefundVerifyPage.prototype, "trxdate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('authno'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], RefundVerifyPage.prototype, "authno", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('trxamount'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], RefundVerifyPage.prototype, "trxamount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('refundamount'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], RefundVerifyPage.prototype, "refundamount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('applymobile'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], RefundVerifyPage.prototype, "applymobile", void 0);
    RefundVerifyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-refundverify',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/refund/refundverify.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button start (click)="goBack()">返回</button>\n    <ion-title>退款审批</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>MID</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>商戶名稱</ion-label>\n      <ion-input type="text" #merchantname ></ion-input>\n    </ion-item>\n	<ion-item>\n      <ion-label floating>部门名稱</ion-label>\n      <ion-input type="text" #departmentname ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>退款卡號</ion-label>\n      <ion-input type="text" #refundcardno4 ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>交易日期</ion-label>\n      <ion-input type="text" #trxdate ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>授權號</ion-label>\n      <ion-input type="text" #authno ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>原交易金額</ion-label>\n      <ion-input type="text" #trxamount ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>退款金額</ion-label>\n      <ion-input type="text" #refundamount ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>申請人/聯絡電話</ion-label>\n      <ion-input type="text" #applymobile ></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <div padding>\n    <button ion-button color="primary" (click)="submitForm()" block>提交</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/refund/refundverify.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_card_merchant_service__["a" /* CardMerchantService */]])
    ], RefundVerifyPage);
    return RefundVerifyPage;
}());

//# sourceMappingURL=refundverify.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefundProgressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_card_merchant_service__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RefundProgressPage = /** @class */ (function () {
    function RefundProgressPage(cardMerchantService) {
        this.cardMerchantService = cardMerchantService;
    }
    RefundProgressPage.prototype.ngOnInit = function () { };
    RefundProgressPage.prototype.submitForm = function () {
        var data = {
            sessionid: localStorage.getItem('SESSIONID'),
            merchantid: localStorage.getItem("MERCHANTID"),
            merchantname: localStorage.getItem("MERCHANTNAME"),
            departmentid: localStorage.getItem("DEPARTMENTID"),
            departmentname: Object(this.departmentname).value,
            refundcardno4: Object(this.refundcardno4).value,
            trxdate: Object(this.trxdate).value,
            authno: Object(this.authno).value,
            trxamount: Object(this.trxamount).value,
            refundamount: Object(this.refundamount).value,
            //applymobile: localStorage.getItem("APPLYMOBILE"),
            applymobile: Object(this.applymobile).value
        };
        console.log(data);
        this.cardMerchantService.addrefund(data).toPromise().then(function (data) {
            console.log(Object(data));
            if (Object(data).code == 0) {
                console.log('提交成功');
                history.back();
            }
            else {
                alert(Object(data).message);
            }
        });
    };
    RefundProgressPage.prototype.goBack = function () {
        history.back();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('merchantname'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], RefundProgressPage.prototype, "merchantname", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('departmentname'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], RefundProgressPage.prototype, "departmentname", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('refundcardno4'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], RefundProgressPage.prototype, "refundcardno4", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('trxdate'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], RefundProgressPage.prototype, "trxdate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('authno'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], RefundProgressPage.prototype, "authno", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('trxamount'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], RefundProgressPage.prototype, "trxamount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('refundamount'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], RefundProgressPage.prototype, "refundamount", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('applymobile'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], RefundProgressPage.prototype, "applymobile", void 0);
    RefundProgressPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-refundprogress',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/refund/refundprogress.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button start (click)="goBack()">返回</button>\n    <ion-title>退款进度</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>MID</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>商戶名稱</ion-label>\n      <ion-input type="text" #merchantname ></ion-input>\n    </ion-item>\n	<ion-item>\n      <ion-label floating>部门名稱</ion-label>\n      <ion-input type="text" #departmentname ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>退款卡號</ion-label>\n      <ion-input type="text" #refundcardno4 ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>交易日期</ion-label>\n      <ion-input type="text" #trxdate ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>授權號</ion-label>\n      <ion-input type="text" #authno ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>原交易金額</ion-label>\n      <ion-input type="text" #trxamount ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>退款金額</ion-label>\n      <ion-input type="text" #refundamount ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>申請人/聯絡電話</ion-label>\n      <ion-input type="text" #applymobile ></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <div padding>\n    <button ion-button color="primary" (click)="submitForm()" block>提交</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/home/refund/refundprogress.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_card_merchant_service__["a" /* CardMerchantService */]])
    ], RefundProgressPage);
    return RefundProgressPage;
}());

//# sourceMappingURL=refundprogress.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(403);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_index_index__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_custom_tabs__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_auth_signin__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_services_setup__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_services_usermgt__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_services_adduser__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_services_userdetail__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ngrx_effects__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ngrx_store__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ngrx_store_devtools__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__nrwl_nx__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_reducer__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__reducers_counter_reducer__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__status_counter_state__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__effects_counter_effects__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_common_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__service_counter_service__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__service_card_merchant_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__swimlane_ngx_datatable__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__jiguang_ionic_jpush__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_home_services_binsarch__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_home_services_custservice__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_home_refund_refund__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_home_refund_commonrefund__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_home_refund_weixinrefund__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_home_refund_refundverify__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_home_refund_refundprogress__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_home_services_wrongtrx__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_home_qrcode_qrcode__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_tabs_tabs__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_angular2_qrcode__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_camera__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_native_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_native_device__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__app_routing_module__ = __webpack_require__(716);
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
                __WEBPACK_IMPORTED_MODULE_4__pages_index_index__["a" /* IndexPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_custom_tabs__["a" /* CustomTabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_auth_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_home_services_binsarch__["a" /* Binsarch */],
                __WEBPACK_IMPORTED_MODULE_38__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_home_services_custservice__["a" /* Custservice */],
                __WEBPACK_IMPORTED_MODULE_31__pages_home_refund_refund__["a" /* Refund */],
                __WEBPACK_IMPORTED_MODULE_32__pages_home_refund_commonrefund__["a" /* CommonRefundPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_home_refund_weixinrefund__["a" /* WeixinRefundPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_home_refund_refundverify__["a" /* RefundVerifyPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_home_refund_refundprogress__["a" /* RefundProgressPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_services_setup__["a" /* SetupPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_services_usermgt__["a" /* UserMgtPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_services_adduser__["a" /* AddUserPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_services_userdetail__["a" /* UserDetailPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_home_services_wrongtrx__["a" /* Wrongtrx */],
                __WEBPACK_IMPORTED_MODULE_37__pages_home_qrcode_qrcode__["a" /* Qrcode */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_24__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_39_angular2_qrcode__["a" /* QRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["j" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_20__app_reducer__["a" /* reducers */]),
                __WEBPACK_IMPORTED_MODULE_16__ngrx_effects__["c" /* EffectsModule */].forRoot([]),
                __WEBPACK_IMPORTED_MODULE_18__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument({ maxAge: 25 }),
                __WEBPACK_IMPORTED_MODULE_19__nrwl_nx__["a" /* NxModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["j" /* StoreModule */].forFeature('counter', __WEBPACK_IMPORTED_MODULE_21__reducers_counter_reducer__["a" /* counterReducer */], { initialState: __WEBPACK_IMPORTED_MODULE_22__status_counter_state__["a" /* counterInitialState */] }),
                __WEBPACK_IMPORTED_MODULE_16__ngrx_effects__["c" /* EffectsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_23__effects_counter_effects__["a" /* CounterEffects */]]),
                __WEBPACK_IMPORTED_MODULE_27__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_43__app_routing_module__["a" /* AppRoutingModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_index_index__["a" /* IndexPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_custom_tabs__["a" /* CustomTabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_auth_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_home_services_binsarch__["a" /* Binsarch */],
                __WEBPACK_IMPORTED_MODULE_30__pages_home_services_custservice__["a" /* Custservice */],
                __WEBPACK_IMPORTED_MODULE_31__pages_home_refund_refund__["a" /* Refund */],
                __WEBPACK_IMPORTED_MODULE_32__pages_home_refund_commonrefund__["a" /* CommonRefundPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_home_refund_weixinrefund__["a" /* WeixinRefundPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_home_refund_refundverify__["a" /* RefundVerifyPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_home_refund_refundprogress__["a" /* RefundProgressPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_services_setup__["a" /* SetupPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_services_usermgt__["a" /* UserMgtPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_home_services_adduser__["a" /* AddUserPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_services_userdetail__["a" /* UserDetailPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_home_services_wrongtrx__["a" /* Wrongtrx */],
                __WEBPACK_IMPORTED_MODULE_37__pages_home_qrcode_qrcode__["a" /* Qrcode */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_28__jiguang_ionic_jpush__["a" /* JPush */],
                __WEBPACK_IMPORTED_MODULE_25__service_counter_service__["a" /* CounterService */],
                __WEBPACK_IMPORTED_MODULE_26__service_card_merchant_service__["a" /* CardMerchantService */],
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_42__ionic_native_device__["a" /* Device */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jiguang_ionic_jpush__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, jpush, nativeStorage) {
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            jpush.init();
            jpush.setDebugMode(true);
            console.log("Myapp:");
            //nativeStorage.getItem("SESSIONID").then(data=>console.log(data));
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/app/app.html"*/'<!--<ion-nav [root]="rootPage"></ion-nav>-->\n<router-outlet></router-outlet>'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__jiguang_ionic_jpush__["a" /* JPush */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomTabsPage = /** @class */ (function () {
    function CustomTabsPage(router) {
        this.router = router;
        this.activeTabIndex = 0;
    }
    CustomTabsPage.prototype.onTabChange = function (index) {
        console.log(index);
        this.activeTabIndex = index;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('items'),
        __metadata("design:type", Object)
    ], CustomTabsPage.prototype, "items", void 0);
    CustomTabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'custom-tabs',template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/tabs/custom-tabs.html"*/'<div class="tabbar show-tabbar" role="tablist" style="bottom: 0px;">\n	<a class="custom-button has-title has-icon disable-hover"  [ngClass]="{\'active\':activeTabIndex == i,\'\':activeTabIndex != i}" *ngFor="let item of items;let i = index" routerLink="{{item.url}}" (click)="onTabChange(i)" >\n		<ion-icon class="tab-button-icon icon icon-md ion-md-{{item.classname}}" role="img" aria-label="home" ></ion-icon>\n		<span class="tab-button-text">{{item.title}}</span>\n		<div class="button-effect"></div>\n	</a>\n	<div class="tab-highlight"></div>\n</div>'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/tabs/custom-tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]])
    ], CustomTabsPage);
    return CustomTabsPage;
}());

//# sourceMappingURL=custom-tabs.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducers_counter_reducer__ = __webpack_require__(391);

var reducers = {
    counter: __WEBPACK_IMPORTED_MODULE_0__reducers_counter_reducer__["a" /* counterReducer */]
};
//# sourceMappingURL=app.reducer.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CounterEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_counter_actions__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_counter_service__ = __webpack_require__(166);
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

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(161);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="商戶服務" tabIcon="paper"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="交易報表" tabIcon="stats"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="我的信息" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/xiongfeizhao/Documents/CardMerchant/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_index_index__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_about_about__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_contact_contact__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_auth_signin__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_services_setup__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_services_usermgt__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_services_adduser__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_services_userdetail__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_refund_commonrefund__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_home_refund_weixinrefund__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_refund_refundverify__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_refund_refundprogress__ = __webpack_require__(397);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: '', redirectTo: '/signin', pathMatch: 'full' },
    { path: 'index', component: __WEBPACK_IMPORTED_MODULE_2__pages_index_index__["a" /* IndexPage */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { path: 'about', component: __WEBPACK_IMPORTED_MODULE_3__pages_about_about__["a" /* AboutPage */] },
            { path: 'user', component: __WEBPACK_IMPORTED_MODULE_4__pages_contact_contact__["a" /* ContactPage */] }
        ]
    },
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_6__pages_auth_signin__["a" /* SigninPage */] },
    { path: 'setup', component: __WEBPACK_IMPORTED_MODULE_7__pages_home_services_setup__["a" /* SetupPage */] },
    { path: 'usermgt', component: __WEBPACK_IMPORTED_MODULE_8__pages_home_services_usermgt__["a" /* UserMgtPage */] },
    { path: 'adduser', component: __WEBPACK_IMPORTED_MODULE_9__pages_home_services_adduser__["a" /* AddUserPage */] },
    { path: 'userdetail', component: __WEBPACK_IMPORTED_MODULE_10__pages_home_services_userdetail__["a" /* UserDetailPage */] },
    { path: 'commonrefund', component: __WEBPACK_IMPORTED_MODULE_11__pages_home_refund_commonrefund__["a" /* CommonRefundPage */] },
    { path: 'weixinrefund', component: __WEBPACK_IMPORTED_MODULE_12__pages_home_refund_weixinrefund__["a" /* WeixinRefundPage */] },
    { path: 'refundverify', component: __WEBPACK_IMPORTED_MODULE_13__pages_home_refund_refundverify__["a" /* RefundVerifyPage */] },
    { path: 'refundprogress', component: __WEBPACK_IMPORTED_MODULE_14__pages_home_refund_refundprogress__["a" /* RefundProgressPage */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ })

},[398]);
//# sourceMappingURL=main.js.map