import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DesignUtilityService {
  constructor() {}

  print(data: any, elementId: any) {
    let el = document.createElement('li');
    el.innerText = data;
    document.getElementById(elementId)?.appendChild(el);
  }
}
