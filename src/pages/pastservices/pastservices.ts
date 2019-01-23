import {Component} from '@angular/core';
import {NavController, NavParams, ModalController} from 'ionic-angular';
import {httpService} from "../../providers/customHttpService";
import {LoaderPage} from '../loader/loader';

@Component({
    selector: 'page-pastservices',
    templateUrl: 'pastservices.html',
})

export class PastservicesPage {
    data;

    constructor(public navCtrl: NavController, public navParams: NavParams, private http: httpService, public modalCtrl: ModalController,) {
    }

    ionViewDidLoad() {
        let Loading = this.modalCtrl.create(LoaderPage);
        Loading.present();
        this.http.getUserPoint()
            .then((response: any) => {
                this.data = response.appointment;
                Loading.dismiss();
            }, (error) => {
                Loading.dismiss();
                console.log(error)
            });
    }
}

