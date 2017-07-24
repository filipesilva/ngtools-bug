import {Component, ViewEncapsulation} from '@angular/core';
import {MyInjectable} from './injectable';


@Component({
  selector: 'app-root',
  template: `
  <div>
    <h1>hello world</h1>
    <a [routerLink]="['lazy']">lazy</a>
    <router-outlet></router-outlet>
  </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor(public inj: MyInjectable) {
    console.log(inj);
  }
}
