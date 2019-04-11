import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { SigninPage } from "../pages/auth/signin";
//import {TabsPage} from "../pages/tabs/tabs";
import { JPush } from '@jiguang-ionic/jpush';
import { NativeStorage } from "@ionic-native/native-storage";
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { BackgroundMode } from '@ionic-native/background-mode';
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = TabsPage;
  //rootPage:any = SigninPage;
  rootPage: any = null;

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private backgroundMode: BackgroundMode,
    jpush: JPush,
    private ga: GoogleAnalytics,
    nativeStorage: NativeStorage,
    private nativeAudio: NativeAudio
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.ga.startTrackerWithId('UA-100686759-5')
        .then(() => {
          console.log('Google analytics is ready now');
          this.ga.trackView('test');
          // Tracker is ready
          // You can now track pages or set additional information such as AppVersion or UserId
        })
        .catch(e => console.log('Error starting GoogleAnalytics', e));
      statusBar.styleDefault();
      this.backgroundMode.enable();
      // this.backgroundMode.on('activate').subscribe(() => {
      //   this.nativeAudio.loop('silence');
      // });
      // this.backgroundMode.on('deactivate').subscribe(() => {
      //   this.nativeAudio.stop('silence');
      // });
      splashScreen.hide();
      jpush.init();
      jpush.setDebugMode(true);
      console.log("Myapp:");
      //nativeStorage.getItem("SESSIONID").then(data=>console.log(data));
      this.rootPage = SigninPage;
      //this.rootPage = TabsPage;
      // this.nativeAudio.preloadComplex('silence', 'assets/audio/silence.mp3', 0.1, 1, 0);
    });
  }
}
