import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { OutfitsPage } from '../pages/outfits/outfits';
import { CheckoutPage } from '../pages/checkout/checkout';
import { OutfitService } from '../providers/outfit';

@NgModule({
  declarations: [
    MyApp,
    OutfitsPage,
    CheckoutPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OutfitsPage,
    CheckoutPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},OutfitService]
})
export class AppModule {}
