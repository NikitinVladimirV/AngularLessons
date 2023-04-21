import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-homepage',
  template: `
    <div class="homepage">
      <app-counter
        [value]="service.count"
        (valueDecrease)="service.decrease()"
        (valueIncrease)="service.increase()"
      >
      </app-counter>
    </div>
  `,
  styles: [],
})
export class HomepageComponent implements OnInit {
  constructor(public service: DataService) {}

  ngOnInit(): void {}
}
