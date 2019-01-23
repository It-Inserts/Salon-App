import {Component} from '@angular/core';
import {NavController, NavParams, MenuController, ModalController} from 'ionic-angular';
import {authenticationService} from "../../providers/authenticationService";
import {httpService} from "../../providers/customHttpService";
import {Facebook, FacebookLoginResponse} from '@ionic-native/facebook';
import {CategaryPage} from "../categary/categary";
import {SignupPage} from "../signup/signup";
import {ForgotPasswordPage} from "../forgot-password/forgot-password";
import * as $ from 'jquery';
import {LoaderPage} from '../loader/loader';

@Component({
    selector: 'page-signin',
    templateUrl: 'signin.html',
})
export class SigninPage {
    email:any;
    password:any;
    pattern;
    error;

    constructor(public navCtrl: NavController, public navParams: NavParams, public auth: authenticationService, public http: httpService, public Menu: MenuController,
                public modalCtrl: ModalController, public fb: Facebook,) {
        // this.email='hello1@gmail.com';
        // this.password='hello123';
        this.pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";
    }

    ionViewDidLoad() {

        this.Menu.enable(false);
    }

    doLogin() {

        let Loading = this.modalCtrl.create(LoaderPage);
        if (this.email != null && this.password != null) {
            let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            if (regExp.test(this.email)) {
                Loading.present();
                this.auth.login(this.email, this.password)
                    .then((response) => {
                        this.http.setToken(response.u_token);
                        this.Menu.enable(true);
                        Loading.dismiss();
                        this.navCtrl.setRoot(CategaryPage);
                    }, (error) => {
                        if (error.status == 401) {
                            Loading.dismiss();
                            this.error = "you have enter a wrong credential for login \n try again";
                            this.showPopup();
                            this.email = null;
                            this.password = null;
                        } else {
                            Loading.dismiss();
                            this.error = "chek your network connection \n try again";
                            this.showPopup();
                            this.email = null;
                            this.password = null;
                        }
                    });
            } else {
                this.error = 'enter a valid email address';
                this.showPopup();
                this.email = null;
                this.password = null;
            }
        } else {
            this.error = 'enter a email or password';
            this.showPopup();
            this.email = null;
            this.password = null;
        }
    }

    loginWithFacebook() {
        this.fb.login(['public_profile', 'email', 'user_about_me'])
            .then((res: FacebookLoginResponse) => {
                this.http.setFbToken(res.authResponse.userID);//set fb token
                this.fb.api('/me?fields=id,picture,birthday,email,first_name,gender,last_name,name',
                    ['public_profile', 'email', 'user_about_me'])
                    .then((userData) => {
                        let imgurl = "https://graph.facebook.com/" + res.authResponse.userID + "/picture?width=500&height=500";
                        this.http.facebookUserData(userData, imgurl)
                            .then((result) => {
                                    this.Menu.enable(true);
                                    this.navCtrl.setRoot(CategaryPage);
                                },
                                (error) => {
                                    this.error = "plz re-login some error ouccor";
                                    this.showPopup();
                                });
                    }, (error) => {
                        console.log(error)
                    });
            }, (error) => {
                if (error.status == 401) {
                    console.log(error);
                }
            });

    }

    openSignUpPage() {
        this.navCtrl.setRoot(SignupPage);
    }

    openForgotPasswordPage() {
        this.navCtrl.setRoot(ForgotPasswordPage);
    }

    showPopup() {
        $(".error_popup").show();
    }

    dismissPopup() {
        $(".error_popup").hide("slow");
    }
}

