import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-top-bar',
  template: `
    <div class="top-bar">
      <app-cart [count]="service.count"></app-cart>
    </div>
  `,
  styles: [],
})
export class TopBarComponent implements OnInit {
  constructor(public service: DataService) {}

  ngOnInit(): void {}
}
