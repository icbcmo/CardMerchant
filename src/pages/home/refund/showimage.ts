
import {Component, OnInit} from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-showimage',
  templateUrl: 'showimage.html'
})
export class ShowImage implements OnInit{
	data: any;
	
    constructor(
        public viewCtrl: ViewController,
		public params: NavParams
    ) {
    }


    ngOnInit() {
		this.data = this.params.get('data');
	}

    dismiss() {
        this.viewCtrl.dismiss();
    }

}
