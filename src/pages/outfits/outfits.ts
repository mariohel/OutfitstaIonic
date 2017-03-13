import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CheckoutPage } from '../checkout/checkout';
import { OutfitService } from '../../providers/outfit';
import { Outfit } from '../../models/outfit';

/*
  Generated class for the Outfits page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-outfits',
  templateUrl: 'outfits.html'
})
export class OutfitsPage {
  
  selectedItem: any;
  icons: string[];
  items: Array<Outfit>;
  cartItems: Array<Outfit>=[];

  constructor(public navCtrl: NavController, public navParams: NavParams , public service: OutfitService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    let items = navParams.get('cartItems');
    this.cartItems = items ? items : this.cartItems ;
  }

  itemTapped(event, item) {    
    this.navCtrl.push(OutfitsPage, {
      item: item,
      cartItems : this.cartItems
    });
  }

  itemCart(event, item) {
    this.cartItems.push(item);
    event.stopPropagation();
    event.preventDefault();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OutfitsPage');
    if(!this.selectedItem) {
      this.getList();
    }
  }

  getList() {
    this.service.getList().subscribe(
    data => {
      this.items = data as Outfit[];
    },
    err => {
      console.log(err);
    });
  }

  cartClicked() {
      this.navCtrl.push(CheckoutPage, {
      items: this.cartItems
    });
  }
}
