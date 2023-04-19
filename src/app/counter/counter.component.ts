import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div class="counter">
      <app-button
        class="counter__btn"
        text="-"
        color="primary"
        (click)="decrease(value)"
      ></app-button>
      <input type="text" value="{{ value }}" />
      <app-button
        class="counter__btn"
        text="+"
        color="primary"
        (click)="increase(value)"
      ></app-button>
    </div>
  `,
  styles: [
    `
      .counter {
        input {
          height: 30px;
          text-align: center;
          max-width: 30px;
          border: none;
        }
      }
    `,
  ],
})
export class CounterComponent implements OnInit {
  @Input() value: number = 0;

  @Output() valueIncrease = new EventEmitter<any>();
  @Output() valueDecrease = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  decrease(value: any) {
    this.valueDecrease.emit(value);
  }
  increase(value: any) {
    this.valueIncrease.emit(value);
  }
}
