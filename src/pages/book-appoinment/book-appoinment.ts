import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ModalController} from 'ionic-angular';
import {httpService} from "../../providers/customHttpService";
import * as $ from 'jquery';
import {AppoinmentDetailPage} from '../appoinment-detail/appoinment-detail';
import {PastservicesPage} from '../pastservices/pastservices';
import {LoadingController} from 'ionic-angular';
import {PaymentPage} from "../payment/payment";


@Component({
    selector: 'page-book-appoinment',
    templateUrl: 'book-appoinment.html',
})
export class BookAppoinmentPage {
    loaderMargin: any;
    error: any;
    today: string;
    myDate: string;
    date: any;
    serviceId: any;
    currentTimeSlote: any;
    selectedDate: any;
    data: any;
    userSelectedTimeSlote;
    time: { 'firstslote': string; 'sccondslote': string; 'thirdslote': string; }[];
    dates: { 'day': string; 'date': any; }[];

    constructor(public navCtrl: NavController, public navParams: NavParams, public Http: httpService, public modalCtrl: ModalController, public loadingCtrl: LoadingController) {
        this.myDate = new Date().toISOString();
        this.today = new Date().toISOString();
    }

    ionViewDidLoad() {
        this.loaderMargin = (($(document).width() - 100) / 2) + "px";
        let param = this.navParams.get('data');
        this.serviceId = param.id;
        let today = new Date();
        let tomorrow = new Date();
        tomorrow.setDate(today.getDate());
        let dayName = tomorrow.toString().split(' ')[0];
        let dayNO = tomorrow.toString().split(' ')[2];
        let mm = tomorrow.getMonth() + 1;
        let year = tomorrow.toString().split(' ')[3];
        this.date = year + '-' + mm + '-' + dayNO;
        let temp = new Object();
        this.selectedDate = this.date;
        this.Http.getTimeSlot(param.id, this.date)
            .then((result) => {
                temp['fulldate'] = year + '-' + mm + '-' + dayNO;
                temp['date'] = dayNO;
                temp['dayName'] = dayName;
                temp['timeslote'] = result;
                $('.spinner').css("display", 'none');

                this.currentTimeSlote = temp['timeslote'];
                let noOfTimeSlote = this.currentTimeSlote.length;
                if (noOfTimeSlote % 3 == 0) {
                    // console.log(this.currentTimeSlote[5]);
                } else {
                    if (noOfTimeSlote % 3 == 1) {
                        this.currentTimeSlote.push({status: "disable", time: "xx:xx xx", timesloteId: 'xx'});
                        this.currentTimeSlote.push({status: "disable", time: "xx:xx xx", timesloteId: 'xx'});

                    } else {
                        this.currentTimeSlote.push({status: "disable", time: "xx:xx xx", timesloteId: 'xx'})
                    }
                }
                this.data = temp;
            }, (error) => {
                console.log(error);
            });
    }

    selecteDateFun(date) {
        this.selectedDate = date;
    }

    bookTimeslote(cs) {
        $('.time_block').css("display", "none");
        $('.spinner').css("display", 'inline-block');
        if (this.userSelectedTimeSlote) {
            this.error = 'you have already booked appoinment';
            this.showPopup();
        } else {
            let flag = 0;
            if (cs.status == 'enable') {
                $('.spinner').css("display", 'none');
                let modal1 = this.modalCtrl.create(PaymentPage, {"data": this.navParams.get('data')});
                modal1.present();
                modal1.onDidDismiss(data => {
                    if (data.status == "true") {
                        $('.spinner').show();
                        let payment_status;
                        if (data.payment_status == 1) {
                            payment_status = 1;
                        } else {
                            payment_status = 0;
                        }

                        this.Http.bookAppoinment(this.serviceId, this.selectedDate, cs.timesloteId, payment_status)
                            .then((result) => {
                                $('.spinner').hide();
                                let param = this.navParams.get('data');
                                let appoinmentData = {
                                    'date': this.selectedDate,
                                    'appoinmentTime': cs.time,
                                    'serviceId': this.serviceId,
                                    'servicedata': param
                                };
                                let modal = this.modalCtrl.create(AppoinmentDetailPage, {'myParam': appoinmentData});
                                modal.present();
                                this.navCtrl.setRoot(PastservicesPage);
                                cs.status = "disable";
                                flag = 1;
                                this.error = "your appoinment is booked " + cs.time;
                                this.showPopup();
                                this.userSelectedTimeSlote = 1;
                            }, (error: any) => {
                                this.error = error.msg;
                                this.showPopup();

                            })
                    } else {
                        this.error = data.error;
                        if (this.error) {

                            this.showPopup();
                        }
                    }
                });
            } else {
                this.error = "this time slote is alwareday booked chose another one";
                this.showPopup();
            }
        }
    }

    selecteDateFunction() {
        $('.time_block').css("display", "none");
        $('.spinner').css("display", 'inline-block');
        let temp = new Object();
        let param = this.navParams.get('data');
        this.selectedDate = this.myDate;
        let selectedDate = this.myDate.toString().split('T')[0];
        let dayNO = selectedDate.split('-')[2];
        let year = selectedDate.split('-')[0];
        let mm = selectedDate.split('-')[1];
        this.selectedDate = year + '-' + mm + '-' + dayNO;
        this.Http.getTimeSlot(param.id, this.selectedDate)
            .then((result) => {
                console.log(result);
                temp['fulldate'] = selectedDate;
                temp['date'] = dayNO;
                temp['dayName'] = '';
                temp['timeslote'] = result;
                $('.spinner').css("display", 'none');
                this.currentTimeSlote = temp['timeslote'];
                let noOfTimeSlote = this.currentTimeSlote.length;
                if (noOfTimeSlote % 3 == 0) {

                } else {
                    if (noOfTimeSlote % 3 == 1) {
                        this.currentTimeSlote.push({status: "disable", time: "xx:xx xx", timesloteId: 'xx'})
                        this.currentTimeSlote.push({status: "disable", time: "xx:xx xx", timesloteId: 'xx'})
                    } else {
                        this.currentTimeSlote.push({status: "disable", time: "xx:xx xx", timesloteId: 'xx'})
                    }
                }
                this.data = this.currentTimeSlote;
                $('.time_block').css("display", "block");
            }, (error) => {
                console.log(error)
            });
    }

    showPopup() {
        $(".error_popup").show();
    }

    dismissPopup() {
        $(".error_popup").hide("slow");
        $('.time_block').css("display", "block");
        $('.spinner').css("display", 'none');
    }

}
