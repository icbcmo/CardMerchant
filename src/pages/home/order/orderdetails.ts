import {Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OrderdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-orderdetails',
  templateUrl: 'orderdetails.html',
})
export class OrderdetailsPage implements OnInit{

  item:any;
  constructor(public navCtrl: NavController, public params: NavParams) {
  }

  ngOnInit() {
        console.log(this.params.get('item'));
        this.item = this.params.get('item');
  }

  ionViewDidLoad() {
      this.item = this.params.get('item');
      console.log('ionViewDidLoad OrderdetailsPage');
  }

  goBack(){
      //this.viewCtrl.dismiss();
      this.navCtrl.pop();
  }

}
