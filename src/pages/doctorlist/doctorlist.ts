import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {httpService} from "../../providers/customHttpService";
import * as $ from 'jquery';
import {BookAppoinmentPage} from "../book-appoinment/book-appoinment";

@Component({
    selector: 'page-doctorlist',
    templateUrl: 'doctorlist.html',
})

export class DoctorlistPage {
    serviceList;

    constructor(public navCtrl: NavController, public navParams: NavParams, public Http: httpService,) {
    }

    ionViewDidLoad() {
        let firstParam = this.navParams.get("id");
        if (firstParam) {
            this.Http.serviceByCategary(firstParam).then((response) => {
                $('.loader_row').css("display", 'none');
                this.serviceList = response;
            }, (error) => {
                console.log(error);
            });
        } else {
            this.Http.getServiceList().then((response) => {
                $('.loader_row').css("display", 'none');
                this.serviceList = response;
            }, (error) => {
                if (error.status == 401) {
                    console.log(error.status);
                }

            });

        }
    }

    openBookAppoimentPage() {
        this.navCtrl.push(BookAppoinmentPage);
    }

    selectService(service) {
        let id = '#select' + service.id;
        $(id).prop('checked', true);
        $(id).attr('checked', 'checked');
        this.navCtrl.push(BookAppoinmentPage, {
            'data': service
        });
    }
}
