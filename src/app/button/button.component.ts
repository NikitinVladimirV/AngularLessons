import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

type buttonColors = 'default' | 'primary' | 'accent' | 'success' | 'warning';
type buttonTypes = 'basic' | 'flat' | 'stroked';

@Component({
  selector: 'app-button',
  template: `
    <button
      class="button-base"
      [ngClass]="[buttonType, innerColor]"
      [class.large]="size === 'large'"
      [class.small]="size === 'small'"
      [class.button-disabled]="isDisabled"
      [attr.disabled]="isDisabled ? '' : null"
    >
      {{ text }}
    </button>
  `,
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit, OnChanges {
  @Input() text = 'В корзину';
  @Input() color: buttonColors = 'default';
  @Input() size: 'default' | 'large' | 'small' = 'default';
  @Input() buttonType: buttonTypes = 'flat';
  @Input() isDisabled = false;
  @Input() isActive = false;

  innerColor: buttonColors = 'default';
  innerSize: 'default' | 'large' | 'small' = 'default';

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    const { color, size } = changes;
    if (color && color.currentValue) {
      this.innerColor = color.currentValue;
    }

    if (size && size.currentValue) {
      this.innerSize = size.currentValue;
    }
  }

  ngOnInit(): void {}
}
