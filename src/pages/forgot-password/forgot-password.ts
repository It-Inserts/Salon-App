import {Component} from '@angular/core';
import {NavController, NavParams, MenuController, ModalController} from 'ionic-angular';
import {httpService} from "../../providers/customHttpService";
import {SigninPage} from "../Signin/Signin";
import * as $ from 'jquery';
import {LoaderPage} from '../loader/loader';

@Component({
    selector: 'page-forgot-password',
    templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {
    flag: number;
    error: string;
    email: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public Menu: MenuController, public Http: httpService, public modalCtrl: ModalController,) {
        this.email;
    }

    ionViewDidLoad() {
        this.Menu.enable(false);
    }

    opnpagecode() {
        let profileModal = this.modalCtrl.create(LoaderPage);
        if (this.email) {
            let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            if (regExp.test(this.email)) {
                profileModal.present();
                this.Http.forgottpassword(this.email)
                    .then((result: any) => {
                        this.error = result.msg;
                        profileModal.dismiss();
                        this.showPopup(1);
                    }, (error) => {
                        this.email = null;
                        profileModal.dismiss();
                        this.error = 'you enter a wrong email tray again';
                        this.showPopup(0);
                    })
            } else {
                this.error = 'enter a valid email';
                this.showPopup(0);
            }
        } else {
            this.error = 'enter a valid email';
            this.showPopup(0);
        }
    }

    openSignInPage() {
        this.navCtrl.setRoot(SigninPage);
    }

    showPopup(a) {
        this.flag = a;
        $(".error_popup").show();
    }

    dismissPopup() {
        if (this.flag == 1) {
            $(".error_popup").hide("slow");
            this.navCtrl.setRoot(SigninPage);
        }
        else {
            $(".error_popup").hide("slow");
        }
    }
}
