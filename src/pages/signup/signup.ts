import {Component} from '@angular/core';
import {NavController, NavParams, MenuController, ModalController} from 'ionic-angular';
import {SigninPage} from '../Signin/Signin';
import * as $ from 'jquery';
import {LoaderPage} from "../loader/loader";
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {httpService} from "../../providers/customHttpService";

@Component({
    selector: 'page-signup',
    templateUrl: 'signup.html',
})
export class SignupPage {
    error: string;
    profile_image;
    email;
    password;
    confirmpassword;
    fname;
    lname;
    phone;
    gender;

    constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public httpprovider: httpService,
                public Menu: MenuController, public modalCtrl: ModalController,) {
    }

    ionViewDidLoad() {
        this.Menu.enable(false);
    }

    doSignUp() {

        let Loading = this.modalCtrl.create(LoaderPage);
        $('#btn-register').addClass('highlight');
        if (this.profile_image != null || this.email != null || this.password != null || this.confirmpassword != null || this.fname != null || this.lname != null || this.phone != null || this.gender != null) {
            let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            if (regExp.test(this.email)) {
                if (this.gender) {
                    regExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
                    if (regExp.test(this.phone)) {
                        regExp = /[a-zA-Z ]*/;

                        if (regExp.test(this.fname) && regExp.test(this.lname)) {
                            if (this.password == this.confirmpassword) {
                                let fd = new FormData();
                                fd.append('profile_image', this.profile_image);
                                fd.append('email', this.email);
                                fd.append('fname', this.fname);
                                fd.append('lname', this.lname);
                                fd.append('phone', this.phone);
                                fd.append('gender', this.gender);
                                fd.append('password', this.password);
                                Loading.present();

                                this.httpprovider.signUp(fd)
                                    .subscribe((data) => {
                                        console.log(data);
                                        Loading.dismiss();
                                        this.navCtrl.setRoot(SigninPage);
                                    })
                            } else {
                                this.error = 'you entered password and reenter password both are different';
                                this.showPopup();
                            }
                        } else {
                            this.error = 'enter valid name fname &lname';
                            this.showPopup();
                        }
                    } else {
                        this.error = 'enter a valid phone number';
                        this.showPopup();
                    }
                } else {
                    this.error = 'enter a valid gender';
                    this.showPopup();
                }
            } else {
                this.error = 'enter a valid email address';
                this.showPopup();
            }
        } else {
            this.error = 'enter all fild for registration';
            this.showPopup();
        }

    }

    openSignInPage() {
        this.navCtrl.setRoot(SigninPage);
    }

    changePic(event) {
        this.profile_image = event.srcElement.files[0];
    }

    showPopup() {
        $(".error_popup").show();
    }

    dismissPopup() {
        $(".error_popup").hide("slow");
    }

}
