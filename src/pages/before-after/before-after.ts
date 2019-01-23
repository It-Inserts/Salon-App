import {Component} from '@angular/core';
import {NavController, NavParams, MenuController, ModalController} from 'ionic-angular';
import {httpService} from '../../providers/customHttpService';
import * as $ from 'jquery';
import {BeforeAfterVieverPage} from '../before-after-viever/before-after-viever';


@Component({
    selector: 'page-before-after',
    templateUrl: 'before-after.html',
})
export class BeforeAfterPage {
    data: any;

    constructor(public navCtrl: NavController, public Http: httpService, public navParams: NavParams, public Menu: MenuController, public modalCtrl: ModalController) {
    }


    ionViewDidLoad() {
        this.Http.beforeAfter()
            .then((response) => {
                this.data = response['before_after'];
                $('#loader_row').css("display", 'none');
            }, (error) => {
                console.log(error);
                if (error.status == 401) {
                    console.log(error.status);
                }
            });
    }

    select_categary(data) {
        console.log(data.id);
        let image = this.modalCtrl.create(BeforeAfterVieverPage, {data: data});
        image.present();
    }
}
