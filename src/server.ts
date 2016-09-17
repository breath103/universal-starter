// the polyfills must be the first thing imported in node.js
import 'angular2-universal-polyfills';

// Angular 2
import { enableProdMode } from '@angular/core';
// Angular 2 Universal
import { createEngine } from 'angular2-express-engine';
// App
import { MainModule } from './main.node';

// enable prod for faster renders
enableProdMode();

import { serverApi } from './backend/api';

// Routes with html5pushstate
function tryRunEngine() {
  const engine = createEngine({});
  engine('./src/index.html', {
    req: {},
    res: {},
    ngModule: MainModule,
    baseUrl: '/',
    requestUrl: "http://www.lvh.me:3000",
    originUrl: "lvh.me",
  }, (error, result) => {
    console.log("result: ", error, result);
  });
}

tryRunEngine();
