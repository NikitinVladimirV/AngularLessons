import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ProductPrice } from 'src/app/types/card';

@Component({
  selector: 'app-price',
  template: `
    <div
      class="price__discount"
      [ngClass]="{ 'price__discount--hidden': !price.discount }"
    >
      <div class="price__prev">{{ price.value }}Р</div>
      <div class="price__discount-bage">-{{ discount }}%</div>
    </div>
    <div class="price">{{ newPrice }}Р</div>
  `,
  styleUrls: ['./price.component.scss'],
})
export class PriceComponent implements OnInit, OnChanges {
  // @Input() price!: ProductPrice;
  @Input() price!: any;
  newPrice: number;
  ngOnChanges() {
    if (this.price) {
      this.newPrice = this.price.discount
        ? this.price.value * (1 - this.price.discount)
        : this.price.value;
    }
  }
  constructor() {}

  ngOnInit(): void {}

  get discount(): number {
    return this.price.discount * 100;
  }
}
