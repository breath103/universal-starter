import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
  <p>Hello Angular Universal App</p>
  <router-outlet></router-outlet>
  `
})
export class App {

}

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'home',
  template: 'Home component <h3>{{title}}</h3>'
})
export class Home {
  title: String;
  constructor(route: ActivatedRoute) {
    route.data.subscribe((data) => {
      this.title = data['title'];
    });
  }
}
