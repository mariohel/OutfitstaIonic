import { Outfit } from '../models/outfit';
export class Cart {
  id = 0;
  name = '';
  email = '';
  payment = 'cash';
  address: Address;
  outfits: Outfit[];
}

export class Address {
  street = '';
  city   = '';
  state  = '';
  zip    = '';
}

export const states = ['CA', 'MD', 'OH', 'VA'];
