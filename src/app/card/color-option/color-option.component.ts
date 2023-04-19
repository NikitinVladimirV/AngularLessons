import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-option',
  template: `
    <div
      class="card__color-option"
      [ngStyle]="{ 'background-color': color, 'border-color': borderColor }"
    ></div>
  `,
  styles: [
    `
      .card__color-option {
        width: 6px;
        height: 6px;
        border-radius: 6px;
        border: 1px solid;
        cursor: pointer;
      }
    `,
  ],
})
export class ColorOptionComponent implements OnInit {
  @Input() color: any = 'black';
  constructor() {}

  ngOnInit(): void {}

  get borderColor(): string {
    return this.color === 'white' ? 'gray' : this.color;
  }
}
