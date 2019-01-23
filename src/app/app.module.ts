import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule, Slides} from 'ionic-angular';
import {HttpModule} from '@angular/http';

import {MyApp} from './app.component';
import {SigninPage} from '../pages/Signin/Signin';
import {DoctorlistPage} from '../pages/doctorlist/doctorlist';
import {DoctorPage} from '../pages/doctor/doctor';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {SignupPage} from "../pages/signup/signup";
import {ServicelistPage} from "../pages/servicelist/servicelist";
import {CategaryPage} from "../pages/categary/categary";
import {BookAppoinmentPage} from "../pages/book-appoinment/book-appoinment";
import {DetailPage} from "../pages/detail/detail";
import {PastservicesPage} from "../pages/pastservices/pastservices";
import {PointPage} from "../pages/point/point";
import {ForgotPasswordPage} from "../pages/forgot-password/forgot-password";
import {httpService} from '../providers/customHttpService';
import {authenticationService} from '../providers/authenticationService';
import {Facebook} from "@ionic-native/facebook";
import {NativeStorage} from '@ionic-native/native-storage';
// import { IonicImageViewerModule } from 'ionic-img-viewer';
import {ChangePasswordPage} from "../pages/change-password/change-password";
import {AppoinmentDetailPage} from '../pages/appoinment-detail/appoinment-detail';
import {PaymentPage} from "../pages/payment/payment";
import {PayPal} from "@ionic-native/paypal";
import { DynamicthemingProvider } from '../providers/dynamictheming/dynamictheming';
import {ThemechangePage} from "../pages/themechange/themechange";
import { LoaderPage } from '../pages/loader/loader';
import { GallaryPage } from '../pages/gallary/gallary';
import { ImageViewerPage } from '../pages/image-viewer/image-viewer';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { BeforeAfterPage } from '../pages/before-after/before-after';
import { BeforeAfterVieverPage } from '../pages/before-after-viever/before-after-viever';

@NgModule({
    declarations: [
        MyApp,
        SigninPage,ImageViewerPage,
        DoctorlistPage,
        DoctorPage,
        SignupPage,
        ServicelistPage,
        CategaryPage,
        BookAppoinmentPage,
        DetailPage,
        PastservicesPage,
        PointPage,GallaryPage,
        PaymentPage,
        ForgotPasswordPage,BeforeAfterVieverPage,
        ChangePasswordPage,
        AppoinmentDetailPage,
        ThemechangePage,LoaderPage,BeforeAfterPage
    ],
    imports: [
        BrowserModule,
        // IonicImageViewerModule,
        IonicModule.forRoot(MyApp),
        HttpModule,

    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        SigninPage,GallaryPage,BeforeAfterVieverPage,
        DoctorlistPage,
        DoctorPage,
        SignupPage,
        ServicelistPage,ImageViewerPage,
        CategaryPage,LoaderPage,
        BookAppoinmentPage,
        DetailPage,
        PastservicesPage,
        PointPage,
        PaymentPage,
        ForgotPasswordPage,
        ChangePasswordPage,
        AppoinmentDetailPage,
        ThemechangePage,BeforeAfterPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        httpService,
        authenticationService,NativePageTransitions,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        Facebook, NativeStorage,Slides,
        PayPal,
        DynamicthemingProvider
    ]
})
export class AppModule {
}
//chalu thyu tu ke aa j error avititi? aaj error aave che