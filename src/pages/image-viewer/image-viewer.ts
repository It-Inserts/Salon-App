import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Slides, ViewController} from 'ionic-angular';
import {NativePageTransitions, NativeTransitionOptions} from '@ionic-native/native-page-transitions';

@Component({
    selector: 'page-image-viewer',
    templateUrl: 'image-viewer.html',
})
export class ImageViewerPage {
    data: any;
    @ViewChild(Slides) slides: Slides;

    constructor(public navCtrl: NavController, public navParams: NavParams, private nativePageTransitions: NativePageTransitions, public view: ViewController) {
        this.data = this.navParams.get('data');
    }

    ionViewDidLoad() {
        this.slides.lockSwipes(true);
        let options: NativeTransitionOptions = {
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
            .then((result) => {
                console.log(result)
            }, (error) => {
                console.log(error)
            })

    }

    ionViewWillLeave() {
        let options: NativeTransitionOptions = {
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
            .then((result) => {
                console.log(result)
            }, (error) => {
                console.log(error)
            })
    }

    leaveview() {
        this.view.dismiss();
    }
}
