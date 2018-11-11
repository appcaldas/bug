import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


import { ApartamentosProvider } from '../../providers/apartamentos/apartamentos';

@IonicPage()
@Component({
  selector: 'page-home-cards',
  templateUrl: 'home-cards.html',
  providers: [ApartamentosProvider]
})

export class HomeCardsPage {

  public apart: any;
  public apartamento: any[];
  public page: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toast : ToastController,
    public apartamentos: ApartamentosProvider) {

      this.apart = apartamentos.getAll();
      this.getAllApartamentos();
      this.apartamento = [];
    }


  // getId(id: number) {
  //   this.apartamentos.get(id)
  //     .then((result: any) => {
  //       this.navCtrl.push(DescricaoApPage,  {apart: result.codigoanuncio});
  //       console.log('HomeCards.ts' + result);
  //     })
  //     .catch((error: any) => {
  //       // implementar envio correto do erro
  //       console.log(error);
  //     })
  // }

  
  getAllApartamentos() {
    this.apartamentos.getAll()
      .then((result: any) => {
        
        for(var i = 0; i < result.length; i++) {
          var apart = result[i];
          this.apartamento.push(apart);
        }
      })
      .catch((error: any) => {
         // implementar envio correto do erro
        console.log(error);
      });
  }

  openUser(codigoanuncio: any) {
    this.apartamentos.get(codigoanuncio)
      .then((result: any) => {
        this.navCtrl.push('DetalheApPage', { apart: result });
        
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao recuperar o usuário. ', position: 'botton', duration: 3000 }).present();
      });
 
  }
}
