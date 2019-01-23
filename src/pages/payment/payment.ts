import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController, Platform} from 'ionic-angular';
import {PayPal, PayPalPayment, PayPalConfiguration, PayPalPaymentDetails} from '@ionic-native/paypal';
import {httpService} from "../../providers/customHttpService";

@IonicPage()
@Component({
    selector: 'page-payment',
    templateUrl: 'payment.html',
})
export class PaymentPage {
    btncreditcard = true;
    btnpaypal = false;
    paypalProductionKey: any;
    err:any;
    constructor(public navCtrl: NavController, private platform: Platform, public navParams: NavParams, private payPal: PayPal, public viewCtrl: ViewController, private http: httpService) {
        platform.ready().then(() => {

            platform.registerBackButtonAction(() => {

                let d = {
                    status: 'false',
                    payment_status: '0'
                }
                this.viewCtrl.dismiss(d);
            });
        });
        this.http.getSetting()
            .then((response: any) => {
                this.paypalProductionKey = response.data.api_signature;
            }, (error) => {
                console.log(error)
            });

    }

    activemethod(value) {
        if (value == "paypal") {
            this.btnpaypal = true;
            this.btncreditcard = false;
        }
        else {
            this.btncreditcard = true;
            this.btnpaypal = false;
        }
    }

    submit() {
        let d = {
            status: 'true',
            payment_status: '0'
        }
        this.viewCtrl.dismiss(d);
    }

    paypal() {
        let data = this.navParams.get('data');
        console.log(data.price);
        this.payPal.init({
            PayPalEnvironmentProduction: this.paypalProductionKey,
            PayPalEnvironmentSandbox: ''//your paypal sandbox secreat
        }).then(() => {
            let payDetails = new PayPalPaymentDetails("5.00","0.00","0.00");
            this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({})).then(() => {
                let payment = new PayPalPayment(data.price, 'USD', 'Description', 'sale', payDetails);
                this.payPal.renderSinglePaymentUI(payment).then(() => {
                    // Successfully paid
                    let d = {
                        status: 'true',
                        payment_status: '1'
                    }
                    this.viewCtrl.dismiss(d);

                }, () => {
                    let d = {
                        status: 'false',
                        payment_status: '0',
                        error: 'please try again payment does not being successful'
                    }
                    this.viewCtrl.dismiss(d);
                });
            }, () => {
                let d = {
                    status: 'false',
                    payment_status: '0',
                    error: 'please try again payment does not being successful'
                }
                this.viewCtrl.dismiss(d);
            });
        }, () => {
            let d = {
                status: 'false',
                payment_status: '0',
                error: 'please try again payment does not being successful'
            }
            this.viewCtrl.dismiss(d);
        });
    }


}
