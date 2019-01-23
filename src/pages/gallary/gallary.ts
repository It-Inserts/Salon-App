import {Component} from '@angular/core';
import {NavController, NavParams, MenuController, ModalController} from 'ionic-angular';
import {httpService} from '../../providers/customHttpService';
import * as $ from 'jquery';
import {ImageViewerPage} from '../image-viewer/image-viewer';

@Component({
    selector: 'page-gallary',
    templateUrl: 'gallary.html',
})
export class GallaryPage {
    data: any;

    constructor(public navCtrl: NavController, public Http: httpService, public navParams: NavParams, public Menu: MenuController, public modalCtrl: ModalController) {
    }

    ionViewDidLoad() {

        this.Http.getGallary()
            .then((response) => {
                this.data = response;
                $('#loader_row').css("display", 'none');
            }, (error) => {
                console.log(error);
            });
    }

    select_categary(data) {
        let image = this.modalCtrl.create(ImageViewerPage, {data: data});
        image.present();
    }

}
