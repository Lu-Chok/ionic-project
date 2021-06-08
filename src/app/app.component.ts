import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  navigate: any;

  constructor(
    private platform: Platform    
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready()
    // .then(() => {
    // });
  }
  

  sideMenu() {
    this.navigate =
    [
      {
      title : 'Лабораторна робота №1',
      url :'/home',
      icon : 'calculator-outline'
      },
      {
        title: 'Лабораторна робота №2',
        url: '/graph',
        icon: 'analytics-outline'
      },
      {
        title: 'Лабораторна робота №3',
        url: '/file',
        icon: 'cart-outline'
      },
      {
        title: 'Лабораторна робота №4',
        url: '/abstract-class',
        icon: 'prism-outline'
      },
      {
        title: 'Модуль 1',
        url: '/module-one',
        icon: 'cube-outline'
      },
      {
        title: 'Інтерфейси',
        url: '/interfaces',
        icon: 'checkbox-outline'
      },
      {
        title: 'Firebase',
        url: '/database',
        icon: 'flame-outline'
      },
      {
        title: 'Екзамен',
        url: '/exam',
        icon: 'skull-outline'
      }
    ];
  }
}

