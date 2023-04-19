import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  template: `
    <div class="cart">
      <app-button class="cart__btn" color="primary" text="Корзина"></app-button>
      <div class="cart__bage" *ngIf="count">{{ count }}</div>
    </div>
  `,
  styles: [
    `
      .cart {
        position: relative;
        max-width: max-content;

        &__bage {
          position: absolute;
          top: -30%;
          right: 10%;
          padding: 2px 10px;
          border-radius: 10px;
          background-color: red;
          color: white;
        }
      }
    `,
  ],
})
export class CartComponent implements OnInit {
  @Input() count: number;

  constructor() {}

  ngOnInit(): void {}
}
