import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  a: number;
  b: number;
  c: number;
  d: number;

  constructor() {}

  ras (a:string, b:string, c:string) {
    this.a=parseFloat(a)
    this.b=parseFloat(b)
    this.c=parseFloat(c)
    
    // Ищем кратные 27
    let arr = [this.a, this.b, this.c]
    arr = arr.filter(e => e % 27 == 0 && e != 0)

    this.d = arr.length;
  }


}
