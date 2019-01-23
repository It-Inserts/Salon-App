import {Component} from '@angular/core';
import {NavController, NavParams, ModalController} from 'ionic-angular';
import {authenticationService} from "../../providers/authenticationService";
import {httpService} from "../../providers/customHttpService";
import {LoaderPage} from '../loader/loader';


@Component({
    selector: 'page-point',
    templateUrl: 'point.html',
})
export class PointPage {
    totalpoint: number;
    poitsdata:any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public auth: authenticationService, private http: httpService, public modalCtrl: ModalController,) {
    }

    ionViewDidLoad() {
        let Loading = this.modalCtrl.create(LoaderPage);
        Loading.present();
        this.http.getUserPoint()
            .then((response: any) => {
                this.poitsdata = response.appointment;
                this.totalpoint = response.Totalpoint;
                Loading.dismiss();
            }, (error) => {
                Loading.dismiss();
                console.log(error)
            });
    }
}


