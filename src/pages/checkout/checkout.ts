import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { OutfitsPage } from '../outfits/outfits';
import { states } from '../../models/cart';
import { Outfit } from '../../models/outfit';

/*
  Generated class for the Checkout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html'
})
export class CheckoutPage {
  states = states;
  outfits: Outfit[] = [];
  checkOutForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
    this.outfits = navParams.get('items');
    console.log(this.outfits);
    this.createForm();
  }

  createForm() {    
    this.checkOutForm = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required ],
      payment: ['cash', Validators.required ],
      outfits: [this.outfits],
      address: this.fb.group({
        street: '',
        city: '',
        state: '',
        zip: ''
      })
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }

  onSubmit() {
    console.log(this.checkOutForm.value);    
    alert('Your Order is Submitted Successfully!');
     this.navCtrl.push(OutfitsPage, {
      cartItems: []
    });
  }

}
