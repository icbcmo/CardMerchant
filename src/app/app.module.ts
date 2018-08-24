import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {SigninPage} from "../pages/auth/signin";
import {UserMgt} from "../pages/contact/setup/usermgt";
import {AddUser} from "../pages/contact/setup/adduser";
import {UserDetail} from "../pages/contact/setup/userdetail";
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {IndexPage} from '../pages/index/index';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {NxModule} from '@nrwl/nx';
import {reducers} from './app.reducer';
import {counterReducer} from '../reducers/counter.reducer';
import {counterInitialState} from '../status/counter.state';
import {CounterEffects} from '../effects/counter.effects';
import {HttpClientModule} from '@angular/common/http';
import {CounterService} from "../service/counter.service";
import {CardMerchantService} from "../service/card-merchant.service";
import {TipService} from '../service/tip.service';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {JPush} from '@jiguang-ionic/jpush';
import {Binsearch} from "../pages/home/binsearch/binsearch";
import {Custservice} from "../pages/home/custservice/custservice";
import {Refund} from "../pages/home/refund/refund";
import {RefundVerify} from "../pages/home/refund/refundverify";
import {RefundProgress} from "../pages/home/refund/refundprogress";
import {RefundDetail} from "../pages/home/refund/refunddetail";
import {CommonRefund} from "../pages/home/refund/commonrefund";
import {WeixinRefund} from "../pages/home/refund/weixinrefund";
import {ShowImage} from "../pages/home/refund/showimage";
import {Wrongtrx} from "../pages/home/wrongtrx/wrongtrx";
import {OrderRefund} from "../pages/home/refund/orderrefund";
import {Qrcode} from "../pages/home/qrcode/qrcode";
import { QRCodeModule } from 'angular2-qrcode';
import { Camera } from '@ionic-native/camera';
import {NativeStorage} from "@ionic-native/native-storage";
import { Device } from '@ionic-native/device';
import {OrderList} from '../pages/home/order/orderlist';
import {OrderdetailsPage} from '../pages/home/order/orderdetails';
//import {CounterService,Sse} from "../service/counter.service";
import {Machine} from "../pages/home/machine/machine";
import {MachineRequest} from "../pages/home/machine/machinerequest";
import {MachineRequestDetail} from "../pages/home/machine/machinerequestdetail";
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import {ReportDataService} from "../service/report-data.service";
import {CashierScan} from "../pages/home/cashier/scan/cashier-scan";
import {RewardRanking} from "../pages/home/cashier/rewardranking/reward-ranking";
import {Qrscanner} from "../pages/home/qrscanner/qrscanner";
import {MyReward} from "../pages/home/cashier/myreward/my-reward";
import {MyRewardExchange} from "../pages/home/cashier/myreward/my-reward-exchange";
import {Trxdata} from "../pages/home/trxdata/trxdata";
import {Help} from "../pages/home/help/help";
import {ScanRecord} from "../pages/home/cashier/scanrecord/scan-record";
import {PopoverPage} from "../pages/home/refund/popoverpage";

@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        SigninPage,
        Binsearch,
        TabsPage,
        IndexPage,
        OrderList,
        OrderdetailsPage,
        Custservice,
        Refund,
        Help,
		RefundVerify,
		RefundProgress,
        ScanRecord,
		RefundDetail,
		CommonRefund,
		WeixinRefund,
		ShowImage,
		UserMgt,
		AddUser,
		UserDetail,
        Wrongtrx,
		OrderRefund,
        Qrcode,
        Qrscanner,
		Machine,
		MachineRequest,
		MachineRequestDetail,
		Qrscanner,
		CashierScan,
		RewardRanking,
        MyReward,
        MyRewardExchange,
        Trxdata,
		PopoverPage
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        QRCodeModule,
        IonicModule.forRoot(MyApp,{
            backButtonText: '返回', iconMode: 'ios',//安卓icon强制使用ios的icon以及样式
            mode: 'ios',//样式强制使用ios样式
        }),
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({maxAge: 25}),
        NxModule.forRoot(),
        StoreModule.forFeature('counter', counterReducer, {initialState: counterInitialState}),
        EffectsModule.forFeature([CounterEffects]),
        NgxDatatableModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        SigninPage,
        TabsPage,
        IndexPage,
        OrderList,
        OrderdetailsPage,
        Binsearch,
        Custservice,
        Refund,
		RefundVerify,
		RefundProgress,
		RefundDetail,
		CommonRefund,
		WeixinRefund,
		ShowImage,
        ScanRecord,
        Help,
		UserMgt,
		AddUser,
		UserDetail,
        Wrongtrx,
		OrderRefund,
        Qrcode,
        Qrscanner,
		Machine,
		MachineRequest,
		MachineRequestDetail,
		Qrscanner,
		CashierScan,
		RewardRanking,
        MyReward,
        MyRewardExchange,
        Trxdata,
		PopoverPage
    ],
    providers: [
        StatusBar,
        Camera,
        SplashScreen,
        JPush,
        QRScanner,
        CounterService,//Sse,
        CardMerchantService,
        ReportDataService,
		TipService,
        NativeStorage,
        Device,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {

}
