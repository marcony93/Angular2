import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'hola-angular',
  template: '<center><h1> {{saludo}} </h1></center>'
})
class HolaAngularComponent {
  saludo: string;
  constructor() {
    this.saludo = 'Bienvenido a Angular 2';
  }
}

bootstrap(HolaAngularComponent);