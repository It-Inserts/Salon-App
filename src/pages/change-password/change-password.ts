import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {httpService} from "../../providers/customHttpService";

@Component({
    selector: 'page-change-password',
    templateUrl: 'change-password.html',
})
export class ChangePasswordPage {
    oldpassword: any;
    newPassword: any;
    confirmPassword: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public Http: httpService,) {
    }

    chang_password() {
        if (this.oldpassword && this.newPassword && this.confirmPassword) {
            if (this.newPassword == this.confirmPassword) {
                this.Http.changePassword(this.oldpassword, this.newPassword).then((response) => {
                    console.log(response);
                }, (error) => {
                    if (error.status == 401) {
                        console.log(error.status);
                    }
                });
            } else {
                alert("please enter a same passwor in new password  and reenter password")
            }
        } else {

        }
    }
}
