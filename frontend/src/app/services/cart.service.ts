import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cart= signal<Product[]>([]);

  add(product: Product) {
    this.cart.update(p => [...p, product]);
  }
}
