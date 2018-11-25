import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-localizacao',
  templateUrl: 'localizacao.html',
})
export class LocalizacaoPage {

  public maps: any;
  public localMaps = 'Águas Claras, Brasília - DF';
  public aparts: any[];


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
    ) {
      this.aparts = this.navParams.data;
    }

    ionViewDidLoad() {
    this.maps = this.getMaps();
    console.log(this.aparts);

  }

  public getMaps() {
    return 'https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=400x400&markers=color:red|' + this.localMaps + '&key=AIzaSyA0PiH0-0lUT-eniII35-r-ZP1Hjb_Zv6M'
  }

  popPage() {
    this.navCtrl.pop();
  }
}
