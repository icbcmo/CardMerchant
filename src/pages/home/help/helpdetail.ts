import { Component, ElementRef } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the HelpdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-helpdetail',
  templateUrl: 'helpdetail.html',
})
export class HelpdetailPage {

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public viewCtrl: ViewController,
      public ele: ElementRef
  ) {
  }

  ionViewWillEnter() {
    let mulitImg = [];
    this.ele.nativeElement.querySelectorAll('img').forEach(d => {
        mulitImg.push(d.src);
    });
    let promiseAll = [], imgs = [], imgTotal = mulitImg.length;
    for(let i = 0 ; i < imgTotal ; i++){
        promiseAll[i] = new Promise((resolve, reject)=>{
            imgs[i] = new Image()
            imgs[i].src = mulitImg[i]
            imgs[i].onload = function(){
                //第i张加载完成
                resolve(imgs[i])
            }
        })
    }
    Promise.all(promiseAll).then((img)=>{
        let key = this.navParams.get('top');
        let top = this.ele.nativeElement.querySelector('.help-list').children[key].offsetTop;
        this.ele.nativeElement.querySelector('.scroll-content').scrollTop = top - 10;
    })
  }

  ionViewDidEnter() {

  }

  goBack(){
    this.viewCtrl.dismiss();
  }

}
