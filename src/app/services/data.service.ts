import { Injectable } from '@angular/core';
import { HomepageComponent } from '../homepage/homepage.component';

@Injectable({
  providedIn: HomepageComponent,
})
export class DataService {
  public count = 0;

  decrease() {
    this.count > 0 ? this.count-- : 0;
  }

  increase() {
    this.count++;
  }

  constructor() {}
}
