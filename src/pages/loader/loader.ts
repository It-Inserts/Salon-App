import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
    selector: 'page-loader',
    templateUrl: 'loader.html',
})
export class LoaderPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

}
