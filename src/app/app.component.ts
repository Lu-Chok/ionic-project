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
      }
    ];
  }
}

// import { Component } from '@angular/core';

// import { Platform } from '@ionic/angular';
// // import { SplashScreen } from '@ionic-native/splash-screen/ngx';

// // import { StatusBar } from '@ionic-native/status-bar/ngx';

// @Component({
//   selector: 'app-root',
//   templateUrl: 'app.component.html',
//   styleUrls: ['app.component.scss'],
// })


// export class AppComponent {
  
//   navigate: any;

//   // constructor(private splashScreen: SplashScreen) { }

//   constructor(
//     private platform: Platform,
//     // private splashScreen: SplashScreen,
//     // private statusBar: StatusBar
//   ) {
//     this.sideMenu();
//     this.initializeApp();
//   }

//   initializeApp() {
//     this.platform.ready().then(() => {
//     // this.statusBar.styleDefault();
//     // this.splashScreen.hide();
//     });
//   }

//   sideMenu() {
//     this.navigate = [
//       {
//         title: 'Лабораторна робота 1',
//         url : '/home',
//         icon: 'home'
//       },
//       {
//         title: 'Лабораторна робота 2',
//         url: '/graph',
//         icon: 'analytics'
//       }
//     ];
//   }

// }
