webpackJsonp([1],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customHttpService__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var authenticationService = (function () {
    function authenticationService(http) {
        this.http = http;
    }
    authenticationService.prototype.login = function (username, password) {
        var url = 'login';
        var headers = new Headers();
        var formData = new FormData();
        formData.append('email', username);
        formData.append('password', password);
        return this.http.post(url, formData, { headers: headers });
    };
    return authenticationService;
}());
authenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__customHttpService__["a" /* httpService */]])
], authenticationService);

//# sourceMappingURL=authenticationService.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_customHttpService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doctorlist_doctorlist__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategaryPage = (function () {
    function CategaryPage(navCtrl, Http, navParams, Menu) {
        this.navCtrl = navCtrl;
        this.Http = Http;
        this.navParams = navParams;
        this.Menu = Menu;
    }
    CategaryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.Menu.enable(true);
        this.Http.getCategaryList()
            .then(function (response) {
            _this.data = response;
            __WEBPACK_IMPORTED_MODULE_4_jquery__('#loader_row').css("display", 'none');
        }, function (error) {
            if (error.status == 401) {
                console.log(error.status);
            }
        });
    };
    CategaryPage.prototype.select_categary = function (data) {
        this.Http.setCategaryId(data.id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__doctorlist_doctorlist__["a" /* DoctorlistPage */], {
            id: data.id
        });
    };
    return CategaryPage;
}());
CategaryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-categary',template:/*ion-inline-start:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/categary/categary.html"*/'<ion-header>\n    <ion-navbar>\n        <button item-start ion-button icon-only color="white" menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Categary</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content CategaryPage>\n    <ion-grid justify-content-center align-items-center class="container" id="grid_container">\n        <ion-row class="loader_row" id="loader_row">\n            <ion-col class="loader_col" id="loader_col" style="text-align: center">\n                <ion-spinner class="spinner" name="crescent" id="loader"></ion-spinner>\n            </ion-col>\n        </ion-row>\n        <div class="tile_panel">\n            <div class="pin left_tile" *ngFor="let d of data" (click)="select_categary(d)">\n                <img src="{{d.category_image}}" class="img" imageViewer alt="assets/image/category.png"/>\n                <p>\n                    {{d.category}}\n                </p>\n            </div>\n        </div>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/categary/categary.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_customHttpService__["a" /* httpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */]])
], CategaryPage);

//# sourceMappingURL=categary.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_customHttpService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__book_appoinment_book_appoinment__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DoctorlistPage = (function () {
    function DoctorlistPage(navCtrl, navParams, Http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Http = Http;
    }
    DoctorlistPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var firstParam = this.navParams.get("id");
        if (firstParam) {
            this.Http.serviceByCategary(firstParam).then(function (response) {
                __WEBPACK_IMPORTED_MODULE_3_jquery__('.loader_row').css("display", 'none');
                _this.serviceList = response;
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.Http.getServiceList().then(function (response) {
                __WEBPACK_IMPORTED_MODULE_3_jquery__('.loader_row').css("display", 'none');
                _this.serviceList = response;
            }, function (error) {
                if (error.status == 401) {
                    console.log(error.status);
                }
            });
        }
    };
    DoctorlistPage.prototype.openBookAppoimentPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__book_appoinment_book_appoinment__["a" /* BookAppoinmentPage */]);
    };
    DoctorlistPage.prototype.selectService = function (service) {
        var id = '#select' + service.id;
        __WEBPACK_IMPORTED_MODULE_3_jquery__(id).prop('checked', true);
        __WEBPACK_IMPORTED_MODULE_3_jquery__(id).attr('checked', 'checked');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__book_appoinment_book_appoinment__["a" /* BookAppoinmentPage */], {
            'data': service
        });
    };
    return DoctorlistPage;
}());
DoctorlistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-doctorlist',template:/*ion-inline-start:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/doctorlist/doctorlist.html"*/'<ion-header align-title="center">\n    <ion-navbar color="dark">\n        <button item-start ion-button icon-only color="white" menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Services</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content center>\n    <ion-grid class="container">\n        <ion-title>\n            <div class="title-heading">Book Appoinment</div>\n        </ion-title>\n        <div class="loader_row row" id="loader_row">\n            <div class="col" style="text-align: center" id="loader_col">\n                <ion-spinner class="spinner" name="crescent" id="loader"></ion-spinner>\n            </div>\n        </div>\n\n\n        <ion-row class="media-object" *ngFor="let service of serviceList" attr.id="service{{service.id}}" (click)="selectService(service)">\n            <ion-row col-12 class="doctor-detail">\n                <ion-col col-3 class="img">\n                    <img src="{{service.service_image}}" alt="assets/image/service.png"/>\n                </ion-col>\n                <ion-col col-9 class="detail">\n                    <div class="row doctor_name">{{service.name}}</div>\n                    <div class="row price">{{service.price}} , {{service.point}} Points</div>\n                </ion-col>\n\n            </ion-row>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/doctorlist/doctorlist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_customHttpService__["a" /* httpService */]])
], DoctorlistPage);

//# sourceMappingURL=doctorlist.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PastservicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_customHttpService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loader_loader__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PastservicesPage = (function () {
    function PastservicesPage(navCtrl, navParams, http, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.modalCtrl = modalCtrl;
    }
    PastservicesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var Loading = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__loader_loader__["a" /* LoaderPage */]);
        Loading.present();
        this.http.getUserPoint()
            .then(function (response) {
            _this.data = response.appointment;
            Loading.dismiss();
        }, function (error) {
            Loading.dismiss();
            console.log(error);
        });
    };
    return PastservicesPage;
}());
PastservicesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pastservices',template:/*ion-inline-start:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/pastservices/pastservices.html"*/'<ion-header align-title="center">\n    <ion-navbar>\n        <button item-start ion-button icon-only color="white" menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Services</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content center>\n    <ion-grid class="container">\n        <ion-title>\n            <div class="title-heading">My Appoinment</div>\n        </ion-title>\n        <ion-row class="media-object" *ngFor="let service of data" attr.id="Service{{service.id}}">\n            <ion-row col-12 class="doctor-detail">\n                <ion-col col-3 class="img">\n                    <img src="assets/image/profile-image.jpg"/>\n                </ion-col>\n                <ion-col col-8 class="detail">\n                    <div class="row doctor_name">{{service.service_name}}</div>\n                    <div class="row qualification">{{service.category_name}}</div>\n                    <div class="row price">{{service.service_point}} Points</div>\n                </ion-col>\n            </ion-row>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/pastservices/pastservices.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_customHttpService__["a" /* httpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], PastservicesPage);

//# sourceMappingURL=pastservices.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicthemingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';
// import { map } from 'rxjs/operator/map';

/*
  Generated class for the DynamicthemingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DynamicthemingProvider = (function () {
    function DynamicthemingProvider() {
        this.theme = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]('');
    }
    DynamicthemingProvider.prototype.setActiveTheme = function (val) {
        this.theme.next(val);
    };
    DynamicthemingProvider.prototype.getActiveTheme = function () {
        return this.theme.asObservable();
    };
    return DynamicthemingProvider;
}());
DynamicthemingProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DynamicthemingProvider);

//# sourceMappingURL=dynamictheming.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_paypal__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_customHttpService__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaymentPage = (function () {
    function PaymentPage(navCtrl, platform, navParams, payPal, viewCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.navParams = navParams;
        this.payPal = payPal;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.btncreditcard = true;
        this.btnpaypal = false;
        platform.ready().then(function () {
            platform.registerBackButtonAction(function () {
                var d = {
                    status: 'false',
                    payment_status: '0'
                };
                _this.viewCtrl.dismiss(d);
            });
        });
        this.http.getSetting()
            .then(function (response) {
            _this.paypalProductionKey = response.data.api_signature;
        }, function (error) {
            console.log(error);
        });
    }
    PaymentPage.prototype.activemethod = function (value) {
        if (value == "paypal") {
            this.btnpaypal = true;
            this.btncreditcard = false;
        }
        else {
            this.btncreditcard = true;
            this.btnpaypal = false;
        }
    };
    PaymentPage.prototype.submit = function () {
        var d = {
            status: 'true',
            payment_status: '0'
        };
        this.viewCtrl.dismiss(d);
    };
    PaymentPage.prototype.paypal = function () {
        var _this = this;
        var data = this.navParams.get('data');
        console.log(data.price);
        this.payPal.init({
            PayPalEnvironmentProduction: this.paypalProductionKey,
            PayPalEnvironmentSandbox: '' //your paypal sandbox secreat
        }).then(function () {
            var payDetails = new __WEBPACK_IMPORTED_MODULE_2__ionic_native_paypal__["d" /* PayPalPaymentDetails */]("5.00", "0.00", "0.00");
            _this.payPal.prepareToRender('PayPalEnvironmentSandbox', new __WEBPACK_IMPORTED_MODULE_2__ionic_native_paypal__["b" /* PayPalConfiguration */]({})).then(function () {
                var payment = new __WEBPACK_IMPORTED_MODULE_2__ionic_native_paypal__["c" /* PayPalPayment */](data.price, 'USD', 'Description', 'sale', payDetails);
                _this.payPal.renderSinglePaymentUI(payment).then(function () {
                    // Successfully paid
                    var d = {
                        status: 'true',
                        payment_status: '1'
                    };
                    _this.viewCtrl.dismiss(d);
                }, function () {
                    var d = {
                        status: 'false',
                        payment_status: '0',
                        error: 'please try again payment does not being successful'
                    };
                    _this.viewCtrl.dismiss(d);
                });
            }, function () {
                var d = {
                    status: 'false',
                    payment_status: '0',
                    error: 'please try again payment does not being successful'
                };
                _this.viewCtrl.dismiss(d);
            });
        }, function () {
            var d = {
                status: 'false',
                payment_status: '0',
                error: 'please try again payment does not being successful'
            };
            _this.viewCtrl.dismiss(d);
        });
    };
    return PaymentPage;
}());
PaymentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-payment',template:/*ion-inline-start:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/payment/payment.html"*/'<ion-header align-title="center">\n    <ion-navbar>\n        <ion-title>Payment</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="payment">\n    <ion-grid class="top-padding">\n        <ion-row>\n            <ion-col col-6>\n                <button class="btn-option" ion-button color="light" [ngClass]="{\'active\': btncreditcard == true}"\n                        (click)="activemethod(\'credit\')">\n                    <div *ngIf="btncreditcard" class="main-circle">\n                        <p class="circle"></p>\n                    </div>\n                    pay locally\n                </button>\n            </ion-col>\n            <ion-col col-6>\n                <button class="btn-option" ion-button color="light" [ngClass]="{\'active\': btnpaypal == true}"\n                        (click)="activemethod(\'paypal\')">\n                    <div *ngIf="btnpaypal" class="main-circle">\n                        <p class="circle"></p>\n                    </div>\n                    Pay with Paypal\n                </button>\n            </ion-col>\n        </ion-row>\n        <ion-row *ngIf="btncreditcard">\n                <ion-card class="top-padding">\n                    <p class="textdata">You select payment method is cash on spot</p>\n                </ion-card>\n            <button ion-button color="dark" class="btn-submit top-padding" round (click)="submit()">Submit</button>\n        </ion-row>\n        <ion-row *ngIf="btnpaypal">\n            <ion-card class="top-padding">\n                <p ion-item>You select payment method is PayPal</p>\n            </ion-card>\n            <button ion-button color="dark" class="btn-submit top-padding" (click)="paypal()" round>Submit</button>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/payment/payment.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_paypal__["a" /* PayPal */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_customHttpService__["a" /* httpService */]])
], PaymentPage);

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return httpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpService = (function () {
    function httpService(http, nativeStorage) {
        this.http = http;
        this.nativeStorage = nativeStorage;
        this.baseUrl = 'http://coder12895.com/saloon/admin/api/';
        this.token = '';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    httpService.prototype.setFbToken = function (fbToken) {
        this.fbToken = fbToken;
    };
    httpService.prototype.getFbToken = function () {
        return this.fbToken;
    };
    httpService.prototype.signUp = function (data) {
        var url = 'registration';
        url = this.baseUrl + url;
        return this.http.post(url, data).map(function (data) { return data.json(); });
    };
    httpService.prototype.setToken = function (token) {
        if (token == null) {
            this.token = null;
        }
        else {
            this.token = token;
        }
        this.nativeStorage.setItem('token', this.token)
            .then(function () { return console.log('Stored item!'); }, function (error) { return console.error('Error storing item', error); });
        this.nativeStorage.getItem('token')
            .then(function (data) { return console.log(data); }, function (error) { return console.error(error); });
    };
    httpService.prototype.getToken = function () {
        return this.token;
    };
    httpService.prototype.getServiceList = function () {
        var _this = this;
        var url = 'service';
        var data = "no data";
        url = this.baseUrl + url;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('authorization', this.token);
        return new Promise(function (resolve, reject) {
            _this.http.post(url, data, { headers: headers }).subscribe(function (response) {
                response = response.json();
                resolve(response.data);
                if (response.code == 200) {
                }
                else {
                    reject(response);
                }
            }), function (error) {
                reject(error);
            };
        });
    };
    httpService.prototype.getCategaryList = function () {
        var _this = this;
        var url = 'category';
        var data = "no data";
        url = this.baseUrl + url;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('authorization', this.token);
        return new Promise(function (resolve, reject) {
            _this.http.post(url, data, { headers: headers }).subscribe(function (response) {
                response = response.json();
                resolve(response.data);
                if (response.code == 200) {
                }
                else {
                    reject(response);
                }
            }), function (error) {
                reject(error);
            };
        });
    };
    httpService.prototype.getUserData = function () {
        var _this = this;
        var url = 'userdata';
        var data = "no data";
        url = this.baseUrl + url;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('authorization', this.token);
        return new Promise(function (resolve, reject) {
            _this.http.post(url, data, { headers: headers }).subscribe(function (response) {
                response = response.json();
                resolve(response.data);
                if (response.code == 200) {
                }
                else {
                    reject(response);
                }
            }), function (error) {
                reject(error);
            };
        });
    };
    httpService.prototype.facebookUserData = function (userdata, imgurl) {
        var _this = this;
        var url = 'facebook';
        url = this.baseUrl + url;
        var formData = new FormData();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        formData.append('profile_image', imgurl);
        formData.append('email', userdata.email);
        formData.append('fname', userdata.first_name);
        formData.append('lname', userdata.last_name);
        formData.append('gender', userdata.gender);
        return new Promise(function (resolve, reject) {
            _this.http.post(url, formData, { headers: headers })
                .subscribe(function (response) {
                if (response.status == 200) {
                    response = response.json();
                    _this.setToken(response.token);
                    resolve(response.data);
                }
                else {
                    alert("try again some error ouccors");
                }
            }), function (error) {
                reject(error);
            };
        });
    };
    httpService.prototype.changePassword = function (oldpsw, newpsw) {
        var _this = this;
        var url = 'changepassword';
        url = this.baseUrl + url;
        var formData = new FormData();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        formData.append("oldpass", oldpsw);
        formData.append("newpass", newpsw);
        headers.append('authorization', this.token);
        return new Promise(function (resolve, reject) {
            _this.http.post(url, formData, { headers: headers }).subscribe(function (response) {
                response = response.json();
                resolve(response.data);
                if (response.code == 200) {
                }
                else {
                    reject(response);
                }
            }), function (error) {
                reject(error);
            };
        });
    };
    httpService.prototype.getUserPoint = function () {
        var _this = this;
        var url = 'userpoint';
        var data = "no data";
        url = this.baseUrl + url;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('authorization', this.token);
        return new Promise(function (resolve, reject) {
            _this.http.post(url, data, { headers: headers }).subscribe(function (response) {
                response = response.json();
                resolve(response.data);
                if (response.code == 200) {
                }
                else {
                    reject(response);
                }
            }), function (error) {
                reject(error);
            };
        });
    };
    httpService.prototype.getTimeSlot = function (service_id, date) {
        var _this = this;
        var url = 'timeslot';
        url = this.baseUrl + url;
        var formData = new FormData();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('authorization', this.token);
        formData.append('appointment_date', date);
        formData.append('service_id', service_id);
        return new Promise(function (resolve, reject) {
            _this.http.post(url, formData, { headers: headers }).subscribe(function (response) {
                if (response.status == 200) {
                    response = response.json();
                    resolve(response.data);
                }
                else {
                    reject(response);
                }
            }), function (error) {
                reject(error);
            };
        });
    };
    httpService.prototype.post = function (url, data, _a) {
        var _this = this;
        var headers = _a.headers;
        if (this.token) {
            this.headers.append('authorization', this.token);
        }
        url = this.baseUrl + url;
        return new Promise(function (resolve, reject) {
            _this.http.post(url, data, { headers: _this.Headers }).subscribe(function (response) {
                response = response.json();
                resolve(response);
                if (response.code == 200) {
                }
                else {
                    reject(response);
                }
            }, function (error) {
                reject(error);
            });
        });
    };
    httpService.prototype.setCategaryId = function (id) {
        this.categary_ID = id;
    };
    httpService.prototype.getCategaryID = function () {
        return this.categary_ID;
    };
    httpService.prototype.serviceByCategary = function (id) {
        var _this = this;
        var url = 'category_service';
        url = this.baseUrl + url;
        var formData = new FormData();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('authorization', this.token);
        formData.append('id', id);
        return new Promise(function (resolve, reject) {
            _this.http.post(url, formData, { headers: headers }).subscribe(function (response) {
                response = response.json();
                resolve(response.data);
                if (response.code == 200) {
                }
                else {
                    reject(response);
                }
            }), function (error) {
                reject(error);
            };
        });
    };
    httpService.prototype.bookAppoinment = function (service_id, appointment_date, appointment_time, payment_status) {
        var _this = this;
        var url = 'appointment';
        url = this.baseUrl + url;
        var formData = new FormData();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('authorization', this.token);
        formData.append('service_id', service_id);
        formData.append('payment_status', payment_status);
        formData.append('appointment_date', appointment_date);
        formData.append('appointment_time', appointment_time);
        return new Promise(function (resolve, reject) {
            _this.http.post(url, formData, { headers: headers })
                .subscribe(function (response) {
                if (response.status == 200) {
                    response = response.json();
                    resolve(response.data);
                }
                else {
                    response = response.json();
                    reject(response);
                }
            }), function (error) {
                error = error.json();
                reject(error);
            };
        });
    };
    httpService.prototype.forgottpassword = function (email) {
        var _this = this;
        var url = 'forgotpassword';
        url = this.baseUrl + url;
        var formData = new FormData();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        formData.append("email", email);
        return new Promise(function (resolve, reject) {
            _this.http.post(url, formData, { headers: headers })
                .subscribe(function (response) {
                response = response.json();
                resolve(response);
            }, function (error) {
                error = error.json();
                alert(error.msg);
                reject(error);
            });
        });
    };
    httpService.prototype.setLocalToken = function (Token) {
        this.token = Token;
    };
    httpService.prototype.getGallary = function () {
        var _this = this;
        var url = 'gallary';
        var data = "no data";
        url = this.baseUrl + url;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('authorization', this.token);
        return new Promise(function (resolve, reject) {
            _this.http.post(url, data, { headers: headers }).subscribe(function (response) {
                response = response.json();
                resolve(response.gallary);
            }), function (error) {
                reject(error);
            };
        });
    };
    httpService.prototype.beforeAfter = function () {
        var _this = this;
        var url = 'before_after';
        var data = "no data";
        url = this.baseUrl + url;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('authorization', this.token);
        return new Promise(function (resolve, reject) {
            _this.http.post(url, data, { headers: headers })
                .subscribe(function (response) {
                response = response.json();
                resolve(response);
            }), function (error) {
                reject(error);
            };
        });
    };
    httpService.prototype.getSetting = function () {
        var _this = this;
        var url = 'setting_wp';
        var data = "no data";
        url = this.baseUrl + url;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('authorization', this.token);
        return new Promise(function (resolve, reject) {
            _this.http.post(url, data, { headers: headers })
                .subscribe(function (response) {
                console.log();
                response = response.json();
                resolve(response);
            }), function (error) {
                reject(error);
            };
        });
    };
    return httpService;
}());
httpService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_storage__["a" /* NativeStorage */]])
], httpService);

//# sourceMappingURL=customHttpService.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/payment/payment.module": [
		291,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookAppoinmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_customHttpService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__appoinment_detail_appoinment_detail__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pastservices_pastservices__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__payment_payment__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var BookAppoinmentPage = (function () {
    function BookAppoinmentPage(navCtrl, navParams, Http, modalCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Http = Http;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.myDate = new Date().toISOString();
        this.today = new Date().toISOString();
    }
    BookAppoinmentPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loaderMargin = ((__WEBPACK_IMPORTED_MODULE_3_jquery__(document).width() - 100) / 2) + "px";
        var param = this.navParams.get('data');
        this.serviceId = param.id;
        var today = new Date();
        var tomorrow = new Date();
        tomorrow.setDate(today.getDate());
        var dayName = tomorrow.toString().split(' ')[0];
        var dayNO = tomorrow.toString().split(' ')[2];
        var mm = tomorrow.getMonth() + 1;
        var year = tomorrow.toString().split(' ')[3];
        this.date = year + '-' + mm + '-' + dayNO;
        var temp = new Object();
        this.selectedDate = this.date;
        this.Http.getTimeSlot(param.id, this.date)
            .then(function (result) {
            temp['fulldate'] = year + '-' + mm + '-' + dayNO;
            temp['date'] = dayNO;
            temp['dayName'] = dayName;
            temp['timeslote'] = result;
            __WEBPACK_IMPORTED_MODULE_3_jquery__('.spinner').css("display", 'none');
            _this.currentTimeSlote = temp['timeslote'];
            var noOfTimeSlote = _this.currentTimeSlote.length;
            if (noOfTimeSlote % 3 == 0) {
                // console.log(this.currentTimeSlote[5]);
            }
            else {
                if (noOfTimeSlote % 3 == 1) {
                    _this.currentTimeSlote.push({ status: "disable", time: "xx:xx xx", timesloteId: 'xx' });
                    _this.currentTimeSlote.push({ status: "disable", time: "xx:xx xx", timesloteId: 'xx' });
                }
                else {
                    _this.currentTimeSlote.push({ status: "disable", time: "xx:xx xx", timesloteId: 'xx' });
                }
            }
            _this.data = temp;
        }, function (error) {
            console.log(error);
        });
    };
    BookAppoinmentPage.prototype.selecteDateFun = function (date) {
        this.selectedDate = date;
    };
    BookAppoinmentPage.prototype.bookTimeslote = function (cs) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.time_block').css("display", "none");
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.spinner').css("display", 'inline-block');
        if (this.userSelectedTimeSlote) {
            this.error = 'you have already booked appoinment';
            this.showPopup();
        }
        else {
            var flag_1 = 0;
            if (cs.status == 'enable') {
                __WEBPACK_IMPORTED_MODULE_3_jquery__('.spinner').css("display", 'none');
                var modal1 = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__payment_payment__["a" /* PaymentPage */], { "data": this.navParams.get('data') });
                modal1.present();
                modal1.onDidDismiss(function (data) {
                    if (data.status == "true") {
                        __WEBPACK_IMPORTED_MODULE_3_jquery__('.spinner').show();
                        var payment_status = void 0;
                        if (data.payment_status == 1) {
                            payment_status = 1;
                        }
                        else {
                            payment_status = 0;
                        }
                        _this.Http.bookAppoinment(_this.serviceId, _this.selectedDate, cs.timesloteId, payment_status)
                            .then(function (result) {
                            __WEBPACK_IMPORTED_MODULE_3_jquery__('.spinner').hide();
                            var param = _this.navParams.get('data');
                            var appoinmentData = {
                                'date': _this.selectedDate,
                                'appoinmentTime': cs.time,
                                'serviceId': _this.serviceId,
                                'servicedata': param
                            };
                            var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__appoinment_detail_appoinment_detail__["a" /* AppoinmentDetailPage */], { 'myParam': appoinmentData });
                            modal.present();
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pastservices_pastservices__["a" /* PastservicesPage */]);
                            cs.status = "disable";
                            flag_1 = 1;
                            _this.error = "your appoinment is booked " + cs.time;
                            _this.showPopup();
                            _this.userSelectedTimeSlote = 1;
                        }, function (error) {
                            _this.error = error.msg;
                            _this.showPopup();
                        });
                    }
                    else {
                        _this.error = data.error;
                        if (_this.error) {
                            _this.showPopup();
                        }
                    }
                });
            }
            else {
                this.error = "this time slote is alwareday booked chose another one";
                this.showPopup();
            }
        }
    };
    BookAppoinmentPage.prototype.selecteDateFunction = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.time_block').css("display", "none");
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.spinner').css("display", 'inline-block');
        var temp = new Object();
        var param = this.navParams.get('data');
        this.selectedDate = this.myDate;
        var selectedDate = this.myDate.toString().split('T')[0];
        var dayNO = selectedDate.split('-')[2];
        var year = selectedDate.split('-')[0];
        var mm = selectedDate.split('-')[1];
        this.selectedDate = year + '-' + mm + '-' + dayNO;
        this.Http.getTimeSlot(param.id, this.selectedDate)
            .then(function (result) {
            console.log(result);
            temp['fulldate'] = selectedDate;
            temp['date'] = dayNO;
            temp['dayName'] = '';
            temp['timeslote'] = result;
            __WEBPACK_IMPORTED_MODULE_3_jquery__('.spinner').css("display", 'none');
            _this.currentTimeSlote = temp['timeslote'];
            var noOfTimeSlote = _this.currentTimeSlote.length;
            if (noOfTimeSlote % 3 == 0) {
            }
            else {
                if (noOfTimeSlote % 3 == 1) {
                    _this.currentTimeSlote.push({ status: "disable", time: "xx:xx xx", timesloteId: 'xx' });
                    _this.currentTimeSlote.push({ status: "disable", time: "xx:xx xx", timesloteId: 'xx' });
                }
                else {
                    _this.currentTimeSlote.push({ status: "disable", time: "xx:xx xx", timesloteId: 'xx' });
                }
            }
            _this.data = _this.currentTimeSlote;
            __WEBPACK_IMPORTED_MODULE_3_jquery__('.time_block').css("display", "block");
        }, function (error) {
            console.log(error);
        });
    };
    BookAppoinmentPage.prototype.showPopup = function () {
        __WEBPACK_IMPORTED_MODULE_3_jquery__(".error_popup").show();
    };
    BookAppoinmentPage.prototype.dismissPopup = function () {
        __WEBPACK_IMPORTED_MODULE_3_jquery__(".error_popup").hide("slow");
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.time_block').css("display", "block");
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.spinner').css("display", 'none');
    };
    return BookAppoinmentPage;
}());
BookAppoinmentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-book-appoinment',template:/*ion-inline-start:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/book-appoinment/book-appoinment.html"*/'<ion-header align-title="center">\n    <ion-navbar>\n        <button item-start ion-button icon-only color="white" menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Book Appoinment</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="container">\n    <div class="date_block">\n        <ion-item>\n            <ion-label>SELECT DATE</ion-label>\n            <ion-datetime displayFormat="DD/MM/YYYY" (ionChange)="selecteDateFunction()" min="{{today}}"\n                          max="2050-10-31" [(ngModel)]="myDate">\n            </ion-datetime>\n        </ion-item>\n    </div>\n    <div id="loader" style="text-align: center">\n        <ion-spinner class="spinner" name="crescent"></ion-spinner>\n    </div>\n\n    <div class="time_block">\n        <ion-grid class="time_block_grid">\n            <ion-row>\n                <div class="time_title">\n                    SELECT TIME\n                </div>\n            </ion-row>\n            <div class="container_new">\n                <div *ngFor="let cs of currentTimeSlote" [className]="cs.status" (click)="bookTimeslote(cs)">\n                    {{cs.time}}\n                </div>\n            </div>\n        </ion-grid>\n    </div>\n\n    <div class="error_popup">\n        <p>{{error}}</p>\n        <span (click)="dismissPopup()">OK</span>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/book-appoinment/book-appoinment.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_customHttpService__["a" /* httpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], BookAppoinmentPage);

//# sourceMappingURL=book-appoinment.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppoinmentDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppoinmentDetailPage = (function () {
    function AppoinmentDetailPage(navCtrl, navParams, viewCtrl, params) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.myParam = params.get('myParam');
    }
    AppoinmentDetailPage.prototype.ionViewDidLoad = function () {
        this.dayNO = this.myParam.date.toString().split('-')[2];
        this.mm = this.myParam.date.toString().split('-')[1];
        this.year = this.myParam.date.toString().split('-')[0];
        var month = new Array();
        month[1] = "January";
        month[2] = "February";
        month[3] = "March";
        month[4] = "April";
        month[5] = "May";
        month[6] = "June";
        month[7] = "July";
        month[8] = "August";
        month[9] = "September";
        month[10] = "October";
        month[11] = "November";
        month[12] = "December";
        this.mm = month[this.mm];
        __WEBPACK_IMPORTED_MODULE_2_jquery__('#date_col').css('height', __WEBPACK_IMPORTED_MODULE_2_jquery__('#date_col').width() + 70 + 'px');
        __WEBPACK_IMPORTED_MODULE_2_jquery__('.date_col').css('height', __WEBPACK_IMPORTED_MODULE_2_jquery__('#date_col').width() + 'px');
        __WEBPACK_IMPORTED_MODULE_2_jquery__('.date_col').css('width', __WEBPACK_IMPORTED_MODULE_2_jquery__('#date_col').width() + 'px');
    };
    AppoinmentDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return AppoinmentDetailPage;
}());
AppoinmentDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-appoinment-detail',template:/*ion-inline-start:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/appoinment-detail/appoinment-detail.html"*/'<ion-content fullscreen="true" class="ion_content">\n    <div class="final_popup">\n        <div class="final_popup_inner">\n            <div class="final_popup_sign">\n        <span>\n          <img src="assets/image/check-mark.png"> </span>\n            </div>\n            <div class="final_popup_sec">\n                <p class="final_popup_msg">Success</p>\n                <p>Check Your email for a booking conformation. We\'ll see you soon!</p>\n                <a href="javascript:;" (click)="dismiss()" class="final_okbtn"> OK </a>\n            </div>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/appoinment-detail/appoinment-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], AppoinmentDetailPage);

//# sourceMappingURL=appoinment-detail.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Signin_Signin__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loader_loader__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_customHttpService__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, http, httpprovider, Menu, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.httpprovider = httpprovider;
        this.Menu = Menu;
        this.modalCtrl = modalCtrl;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        this.Menu.enable(false);
    };
    SignupPage.prototype.doSignUp = function () {
        var _this = this;
        var Loading = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__loader_loader__["a" /* LoaderPage */]);
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#btn-register').addClass('highlight');
        if (this.profile_image != null || this.email != null || this.password != null || this.confirmpassword != null || this.fname != null || this.lname != null || this.phone != null || this.gender != null) {
            var regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            if (regExp.test(this.email)) {
                if (this.gender) {
                    regExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
                    if (regExp.test(this.phone)) {
                        regExp = /[a-zA-Z ]*/;
                        if (regExp.test(this.fname) && regExp.test(this.lname)) {
                            if (this.password == this.confirmpassword) {
                                var fd = new FormData();
                                fd.append('profile_image', this.profile_image);
                                fd.append('email', this.email);
                                fd.append('fname', this.fname);
                                fd.append('lname', this.lname);
                                fd.append('phone', this.phone);
                                fd.append('gender', this.gender);
                                fd.append('password', this.password);
                                Loading.present();
                                this.httpprovider.signUp(fd)
                                    .subscribe(function (data) {
                                    console.log(data);
                                    Loading.dismiss();
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__Signin_Signin__["a" /* SigninPage */]);
                                });
                            }
                            else {
                                this.error = 'you entered password and reenter password both are different';
                                this.showPopup();
                            }
                        }
                        else {
                            this.error = 'enter valid name fname &lname';
                            this.showPopup();
                        }
                    }
                    else {
                        this.error = 'enter a valid phone number';
                        this.showPopup();
                    }
                }
                else {
                    this.error = 'enter a valid gender';
                    this.showPopup();
                }
            }
            else {
                this.error = 'enter a valid email address';
                this.showPopup();
            }
        }
        else {
            this.error = 'enter all fild for registration';
            this.showPopup();
        }
    };
    SignupPage.prototype.openSignInPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__Signin_Signin__["a" /* SigninPage */]);
    };
    SignupPage.prototype.changePic = function (event) {
        this.profile_image = event.srcElement.files[0];
    };
    SignupPage.prototype.showPopup = function () {
        __WEBPACK_IMPORTED_MODULE_3_jquery__(".error_popup").show();
    };
    SignupPage.prototype.dismissPopup = function () {
        __WEBPACK_IMPORTED_MODULE_3_jquery__(".error_popup").hide("slow");
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/signup/signup.html"*/'<ion-content>\n    <div class="head_content">\n        <div class="icon">\n            <img src="assets/image/logo.png"/>\n        </div>\n    </div>\n    <div class="inputdiv">\n\n        <ion-list>\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <h3>Profile</h3>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-9>\n                        <ion-item class="item1">\n\n                            <ion-input type="text" placeholder="Fname" [(ngModel)]="fname"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col class="colrow" col-3>\n                        <ion-icon ios="ios-person" md="md-person"></ion-icon>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-9>\n                        <ion-item class="item1">\n\n                            <ion-input type="text" placeholder="Lname" [(ngModel)]="lname"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col class="colrow" col-3>\n                        <ion-icon ios="ios-person" md="md-person"></ion-icon>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-12>\n                        <ion-item class="item1">\n                            <ion-label floating class="top_item">Gender</ion-label>\n                            <ion-select [(ngModel)]="gender">\n                                <ion-option value="female" selected>Female</ion-option>\n                                <ion-option value="male">Male</ion-option>\n                            </ion-select>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-9>\n                        <ion-item class="item1">\n                            <input type="file" id="prof_pic" accept="image/*" (change)="changePic($event)"\n                                   accept="image/*"/>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col class="colrow" col-3>\n                        <ion-icon ios="ios-image" md="md-image"></ion-icon>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-9>\n                        <ion-item class="item1">\n                            <ion-input type="text" placeholder="Phone Number" [(ngModel)]="phone"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col class="colrow" col-3>\n                        <ion-icon name="call"></ion-icon>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-9>\n                        <ion-item class="item1">\n                            <ion-input type="text" placeholder="Email" [(ngModel)]="email"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col class="colrow" col-3>\n                        <ion-icon name="mail"></ion-icon>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-9>\n                        <ion-item class="item1">\n                            <ion-input type="password" placeholder="Password" [(ngModel)]="password"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col class="colrow" col-3>\n                        <ion-icon name="eye"></ion-icon>\n                    </ion-col>\n                </ion-row>\n                <ion-row class="lastrow">\n                    <ion-col col-9>\n                        <ion-item class="item1">\n                            <ion-input type="password" placeholder="Conform Password" [(ngModel)]="confirmpassword"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col class="colrow " col-3>\n                        <ion-icon name="lock"></ion-icon>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-list>\n\n\n    </div>\n\n    <div class="div_button">\n        <button ion-button outline round (click)="doSignUp()" id="btn-register">SIGN UP</button>\n        <br>\n        <p (click)="openSignInPage()"> Already have an account?\n            <span> Sign In.</span>\n        </p>\n    </div>\n\n    <div class="error_popup">\n        <p>{{error}}</p>\n        <span (click)="dismissPopup()">OK</span>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_7__providers_customHttpService__["a" /* httpService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_customHttpService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Signin_Signin__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loader_loader__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForgotPasswordPage = (function () {
    function ForgotPasswordPage(navCtrl, navParams, Menu, Http, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Menu = Menu;
        this.Http = Http;
        this.modalCtrl = modalCtrl;
        this.email;
    }
    ForgotPasswordPage.prototype.ionViewDidLoad = function () {
        this.Menu.enable(false);
    };
    ForgotPasswordPage.prototype.opnpagecode = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__loader_loader__["a" /* LoaderPage */]);
        if (this.email) {
            var regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            if (regExp.test(this.email)) {
                profileModal.present();
                this.Http.forgottpassword(this.email)
                    .then(function (result) {
                    _this.error = result.msg;
                    profileModal.dismiss();
                    _this.showPopup(1);
                }, function (error) {
                    _this.email = null;
                    profileModal.dismiss();
                    _this.error = 'you enter a wrong email tray again';
                    _this.showPopup(0);
                });
            }
            else {
                this.error = 'enter a valid email';
                this.showPopup(0);
            }
        }
        else {
            this.error = 'enter a valid email';
            this.showPopup(0);
        }
    };
    ForgotPasswordPage.prototype.openSignInPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__Signin_Signin__["a" /* SigninPage */]);
    };
    ForgotPasswordPage.prototype.showPopup = function (a) {
        this.flag = a;
        __WEBPACK_IMPORTED_MODULE_4_jquery__(".error_popup").show();
    };
    ForgotPasswordPage.prototype.dismissPopup = function () {
        if (this.flag == 1) {
            __WEBPACK_IMPORTED_MODULE_4_jquery__(".error_popup").hide("slow");
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__Signin_Signin__["a" /* SigninPage */]);
        }
        else {
            __WEBPACK_IMPORTED_MODULE_4_jquery__(".error_popup").hide("slow");
        }
    };
    return ForgotPasswordPage;
}());
ForgotPasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-forgot-password',template:/*ion-inline-start:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/forgot-password/forgot-password.html"*/'<ion-content>\n    <div class="head_content">\n        <div class="icon">\n            <img src="assets/image/logo.png" />\n        </div>\n    </div>\n    <div class="inputdiv">\n        <ion-list>\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <h3>Forgot password</h3>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-9>\n                        <ion-item class="item1">\n                            <ion-label floating class="top_item">Email</ion-label>\n                            <ion-input type="text" [(ngModel)]="email"> </ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col class="colrow" col-3>\n                        <ion-icon name="email"></ion-icon>\n                    </ion-col>\n                </ion-row>\n                <ion-row class="reset_password_btn">\n                    <ion-col>\n                        <div class="div_button">\n                            <button ion-button outline round (click)="opnpagecode()" id="btn-login">Reset Password</button>\n                        </div>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-list>\n        <div class="div_button">\n            <button ion-button outline round (click)="doSignUp()" id="btn-register" style="display: none">SIGN UP</button>\n            <br>\n            <p (click)="openSignInPage()"> Already have an account?\n                <span> Sign In.</span>\n            </p>\n        </div>\n    </div>\n\n    <div class="error_popup">\n        <p>{{error}}</p>\n        <span (click)="dismissPopup()">OK</span>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/forgot-password/forgot-password.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__providers_customHttpService__["a" /* httpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], ForgotPasswordPage);

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PointPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authenticationService__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_customHttpService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loader_loader__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PointPage = (function () {
    function PointPage(navCtrl, navParams, auth, http, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.http = http;
        this.modalCtrl = modalCtrl;
    }
    PointPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var Loading = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__loader_loader__["a" /* LoaderPage */]);
        Loading.present();
        this.http.getUserPoint()
            .then(function (response) {
            _this.poitsdata = response.appointment;
            _this.totalpoint = response.Totalpoint;
            Loading.dismiss();
        }, function (error) {
            Loading.dismiss();
            console.log(error);
        });
    };
    return PointPage;
}());
PointPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-point',template:/*ion-inline-start:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/point/point.html"*/'<ion-header align-title="center">\n    <ion-navbar>\n        <button item-start ion-button icon-only color="white" menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Point</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="container">\n        <div class="row imgrow">\n            <div class="col imgcol">\n                <img src="assets/image/ticket.png" alt="Ticket">\n                <div class="total_point">\n                    {{totalpoint}}\n                    <span><br>points</span>\n                </div>\n            </div>\n        </div>\n        <div class="media_objects">\n            <ion-grid class="bill_panel" *ngFor="let pd of poitsdata">\n                <ion-row class="order_detail_row">\n                    <ion-col class="order_no">\n                        Order No.{{pd.id}}\n                    </ion-col>\n                    <ion-col class="time">\n                        {{pd.appointment_date}} {{pd.timeslote}}\n                    </ion-col>\n                </ion-row>\n                <ion-row class="detail">\n                    <ion-col col-3 class="img">\n                        <img src="assets/image/service.png" alt="assets/image/service.png">\n                    </ion-col>\n                    <ion-col col-6 class="name_detail">\n                        <span><h3>{{pd.service_name}}</h3></span>\n                        <br>\n                        <span class="category">{{pd.category_name}}</span>\n                    </ion-col>\n                    <ion-col col-3 class="point">\n                        <span class="pointlabel">Points<span>\n                            <br>{{pd.service_point}}</span>\n                        </span>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/point/point.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_authenticationService__["a" /* authenticationService */], __WEBPACK_IMPORTED_MODULE_3__providers_customHttpService__["a" /* httpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], PointPage);

//# sourceMappingURL=point.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemechangePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dynamictheming_dynamictheming__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ThemechangePage = (function () {
    function ThemechangePage(navCtrl, navParams, settings) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.settings = settings;
        this.settings.getActiveTheme().subscribe(function (val) {
            _this.selectedTheme = val;
            _this.theamvalue = val;
        });
    }
    ThemechangePage.prototype.toggleAppTheme = function (theam) {
        this.settings.setActiveTheme(theam);
    };
    return ThemechangePage;
}());
ThemechangePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-themechange',template:/*ion-inline-start:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/themechange/themechange.html"*/'<ion-header align-title="center">\n    <ion-navbar>\n        <button item-start ion-button icon-only color="white" menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Theme Change</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item class="select">\n        <ion-label>Select Theme</ion-label>\n        <ion-select [(ngModel)]="theamvalue">\n            <ion-option value="dark-theme">Dark Theam</ion-option>\n            <ion-option value="light-theme">Light Theam</ion-option>\n            <ion-option value="green-theme">Green Theam</ion-option>\n        </ion-select>\n    </ion-item>\n\n    <button ion-button full icon-left (click)="toggleAppTheme(theamvalue)" class="btnchangetheme">\n        <ion-icon name="bulb"></ion-icon>\n        Change Theme\n    </button>\n</ion-content>'/*ion-inline-end:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/themechange/themechange.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_dynamictheming_dynamictheming__["a" /* DynamicthemingProvider */]])
], ThemechangePage);

//# sourceMappingURL=themechange.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GallaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_customHttpService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__image_viewer_image_viewer__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GallaryPage = (function () {
    function GallaryPage(navCtrl, Http, navParams, Menu, modalCtrl) {
        this.navCtrl = navCtrl;
        this.Http = Http;
        this.navParams = navParams;
        this.Menu = Menu;
        this.modalCtrl = modalCtrl;
    }
    GallaryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.Http.getGallary()
            .then(function (response) {
            _this.data = response;
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#loader_row').css("display", 'none');
        }, function (error) {
            console.log(error);
        });
    };
    GallaryPage.prototype.select_categary = function (data) {
        var image = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__image_viewer_image_viewer__["a" /* ImageViewerPage */], { data: data });
        image.present();
    };
    return GallaryPage;
}());
GallaryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-gallary',template:/*ion-inline-start:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/gallary/gallary.html"*/'<ion-header>\n    <ion-navbar>\n        <button item-start ion-button icon-only color="white" menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>gallary</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid justify-content-center align-items-center class="container" id="grid_container">\n        <ion-row class="loader_row" id="loader_row">\n            <ion-col class="loader_col" id="loader_col" style="text-align: center">\n                <ion-spinner class="spinner" name="crescent" id="loader"></ion-spinner>\n            </ion-col>\n        </ion-row>\n        <div class="tile_panel">\n            <div class="pin left_tile" *ngFor="let d of data" (click)="select_categary(d)">\n                <img src="{{d.gallary_image}}" class="img" imageViewer alt="assets/image/category.png"/>\n                <p>\n                    {{d.title}}\n                </p>\n            </div>\n        </div>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/gallary/gallary.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_customHttpService__["a" /* httpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], GallaryPage);

//# sourceMappingURL=gallary.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageViewerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ImageViewerPage = (function () {
    function ImageViewerPage(navCtrl, navParams, nativePageTransitions, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativePageTransitions = nativePageTransitions;
        this.view = view;
        this.data = this.navParams.get('data');
    }
    ImageViewerPage.prototype.ionViewDidLoad = function () {
        this.slides.lockSwipes(true);
        var options = {
            direction: 'up',
            duration: 500,
            slowdownfactor: 3,
            slidePixels: 20,
            iosdelay: 100,
            androiddelay: 150,
            fixedPixelsTop: 0,
            fixedPixelsBottom: 60
        };
        this.nativePageTransitions.fade(options)
            .then(function (result) {
            console.log(result);
        }, function (error) {
            console.log(error);
        });
    };
    ImageViewerPage.prototype.ionViewWillLeave = function () {
        var options = {
            direction: 'up',
            duration: 500,
            slowdownfactor: 3,
            slidePixels: 20,
            iosdelay: 100,
            androiddelay: 150,
            fixedPixelsTop: 0,
            fixedPixelsBottom: 60
        };
        this.nativePageTransitions.fade(options)
            .then(function (result) {
            console.log(result);
        }, function (error) {
            console.log(error);
        });
    };
    ImageViewerPage.prototype.leaveview = function () {
        this.view.dismiss();
    };
    return ImageViewerPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
], ImageViewerPage.prototype, "slides", void 0);
ImageViewerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-image-viewer',template:/*ion-inline-start:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/image-viewer/image-viewer.html"*/'<ion-content>\n    <p class="asd" (click)="leaveview()">\n        <ion-icon class="ico" name="close"></ion-icon>\n    </p>\n    <ion-slides>\n        <ion-slide>\n            <img src="{{data.gallary_image}}" class="img">\n            <h1>{{data.title}}</h1>\n        </ion-slide>\n    </ion-slides>\n</ion-content>'/*ion-inline-end:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/image-viewer/image-viewer.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__["a" /* NativePageTransitions */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
], ImageViewerPage);

//# sourceMappingURL=image-viewer.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeforeAfterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_customHttpService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__before_after_viever_before_after_viever__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BeforeAfterPage = (function () {
    function BeforeAfterPage(navCtrl, Http, navParams, Menu, modalCtrl) {
        this.navCtrl = navCtrl;
        this.Http = Http;
        this.navParams = navParams;
        this.Menu = Menu;
        this.modalCtrl = modalCtrl;
    }
    BeforeAfterPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.Http.beforeAfter()
            .then(function (response) {
            _this.data = response['before_after'];
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#loader_row').css("display", 'none');
        }, function (error) {
            console.log(error);
            if (error.status == 401) {
                console.log(error.status);
            }
        });
    };
    BeforeAfterPage.prototype.select_categary = function (data) {
        console.log(data.id);
        var image = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__before_after_viever_before_after_viever__["a" /* BeforeAfterVieverPage */], { data: data });
        image.present();
    };
    return BeforeAfterPage;
}());
BeforeAfterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-before-after',template:/*ion-inline-start:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/before-after/before-after.html"*/'<ion-header>\n\n    <ion-navbar>\n        <button item-start ion-button icon-only color="white" menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>beforeAfter</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-grid justify-content-center align-items-center class="container" id="grid_container">\n        <ion-row class="loader_row" id="loader_row">\n            <ion-col class="loader_col" id="loader_col" style="text-align: center">\n                <ion-spinner class="spinner" name="crescent" id="loader"></ion-spinner>\n            </ion-col>\n        </ion-row>\n\n        <div class="tile_panel">\n            <div class="pin left_tile" *ngFor="let d of data" (click)="select_categary(d)">\n                <img src="{{d.after_image}}" class="img" imageViewer alt="assets/image/category.png"/>\n                <p>\n                    {{d.service_name}}\n                </p>\n            </div>\n        </div>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/before-after/before-after.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_customHttpService__["a" /* httpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], BeforeAfterPage);

//# sourceMappingURL=before-after.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeforeAfterVieverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeforeAfterVieverPage = (function () {
    function BeforeAfterVieverPage(navCtrl, navParams, nativePageTransitions, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativePageTransitions = nativePageTransitions;
        this.view = view;
        this.data = this.navParams.get('data');
    }
    BeforeAfterVieverPage.prototype.ionViewDidLoad = function () {
        var options = {
            direction: 'up',
            duration: 500,
            slowdownfactor: 3,
            slidePixels: 20,
            iosdelay: 100,
            androiddelay: 150,
            fixedPixelsTop: 0,
            fixedPixelsBottom: 60
        };
        this.nativePageTransitions.fade(options)
            .then(function (result) {
            // console.log(result)
        }, function (error) {
            console.log(error);
        });
    };
    BeforeAfterVieverPage.prototype.ionViewWillLeave = function () {
        var options = {
            direction: 'up',
            duration: 500,
            slowdownfactor: 3,
            slidePixels: 20,
            iosdelay: 100,
            androiddelay: 150,
            fixedPixelsTop: 0,
            fixedPixelsBottom: 60
        };
        this.nativePageTransitions.fade(options)
            .then(function (result) {
            console.log(result);
        }, function (error) {
            console.log(error);
        });
    };
    BeforeAfterVieverPage.prototype.leaveview = function () {
        this.view.dismiss();
    };
    return BeforeAfterVieverPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
], BeforeAfterVieverPage.prototype, "slides", void 0);
BeforeAfterVieverPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-before-after-viever',template:/*ion-inline-start:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/before-after-viever/before-after-viever.html"*/'<ion-content>\n  <p class="asd" (click)="leaveview()">\n    <ion-icon class="ico" name="close"></ion-icon>\n  </p>\n  <ion-slides autoplay="500" speed="500">\n    <ion-slide>\n\n      <img src="{{data.before_image}}" class="img">\n      <h1>before the service</h1>\n    </ion-slide>\n    <ion-slide>\n\n      <img src="{{data.after_image}}" class="img">\n      <h1>after the service</h1>\n    </ion-slide>\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/before-after-viever/before-after-viever.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_native_page_transitions__["a" /* NativePageTransitions */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
], BeforeAfterVieverPage);

//# sourceMappingURL=before-after-viever.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(236);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_Signin_Signin__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_doctorlist_doctorlist__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_doctor_doctor__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_servicelist_servicelist__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_categary_categary__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_book_appoinment_book_appoinment__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_detail_detail__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_pastservices_pastservices__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_point_point__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_forgot_password_forgot_password__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_customHttpService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_authenticationService__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_facebook__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_native_storage__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_change_password_change_password__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_appoinment_detail_appoinment_detail__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_payment_payment__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_paypal__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_dynamictheming_dynamictheming__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_themechange_themechange__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_loader_loader__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_gallary_gallary__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_image_viewer_image_viewer__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_native_page_transitions__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_before_after_before_after__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_before_after_viever_before_after_viever__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















// import { IonicImageViewerModule } from 'ionic-img-viewer';












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_Signin_Signin__["a" /* SigninPage */], __WEBPACK_IMPORTED_MODULE_30__pages_image_viewer_image_viewer__["a" /* ImageViewerPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_doctorlist_doctorlist__["a" /* DoctorlistPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_doctor_doctor__["a" /* DoctorPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_servicelist_servicelist__["a" /* ServicelistPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_categary_categary__["a" /* CategaryPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_book_appoinment_book_appoinment__["a" /* BookAppoinmentPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_detail_detail__["a" /* DetailPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_pastservices_pastservices__["a" /* PastservicesPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_point_point__["a" /* PointPage */], __WEBPACK_IMPORTED_MODULE_29__pages_gallary_gallary__["a" /* GallaryPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_payment_payment__["a" /* PaymentPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */], __WEBPACK_IMPORTED_MODULE_33__pages_before_after_viever_before_after_viever__["a" /* BeforeAfterVieverPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_change_password_change_password__["a" /* ChangePasswordPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_appoinment_detail_appoinment_detail__["a" /* AppoinmentDetailPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_themechange_themechange__["a" /* ThemechangePage */], __WEBPACK_IMPORTED_MODULE_28__pages_loader_loader__["a" /* LoaderPage */], __WEBPACK_IMPORTED_MODULE_32__pages_before_after_before_after__["a" /* BeforeAfterPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            // IonicImageViewerModule,
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_Signin_Signin__["a" /* SigninPage */], __WEBPACK_IMPORTED_MODULE_29__pages_gallary_gallary__["a" /* GallaryPage */], __WEBPACK_IMPORTED_MODULE_33__pages_before_after_viever_before_after_viever__["a" /* BeforeAfterVieverPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_doctorlist_doctorlist__["a" /* DoctorlistPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_doctor_doctor__["a" /* DoctorPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_servicelist_servicelist__["a" /* ServicelistPage */], __WEBPACK_IMPORTED_MODULE_30__pages_image_viewer_image_viewer__["a" /* ImageViewerPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_categary_categary__["a" /* CategaryPage */], __WEBPACK_IMPORTED_MODULE_28__pages_loader_loader__["a" /* LoaderPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_book_appoinment_book_appoinment__["a" /* BookAppoinmentPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_detail_detail__["a" /* DetailPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_pastservices_pastservices__["a" /* PastservicesPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_point_point__["a" /* PointPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_payment_payment__["a" /* PaymentPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_change_password_change_password__["a" /* ChangePasswordPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_appoinment_detail_appoinment_detail__["a" /* AppoinmentDetailPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_themechange_themechange__["a" /* ThemechangePage */], __WEBPACK_IMPORTED_MODULE_32__pages_before_after_before_after__["a" /* BeforeAfterPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_18__providers_customHttpService__["a" /* httpService */],
            __WEBPACK_IMPORTED_MODULE_19__providers_authenticationService__["a" /* authenticationService */], __WEBPACK_IMPORTED_MODULE_31__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_21__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* Slides */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_paypal__["a" /* PayPal */],
            __WEBPACK_IMPORTED_MODULE_26__providers_dynamictheming_dynamictheming__["a" /* DynamicthemingProvider */]
        ]
    })
], AppModule);

//chalu thyu tu ke aa j error avititi? aaj error aave che 
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_Signin_Signin__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_doctorlist_doctorlist__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_categary_categary__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_pastservices_pastservices__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_point_point__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_customHttpService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_native_storage__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_themechange_themechange__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_dynamictheming_dynamictheming__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_gallary_gallary__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_before_after_before_after__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, 
        // public fb: Facebook,
        alertCtrl, http, nativeStorage, settings, ionicApp) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.nativeStorage = nativeStorage;
        this.settings = settings;
        this.ionicApp = ionicApp;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_Signin_Signin__["a" /* SigninPage */];
        this.initializeApp();
        this.pages = [
            { title: 'My Points', component: __WEBPACK_IMPORTED_MODULE_8__pages_point_point__["a" /* PointPage */] },
            { title: 'Gallary', component: __WEBPACK_IMPORTED_MODULE_13__pages_gallary_gallary__["a" /* GallaryPage */] },
            { title: 'Categary', component: __WEBPACK_IMPORTED_MODULE_6__pages_categary_categary__["a" /* CategaryPage */] },
            { title: 'Service', component: __WEBPACK_IMPORTED_MODULE_5__pages_doctorlist_doctorlist__["a" /* DoctorlistPage */] },
            { title: 'Booked Appoinments', component: __WEBPACK_IMPORTED_MODULE_7__pages_pastservices_pastservices__["a" /* PastservicesPage */] },
            { title: 'BeforeAfterPage', component: __WEBPACK_IMPORTED_MODULE_14__pages_before_after_before_after__["a" /* BeforeAfterPage */] },
        ];
        this.pp = {
            title: 'Booked Appoinments', component: __WEBPACK_IMPORTED_MODULE_11__pages_themechange_themechange__["a" /* ThemechangePage */]
        };
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.settings.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.nativeStorage.getItem('token')
                .then(function (data) {
                if (data != null) {
                    // console.log(data);
                    _this.http.setLocalToken(data);
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_categary_categary__["a" /* CategaryPage */]);
                }
            }, function (error) {
                console.error(error);
            });
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.Logout = function () {
        this.http.setFbToken(null);
        this.http.setToken(null);
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_Signin_Signin__["a" /* SigninPage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n    <div class="log_out_btn row" >\n      <div class="col">\n          <button ion-button menuClose outline  block large color="dark" (click)="openPage(pp)">\n              Change theam\n            </button>\n      </div>\n      <div class="col">\n          <button ion-button menuClose  large color="dark"  block (click)="Logout()">\n              Logout &nbsp;  <ion-icon name="exit"></ion-icon>\n            </button>\n      </div>\n        \n    </div>\n  </ion-content>\n \n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" [class]="selectedTheme" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_9__providers_customHttpService__["a" /* httpService */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_12__providers_dynamictheming_dynamictheming__["a" /* DynamicthemingProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DoctorPage = (function () {
    function DoctorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    return DoctorPage;
}());
DoctorPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-doctor',template:/*ion-inline-start:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/doctor/doctor.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title class="title">DOCTOR DETAIL</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="container">\n    <ion-slides class="slider">\n        <ion-slide class="slide">\n            <ion-grid class="slide_content" id="slide">\n                <ion-row class="img_row">\n                    <ion-col class="img_col">\n                        <img src="assets/image/logo.png"/>\n                    </ion-col>\n                </ion-row>\n                <ion-row class="dr_name_row">\n                    <ion-col class="dr_name_col">\n                        <p>\n                            Dr. parth godhani\n                        </p>\n                        <p>\n                            General physian\n                        </p>\n                    </ion-col>\n                </ion-row>\n                <ion-row class="rating_row">\n                    <ion-col class="rating_col">\n                        <ion-icon ios="ios-star" md="md-star" class="icon1"></ion-icon>\n                        <ion-icon ios="ios-star" md="md-star" class="icon2"></ion-icon>\n                        <ion-icon ios="ios-star" md="md-star" class="icon3"></ion-icon>\n                        <ion-icon ios="ios-star" md="md-star" class="icon4"></ion-icon>\n                        <ion-icon ios="ios-star" md="md-star" class="icon5"></ion-icon>\n                    </ion-col>\n                </ion-row>\n                <ion-row class="timing_fees">\n                    <ion-col col-6 class="timing">\n                        <p>\n                            Timing\n                            <br> 4:30 PM - 8:30 PM\n                        </p>\n                    </ion-col>\n                    <ion-col col-6 class="fees">\n                        <p>\n                            Fees\n                            <br> $ 500/Session\n                        </p>\n                    </ion-col>\n                </ion-row>\n                <ion-row class="doctor_label">\n                    <ion-col class="doctor_label_col">\n                        <label>About Doctor</label>\n                    </ion-col>\n                </ion-row>\n                <ion-row class="doctor_detail">\n\n                    <p>\n                        Psychiatry is the medical specialty devoted to the diagnosis, prevention, study, and treatment\n                        of mental disorders.\n                    </p>\n\n                </ion-row>\n                <ion-row class="address">\n                    <ion-col col-10 class="address_text">\n\n                        319 escon plaza amroli surat\n\n                    </ion-col>\n                    <ion-col col-2 class="navigation_icon">\n                        <ion-icon name="navigate"></ion-icon>\n                    </ion-col>\n                </ion-row>\n                <ion-row class="btn_row">\n                    <ion-col class="btn_col">\n                        <button ion-button block class="btn">\n                            BOOK AN APPOINMET\n                        </button>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-slide>\n\n\n        <ion-slide>\n            <h1>Slide 2</h1>\n        </ion-slide>\n        <ion-slide>\n            <h1>Slide 3</h1>\n        </ion-slide>\n    </ion-slides>\n\n</ion-content>'/*ion-inline-end:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/doctor/doctor.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], DoctorPage);

//# sourceMappingURL=doctor.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicelistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServicelistPage = (function () {
    function ServicelistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
    return ServicelistPage;
}());
ServicelistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-servicelist',template:/*ion-inline-start:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/servicelist/servicelist.html"*/'<ion-header>\n    <ion-navbar>\n        <button item-start ion-button icon-only color="dark" menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Services</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content center>\n    <ion-grid class="container">\n        <ion-row class="media-object" *ngFor="let service of servicelist">\n            <ion-row col-12 class="doctor-detail">\n                <ion-col col-2 class="img">\n                    <img src="assets/image/logo.png"/>\n                </ion-col>\n                <ion-col col-10 class="detail">\n                    <ion-row>\n                        <ion-col col-6>\n                            <div class="row doctor_name">{{service.name}}</div>\n                            <div class="row qualification">{{service.qulification}}</div>\n                            <div class="row point">Book Appoinment</div>\n                        </ion-col>\n                        <ion-col col-6 class="stuff">\n                            <div class="row doctor_name">{{service.points}} point</div>\n                            <div class="row qualification">$100</div>\n                            <div class="row point">\n                                <ion-checkbox color="priamary"></ion-checkbox>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-col>\n            </ion-row>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/servicelist/servicelist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], ServicelistPage);

//# sourceMappingURL=servicelist.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_customHttpService__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailPage = (function () {
    function DetailPage(navCtrl, navParams, Http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Http = Http;
        this.date = new Date(2011, 11, 30);
    }
    DetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.Http.getUserData().then(function (response) {
            _this.userData = response;
            _this.name = _this.userData.first_name + " " + _this.userData.last_name;
            _this.email = _this.userData.email;
            _this.phone = _this.userData.phone;
            _this.gender = _this.userData.gender;
        }, function (error) {
            if (error.status == 401) {
                console.log(error.status);
            }
        });
    };
    return DetailPage;
}());
DetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detail',template:/*ion-inline-start:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/detail/detail.html"*/'<ion-header>\n\n    <ion-navbar>\n        <button item-start ion-button icon-only color="white" menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>detail</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-grid class="container">\n        <ion-row class="user_image_row">\n            <ion-col class="user_image_content">\n                <div class="row">\n                    <div class="col"></div>\n                    <div class="col user_profile_img">\n                        <img src="./assets/icon/man-user.png">\n                    </div>\n                    <div class="col"></div>\n                </div>\n            </ion-col>\n        </ion-row>\n        <ion-row class="form_fild">\n            <ion-item class="single_fild">\n                <ion-label floating class="input_label">Name</ion-label>\n                <ion-input type="text" class="text_input">{{userData}}</ion-input>\n            </ion-item>\n        </ion-row>\n\n        <ion-row class="form_fild">\n            <ion-item class="single_fild">\n                <ion-label floating class="input_label">Email</ion-label>\n                <ion-input type="text" class="text_input"></ion-input>\n            </ion-item>\n        </ion-row>\n\n        <ion-row class="form_fild">\n            <ion-item class="single_fild">\n                <ion-label floating class="input_label">Phone</ion-label>\n                <ion-input type="text" class="text_input"></ion-input>\n            </ion-item>\n        </ion-row>\n\n\n        <ion-row class="form_fild">\n            <ion-item class="single_fild">\n                <ion-label floating class="input_label date-time-label">Selected Date</ion-label>\n                <ion-input type="date" class="text_input date-time"></ion-input>\n            </ion-item>\n        </ion-row>\n\n        <ion-row class="form_fild">\n            <ion-item class="single_fild">\n                <ion-label floating class="input_label date-time-label">Selected Time</ion-label>\n                <ion-input type="time" class="text_input date-time"></ion-input>\n            </ion-item>\n        </ion-row>\n\n        <ion-row class="form_fild">\n            <ion-item class="single_fild">\n                <ion-label floating class="input_label">Bio</ion-label>\n                <ion-input type="text" class="text_input"></ion-input>\n            </ion-item>\n        </ion-row>\n\n        <ion-row class="submit_btn_row">\n            <ion-col class="submit_btn_col">\n                <button ion-button round default class="submit_btn">Submit</button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/detail/detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_customHttpService__["a" /* httpService */]])
], DetailPage);

//# sourceMappingURL=detail.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_customHttpService__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChangePasswordPage = (function () {
    function ChangePasswordPage(navCtrl, navParams, Http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Http = Http;
    }
    ChangePasswordPage.prototype.chang_password = function () {
        if (this.oldpassword && this.newPassword && this.confirmPassword) {
            if (this.newPassword == this.confirmPassword) {
                this.Http.changePassword(this.oldpassword, this.newPassword).then(function (response) {
                    console.log(response);
                }, function (error) {
                    if (error.status == 401) {
                        console.log(error.status);
                    }
                });
            }
            else {
                alert("please enter a same passwor in new password  and reenter password");
            }
        }
        else {
        }
    };
    return ChangePasswordPage;
}());
ChangePasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-change-password',template:/*ion-inline-start:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/change-password/change-password.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>changePassword</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="container">\n    <ion-grid class="psw_change_grid">\n        <ion-row class="text_input_row">\n            <ion-col class="text_input_col">\n                <ion-input type="password" placeholder="current password" [(ngModel)]="oldpassword"\n                           class="input_field"></ion-input>\n            </ion-col>\n        </ion-row>\n        <ion-row class="label_row">\n            <ion-col class="label_col">\n                <ion-label color="primary" fixed class="change_pws_label">minimum 8 charector</ion-label>\n            </ion-col>\n        </ion-row>\n        <ion-row class="text_input_row">\n            <ion-col class="text_input_col">\n                <ion-input type="password" [(ngModel)]="newPassword" placeholder="enter new password"\n                           class="input_field"></ion-input>\n            </ion-col>\n        </ion-row>\n        <ion-row class="text_input_row">\n            <ion-col class="text_input_col">\n                <ion-input type="password" [(ngModel)]="confirmPassword" placeholder="retype password"\n                           class="input_field"></ion-input>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <button ion-button positive full (click)="chang_password()">change password</button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/change-password/change-password.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_customHttpService__["a" /* httpService */]])
], ChangePasswordPage);

//# sourceMappingURL=change-password.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderPage = (function () {
    function LoaderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    return LoaderPage;
}());
LoaderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-loader',template:/*ion-inline-start:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/loader/loader.html"*/'<ion-content>\n    <ion-slides>\n        <ion-slide>\n            <ion-spinner></ion-spinner>\n        </ion-slide>\n    </ion-slides>\n</ion-content>'/*ion-inline-end:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/loader/loader.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
], LoaderPage);

//# sourceMappingURL=loader.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_authenticationService__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_customHttpService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__categary_categary__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forgot_password_forgot_password__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__loader_loader__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SigninPage = (function () {
    function SigninPage(navCtrl, navParams, auth, http, Menu, modalCtrl, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.http = http;
        this.Menu = Menu;
        this.modalCtrl = modalCtrl;
        this.fb = fb;
        // this.email='hello1@gmail.com';
        // this.password='hello123';
        this.pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";
    }
    SigninPage.prototype.ionViewDidLoad = function () {
        this.Menu.enable(false);
    };
    SigninPage.prototype.doLogin = function () {
        var _this = this;
        var Loading = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__loader_loader__["a" /* LoaderPage */]);
        if (this.email != null && this.password != null) {
            var regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            if (regExp.test(this.email)) {
                Loading.present();
                this.auth.login(this.email, this.password)
                    .then(function (response) {
                    _this.http.setToken(response.u_token);
                    _this.Menu.enable(true);
                    Loading.dismiss();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__categary_categary__["a" /* CategaryPage */]);
                }, function (error) {
                    if (error.status == 401) {
                        Loading.dismiss();
                        _this.error = "you have enter a wrong credential for login \n try again";
                        _this.showPopup();
                        _this.email = null;
                        _this.password = null;
                    }
                    else {
                        Loading.dismiss();
                        _this.error = "chek your network connection \n try again";
                        _this.showPopup();
                        _this.email = null;
                        _this.password = null;
                    }
                });
            }
            else {
                this.error = 'enter a valid email address';
                this.showPopup();
                this.email = null;
                this.password = null;
            }
        }
        else {
            this.error = 'enter a email or password';
            this.showPopup();
            this.email = null;
            this.password = null;
        }
    };
    SigninPage.prototype.loginWithFacebook = function () {
        var _this = this;
        this.fb.login(['public_profile', 'email', 'user_about_me'])
            .then(function (res) {
            _this.http.setFbToken(res.authResponse.userID); //set fb token
            _this.fb.api('/me?fields=id,picture,birthday,email,first_name,gender,last_name,name', ['public_profile', 'email', 'user_about_me'])
                .then(function (userData) {
                var imgurl = "https://graph.facebook.com/" + res.authResponse.userID + "/picture?width=500&height=500";
                _this.http.facebookUserData(userData, imgurl)
                    .then(function (result) {
                    _this.Menu.enable(true);
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__categary_categary__["a" /* CategaryPage */]);
                }, function (error) {
                    _this.error = "plz re-login some error ouccor";
                    _this.showPopup();
                });
            }, function (error) {
                console.log(error);
            });
        }, function (error) {
            if (error.status == 401) {
                console.log(error);
            }
        });
    };
    SigninPage.prototype.openSignUpPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__signup_signup__["a" /* SignupPage */]);
    };
    SigninPage.prototype.openForgotPasswordPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__forgot_password_forgot_password__["a" /* ForgotPasswordPage */]);
    };
    SigninPage.prototype.showPopup = function () {
        __WEBPACK_IMPORTED_MODULE_8_jquery__(".error_popup").show();
    };
    SigninPage.prototype.dismissPopup = function () {
        __WEBPACK_IMPORTED_MODULE_8_jquery__(".error_popup").hide("slow");
    };
    return SigninPage;
}());
SigninPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signin',template:/*ion-inline-start:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/Signin/signin.html"*/'<ion-content>\n    <div class="head_content">\n        <div class="icon">\n            <img src="assets/image/logo.png"/>\n        </div>\n    </div>\n    <div class="inputdiv">\n        <ion-list>\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <h3>Sign in</h3>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-9>\n                        <ion-item class="item1">\n                            <ion-label floating class="top_item">Email</ion-label>\n                            <ion-input type="text" [(ngModel)]="email" id="contactemail" #contactemail="ngModel"\n                                       required></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col class="colrow" col-3>\n                        <ion-icon name="person"></ion-icon>\n                    </ion-col>\n                    <div class="md-errors-spacer" [hidden]="contactemail.valid || contactemail.untouched">\n                        <div *ngIf="contactemail.errors && contactemail.errors.required">\n                            Email is required\n                        </div>\n                        <div *ngIf="contactemail.errors && contactemail.errors.pattern">\n                            Email is invalid\n                        </div>\n                    </div>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-9>\n                        <ion-item class="item1">\n                            <ion-label floating class="top_item">Password</ion-label>\n                            <ion-input type="password" [(ngModel)]=\'password\'></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col class="colrow" col-3>\n                        <ion-icon name="lock"></ion-icon>\n                    </ion-col>\n                </ion-row>\n                <ion-row class="forgotpasswordlabel">\n                    <ion-col col-6>\n\n                    </ion-col>\n                    <ion-col class="colrowlabel" col-6>\n                        <ion-label (click)="openForgotPasswordPage()">Forgot Password?</ion-label>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-list>\n\n    </div>\n\n    <div class="div_button">\n        <button ion-button outline round (click)="doLogin()" id="btn-login">SIGN IN</button>\n        <!--<button ion-button outline round (click)="loginWithFacebook()" id="btn-login" class="btn_fb"><u>Login With Facebook</u></button>-->\n        <br>\n        <p (click)="openSignUpPage()"> New To Aneksmun Salon?\n            <span> Sign Up.</span>\n        </p>\n    </div>\n\n    <div class="error_popup">\n        <p>{{error}}</p>\n        <span (click)="dismissPopup()">OK</span>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/physcocode/Downloads/wetransfer-3f98cd/Spa & Salon Software With Mobile Apps Using Ionic and Laravel/App Source/src/pages/Signin/signin.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_authenticationService__["a" /* authenticationService */], __WEBPACK_IMPORTED_MODULE_3__providers_customHttpService__["a" /* httpService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */]])
], SigninPage);

//# sourceMappingURL=Signin.js.map

/***/ })

},[218]);
//# sourceMappingURL=main.js.map