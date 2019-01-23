import {Component, ViewChild} from '@angular/core';
import {AlertController, App, Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {SigninPage} from '../pages/Signin/Signin';
import {DoctorlistPage} from '../pages/doctorlist/doctorlist';
import {CategaryPage} from "../pages/categary/categary";
import {PastservicesPage} from "../pages/pastservices/pastservices";
import {PointPage} from "../pages/point/point";
import {httpService} from "../providers/customHttpService";
import {NativeStorage} from '@ionic-native/native-storage';
import {ThemechangePage} from "../pages/themechange/themechange";
import {DynamicthemingProvider} from "../providers/dynamictheming/dynamictheming";
import {GallaryPage} from '../pages/gallary/gallary';
import {BeforeAfterPage} from '../pages/before-after/before-after';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = SigninPage;
    selectedTheme: any;
    pages: Array<{ title: string, component: any }>;
    pp;

    constructor(public platform: Platform,
                public statusBar: StatusBar,
                public splashScreen: SplashScreen,
                // public fb: Facebook,
                public alertCtrl: AlertController,
                public http: httpService,
                private nativeStorage: NativeStorage,
                private settings: DynamicthemingProvider,
                private ionicApp: App,) {
        this.initializeApp();
        this.pages = [
            {title: 'My Points', component: PointPage},
            {title: 'Gallary', component: GallaryPage},
            {title: 'Categary', component: CategaryPage},
            {title: 'Service', component: DoctorlistPage},
            {title: 'Booked Appoinments', component: PastservicesPage},
            {title: 'BeforeAfterPage', component: BeforeAfterPage},
        ];
        this.pp = {
            title: 'Booked Appoinments', component: ThemechangePage
        }
    }

    initializeApp() {
        this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);

        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();

            this.nativeStorage.getItem('token')
                .then((data) => {
                        if (data != null) {
                            // console.log(data);
                            this.http.setLocalToken(data);
                            this.nav.setRoot(CategaryPage);
                        }
                    },
                    (error) => {
                        console.error(error)
                    });
        });
    }
    openPage(page) {
        this.nav.setRoot(page.component);
    }

    Logout() {
        this.http.setFbToken(null);
        this.http.setToken(null);
        this.nav.setRoot(SigninPage);

    }
}