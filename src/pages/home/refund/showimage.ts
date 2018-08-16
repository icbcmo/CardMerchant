
import {Component, OnInit} from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-showimage',
  templateUrl: 'showimage.html'
})
export class ShowImage implements OnInit{
	picurl: any;
	
    constructor(
        public viewCtrl: ViewController,
		public params: NavParams
    ) {
    }


    ngOnInit() {
		this.picurl = this.params.get('picurl');
		this.picurl = './assets/imgs/juana.gif';
	}

    dismiss() {
        this.viewCtrl.dismiss();
    }

}
