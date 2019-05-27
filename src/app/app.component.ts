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
import { CodePush, InstallMode } from '@ionic-native/code-push';
import { environment as ENV } from '../environments/environment';
import { Device } from '@ionic-native/device';

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
    private nativeAudio: NativeAudio,
    private codePush: CodePush,
    private device: Device
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      this.codePush.notifyApplicationReady();
      const deploymentKey = device.platform == 'Android' ? ENV.codePushAndroid : ENV.codePushIOS;
      if (device.platform) {
        platform.resume.subscribe(() => {
          this.codePush.sync({
            deploymentKey: deploymentKey,
            updateDialog: false,
            installMode: InstallMode.ON_NEXT_RESUME,
          }, (downloadProgress => {
            console.log("downloadProgress: " + JSON.stringify(downloadProgress));
            // if (downloadProgress.receivedBytes == downloadProgress.totalBytes) {
            //   alert('Download finished!');
            // }
          })).subscribe(syncStatus => {
            console.log('syncStatus: ' + syncStatus);
          });
        })
        this.codePush.sync({
          deploymentKey: deploymentKey,
          updateDialog: false,
          installMode: InstallMode.ON_NEXT_RESUME,
        }, (downloadProgress => {
          console.log("downloadProgress: " + JSON.stringify(downloadProgress));
          // if (downloadProgress.receivedBytes == downloadProgress.totalBytes) {
          //   alert('Download finished!');
          // }
        })).subscribe(syncStatus => {
          console.log('syncStatus: ' + syncStatus);
        });
      }

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
      if (device.platform && device.platform.toLocaleLowerCase() == 'android') {
        this.nativeAudio.preloadSimple('AOMIPAYMENT', 'assets/audio/AOMIPAYMENT.mp3');
        this.nativeAudio.preloadSimple('ICBCPAYMENT', 'assets/audio/ICBCPAYMENT.mp3');
        this.nativeAudio.preloadSimple('WECHATPAYMENT', 'assets/audio/WECHATPAYMENT.mp3');
      }
    });
  }
}
