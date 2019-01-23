import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import * as $ from 'jquery';


@Component({
    selector: 'page-appoinment-detail',
    templateUrl: 'appoinment-detail.html',
})
export class AppoinmentDetailPage {
    year: any;
    mm: any;
    dayNO: any;
    myParam: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, params: NavParams) {
        this.myParam = params.get('myParam');
    }

    ionViewDidLoad() {
        this.dayNO = this.myParam.date.toString().split('-')[2];
        this.mm = this.myParam.date.toString().split('-')[1];
        this.year = this.myParam.date.toString().split('-')[0]
        let month = new Array();
        month[1] = "January";
        month[2] = "February";
        month[3] = "March";
        month[4] = "April";
        month[5] = "May";
        month[6] = "June";
        month[7] = "July";
        month[8] = "August";
        month[9] = "September";
        month[10] = "October";
        month[11] = "November";
        month[12] = "December";
        this.mm = month[this.mm];
        $('#date_col').css('height', $('#date_col').width() + 70 + 'px')
        $('.date_col').css('height', $('#date_col').width() + 'px')
        $('.date_col').css('width', $('#date_col').width() + 'px')
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}
