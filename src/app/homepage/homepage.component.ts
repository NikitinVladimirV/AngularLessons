import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  template: `
    <div class="homepage">
      <!-- <app-counter
        [value]="count"
        (valueDecrease)="decrease()"
        (valueIncrease)="increase()"
      >
      </app-counter> -->
      <!-- <app-counter></app-counter> -->
      1111

      <app-button></app-button>
    </div>
  `,
  styles: [],
})
export class HomepageComponent implements OnInit {
  public count = 0;

  decrease() {
    this.count > 0 ? this.count-- : 0;
  }

  increase() {
    this.count++;
  }
  constructor() {}

  ngOnInit(): void {}
}
