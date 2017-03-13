import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { OutfitsPage } from '../pages/outfits/outfits';
import { CheckoutPage } from '../pages/checkout/checkout';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = OutfitsPage;

  pages: Array<{title: string, component: any}>;
  filters: Array<{title: string, value: string}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Outfits', component: OutfitsPage },
      { title: 'CheckOut', component: CheckoutPage }
    ];
    this.filters = [
      { title: 'Dresses', value: 'dress' },
      { title: 'Pants', value: 'pant' },
      { title: 'Shirts', value: 'shirt' },
      { title: 'Shorts', value: 'short' },
     { title: 'Shoes', value: 'shoe' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
}
