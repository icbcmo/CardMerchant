import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {IndexPage} from '../pages/index/index';
import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {CustomTabsPage} from '../pages/tabs/custom-tabs';
import {SigninPage} from "../pages/auth/signin";
import {SetupPage} from "../pages/home/services/setup";
import {UserMgtPage} from "../pages/home/services/usermgt";
import {AddUserPage} from "../pages/home/services/adduser";
import {UserDetailPage} from "../pages/home/services/userdetail";
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

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
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {JPush} from '@jiguang-ionic/jpush';
import {Binsarch} from "../pages/home/services/binsarch";
import {Custservice} from "../pages/home/services/custservice";
import {Refund} from "../pages/home/services/refund";
import {Wrongtrx} from "../pages/home/services/wrongtrx";
import {Qrcode} from "../pages/home/qrcode/qrcode";
import { QRCodeModule } from 'angular2-qrcode';
import { Camera } from '@ionic-native/camera';
import {NativeStorage} from "@ionic-native/native-storage";
import { Device } from '@ionic-native/device';
//import {CounterService,Sse} from "../service/counter.service";
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
    declarations: [
        MyApp,
		IndexPage,
        AboutPage,
        ContactPage,
        HomePage,
        CustomTabsPage,
        SigninPage,
        Binsarch,
        Custservice,
        Refund,
		SetupPage,
		UserMgtPage,
		AddUserPage,
		UserDetailPage,
        Wrongtrx,
        Qrcode
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
        NgxDatatableModule,
		AppRoutingModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
		IndexPage,
        AboutPage,
        ContactPage,
        HomePage,
        CustomTabsPage,
        SigninPage,
        Binsarch,
        Custservice,
        Refund,
		SetupPage,
		UserMgtPage,
		AddUserPage,
		UserDetailPage,
        Wrongtrx,
        Qrcode
    ],
    providers: [
        StatusBar,
        Camera,
        SplashScreen,
        JPush,
        CounterService,//Sse,
        CardMerchantService,
        NativeStorage,
        Device,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
