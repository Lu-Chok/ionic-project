import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-next-page',
  templateUrl: './next-page.page.html',
  styleUrls: ['./next-page.page.scss'],
})
export class NextPagePage implements OnInit {
  a: number;
  b: number;
  c: number;
  d: number;

  constructor() {}

  ras (a:string, b:string) {
    
    this.a=parseFloat(a)
    this.b=parseFloat(b)

    let arr : number[] = (new Array(this.b - this.a + 1)).fill(undefined).map((_, i) => i + this.a);
    arr = arr.filter(e => 
      e % 17 == 0 && 
      e % 2 == 0 &&
      e % 7 == 3
    )


    this.d = arr.length
  }

  ngOnInit() {
  }

}