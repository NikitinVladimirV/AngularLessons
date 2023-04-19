import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  template: `
    <div class="top-bar">
      <app-cart [count]="0"></app-cart>
    </div>
  `,
  styles: [],
})
export class TopBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
