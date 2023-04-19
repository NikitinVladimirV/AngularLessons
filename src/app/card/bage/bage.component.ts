import { Component, OnInit, Input } from '@angular/core';
import { ProductBage } from 'src/app/types/card';

@Component({
  selector: 'app-bage',
  template: `
    <div class="bage" [style.background-color]="bage.color">
      {{ bage.text }}
    </div>
  `,
  styleUrls: ['./bage.component.scss'],
})
export class BageComponent implements OnInit {
  @Input() bage: ProductBage;
  constructor() {}

  ngOnInit(): void {}
}
