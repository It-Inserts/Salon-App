import {Component} from '@angular/core';
import {NavController, NavParams, MenuController} from 'ionic-angular';
import {httpService} from "../../providers/customHttpService";
import {DoctorlistPage} from "../doctorlist/doctorlist";
import * as $ from 'jquery';

@Component({
    selector: 'page-categary',
    templateUrl: 'categary.html',
})

export class CategaryPage {
    data: any;

    constructor(public navCtrl: NavController, public Http: httpService, public navParams: NavParams, public Menu: MenuController,) {
    }

    ionViewDidLoad() {
        this.Menu.enable(true);

        this.Http.getCategaryList()
            .then((response) => {
                this.data = response;
                $('#loader_row').css("display", 'none');

            }, (error) => {
                if (error.status == 401) {
                    console.log(error.status);
                }
            });
    }

    select_categary(data) {
        this.Http.setCategaryId(data.id);
        this.navCtrl.push(DoctorlistPage, {
            id: data.id
        });
    }
}
