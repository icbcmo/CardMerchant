
import {Component, OnInit, ViewChild } from '@angular/core';
import { ViewController, NavParams, Slides } from 'ionic-angular';

@Component({
  selector: 'page-showimage',
  templateUrl: 'showimage.html'
})

export class ShowImage implements OnInit{
	items: any;
	index: any;
	
	@ViewChild(Slides) slides: Slides;
	
    constructor(
        public viewCtrl: ViewController,
		public params: NavParams
    ) {
    }


    ngOnInit() {
		this.items = this.params.get('items');
		this.index = this.params.get('index');
		//console.log(this.slides.length());
		//this.slides.slideTo(this.index);
		//this.slides.startAutoplay();
		//var inst = this;
		//document.addEventListener('resize', function(){
			//inst.slides.resize();
		//});
	}

    dismiss() {
        this.viewCtrl.dismiss();
    }

}
