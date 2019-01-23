import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {DynamicthemingProvider} from "../../providers/dynamictheming/dynamictheming";

@Component({
    selector: 'page-themechange',
    templateUrl: 'themechange.html',
})
export class ThemechangePage {
    selectedTheme: any;
    theamvalue: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, private settings: DynamicthemingProvider) {
        this.settings.getActiveTheme().subscribe(val => {
            this.selectedTheme = val;
            this.theamvalue = val;
        });
    }

    toggleAppTheme(theam) {
        this.settings.setActiveTheme(theam);
    }
}
