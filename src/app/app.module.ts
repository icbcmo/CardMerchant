import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {SigninPage} from "../pages/auth/signin";
import {Setup} from "../pages/home/setup/setup";
import {UserMgt} from "../pages/home/setup/usermgt";
import {AddUser} from "../pages/home/setup/adduser";
import {UserDetail} from "../pages/home/setup/userdetail";
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
import {Qrcode} from "../pages/home/qrcode/qrcode";
import { QRCodeModule } from 'angular2-qrcode';
import { Camera } from '@ionic-native/camera';
import {NativeStorage} from "@ionic-native/native-storage";
import { Device } from '@ionic-native/device';
//import {CounterService,Sse} from "../service/counter.service";
import {Machine} from "../pages/home/machine/machine";
import {MachineRequest} from "../pages/home/machine/machinerequest";
import {MachineRequestDetail} from "../pages/home/machine/machinerequestdetail";

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
        Custservice,
        Refund,
		RefundVerify,
		RefundProgress,
		RefundDetail,
		CommonRefund,
		WeixinRefund,
		ShowImage,
		Setup,
		UserMgt,
		AddUser,
		UserDetail,
        Wrongtrx,
        Qrcode,
		Machine,
		MachineRequest,
		MachineRequestDetail
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        QRCodeModule,
        IonicModule.forRoot(MyApp),
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
        Binsearch,
        Custservice,
        Refund,
		RefundVerify,
		RefundProgress,
		RefundDetail,
		CommonRefund,
		WeixinRefund,
		ShowImage,
		Setup,
		UserMgt,
		AddUser,
		UserDetail,
        Wrongtrx,
        Qrcode,
		Machine,
		MachineRequest,
		MachineRequestDetail
    ],
    providers: [
        StatusBar,
        Camera,
        SplashScreen,
        JPush,
        CounterService,//Sse,
        CardMerchantService,
		TipService,
        NativeStorage,
        Device,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
	
}
