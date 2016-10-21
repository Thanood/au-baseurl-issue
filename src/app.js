import {inject, Loader} from 'aurelia-framework';

@inject(Loader)
export class App {
  constructor(loader) {
    this.message = 'Hello World!';
    this.loader = loader;
  }

  loadPlugins() {
    this.loader.loadModule('plugins/index').then(m => {
      console.log(m);
    });
  }
}
