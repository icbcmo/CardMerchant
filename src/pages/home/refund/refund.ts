
import {Component, OnInit} from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'refund.html',
})
export class Refund implements OnInit{

    constructor(
        public viewCtrl: ViewController,
    ) {
    }


    ngOnInit() {}

    dismiss() {
        this.viewCtrl.dismiss();
    }

}
