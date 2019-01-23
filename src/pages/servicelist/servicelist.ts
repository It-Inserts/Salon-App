import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';


@Component({
    selector: 'page-servicelist',
    templateUrl: 'servicelist.html',
})
export class ServicelistPage {
    servicelist;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.servicelist = [
            {
                'name': 'FACIAL CLEANSING',
                'qulification': 'Makeup Artist',
                'points': 100,
                'orderno': 201235,
                'time': '08 sep 2017 08:31 PM'
            }, {
                'name': 'MASSAGE  FOR MEN',
                'qulification': 'Makeup Artist',
                'points': 100,
                'orderno': 201235,
                'time': '08 sep 2017 08:31 PM'
            }, {
                'name': 'MANICURE',
                'qulification': 'Makeup Artist',
                'points': 100,
                'orderno': 201235,
                'time': '08 sep 2017 08:31 PM'
            }, {
                'name': 'PEDICURE',
                'qulification': 'Makeup Artist',
                'points': 100,
                'orderno': 201235,
                'time': '08 sep 2017 08:31 PM'
            }, {
                'name': 'CLASSIC HAIR CUTS',
                'qulification': 'Makeup Artist',
                'points': 100,
                'orderno': 201235,
                'time': '08 sep 2017 08:31 PM'
            }, {
                'name': 'BEARD CUTS AND SHAVES',
                'qulification': 'Makeup Artist',
                'points': 100,
                'orderno': 201235,
                'time': '08 sep 2017 08:31 PM'
            }, {
                'name': 'Pedicure',
                'qulification': 'Makeup Artist',
                'points': 100,
                'orderno': 201235,
                'time': '08 sep 2017 08:31 PM'
            }, {
                'name': 'Manicure',
                'qulification': 'Makeup Artist',
                'points': 100,
                'orderno': 201235,
                'time': '08 sep 2017 08:31 PM'
            }, {
                'name': 'Eyebrows / Eylelash',
                'qulification': 'Makeup Artist',
                'points': 100,
                'orderno': 201235,
                'time': '08 sep 2017 08:31 PM'
            }, {
                'name': 'parth Godhani',
                'qulification': 'Makeup Artist',
                'points': 100,
                'orderno': 201235,
                'time': '08 sep 2017 08:31 PM'
            }, {
                'name': 'parth Godhani',
                'qulification': 'Makeup Artist',
                'points': 100,
                'orderno': 201235,
                'time': '08 sep 2017 08:31 PM'
            }
        ];
    }

}

