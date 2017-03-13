import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Outfit } from '../models/outfit';
/*
  Generated class for the Outfit provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class OutfitService {

  constructor(public http: Http) {
    console.log('Hello Outfit Provider');
  }

 getList(): Observable<Outfit[]> {
    return this.http.get('assets/data.json')
      .map(response => response.json());

  }
}
