import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalheApPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-ap',
  templateUrl: 'detalhe-ap.html',
})
export class DetalheApPage {
  aparts: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.aparts = this.navParams.get('apart');
    
  }

  ionViewDidLoad() {
    console.log(this.aparts);
    
  }

}
