import { Component } from '@angular/core';
import { product, products } from './data/product.data';
import { Product } from './types/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'eshop';
  i = 0;
  product: Product = products[this.i];

  constructor() {}

  next() {
    this.i = this.i < products.length - 1 ? this.i + 1 : 0;
    this.product = products[this.i];
  }
}
