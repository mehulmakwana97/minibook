import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <nav>
      <a routerLink="/" routerLinkActive="active">Home</a>
      <a routerLink="/page-1" routerLinkActive="active">Page1</a>
      <a routerLink="/page-2" routerLinkActive="active">Page2</a>
    </nav>
    <router-outlet></router-outlet>
   `,
})
export class AppComponent  { name = 'Angular test 1'; }
