import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any',
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
