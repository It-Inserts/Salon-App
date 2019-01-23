import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {httpService} from "../../providers/customHttpService";


@Component({
    selector: 'page-detail',
    templateUrl: 'detail.html',
})

export class DetailPage {
    email: any;
    img: any;
    gender: any;
    phone: any;
    date: Date;
    name: any;
    userData;

    constructor(public navCtrl: NavController, public navParams: NavParams, public Http: httpService,) {
        this.date = new Date(2011, 11, 30);
    }

    ionViewDidLoad() {
        this.Http.getUserData().then((response) => {
            this.userData = response;
            this.name = this.userData.first_name + " " + this.userData.last_name;
            this.email = this.userData.email;
            this.phone = this.userData.phone;
            this.gender = this.userData.gender;

        }, (error) => {
            if (error.status == 401) {
                console.log(error.status);
            }
        });
    }
}
