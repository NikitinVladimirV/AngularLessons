import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-icon',
  template: `
    <button class="button" [ngClass]="{ button_active: active }">
      Q
      <!-- <svg clas="icon"></svg> -->
    </button>
  `,
  styleUrls: ['./button-icon.component.scss'],
})
export class ButtonIconComponent implements OnInit {
  @Input() active = false;
  constructor() {}

  ngOnInit(): void {}
}
