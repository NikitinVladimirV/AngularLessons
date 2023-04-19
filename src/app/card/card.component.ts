import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Product } from '../types/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnChanges {
  @Input() product!: Product;
  isFavorite = false;
  image: string;
  ngOnChanges() {
    if (this.product) {
      this.isFavorite = false;
      this.image = this.product.image!;
    }
  }
  constructor() {}

  ngOnInit(): void {}

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }

  changeImage(image: string): void {
    this.image = image;
  }
}
