import { Component, OnInit } from '@angular/core';


abstract class Figure2D {
  name: string;
  a: number;
  b: number;
  c: number;

  pl: number;

  constructor() {}

  getName() : string {
    return `${this.name}`
  }
  
  getParams() : string {
    return `Площа: ${this.pl.toFixed(2)} (a: ${this.a}  b: ${this.a}  с: ${this.a})`
  }

  abstract S () : void;
}

class EqualTriangle extends Figure2D {

  constructor( 
    public name: string, 
    public  a: number,
    public  b: number,
    public  c: number
  ) {
    super()
  }
  
  S() {
    let s : number = (this.a + this.b + this.c)/2
    this.pl = Math.sqrt(s*((s-this.a)*(s-this.b)*(s-this.b)));
  }
}

class SquareTriangle extends Figure2D {

  constructor( 
    public name: string, 
    public  a: number,
    public  b: number,
    public  c: number
  ) {
    super()
  }
  
  S() {
    let s : number = (this.a + this.b + this.c)/2
    this.pl = Math.sqrt(s*((s-this.a)*(s-this.b)*(s-this.b)));
    // let s4, s0 : number;
    // s4 = 0.5 * this.parameter * this.h;
    // s0 = this.parameter & this.parameter;
    // this.pl = 4 * s4 + s0;
  }
}

@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
})
export class AbstractClassPage implements OnInit {

  figure : Figure2D[];
  max: number = 0;

  constructor() { }

  getRandomInt(max : number) : number {
    return Math.floor(Math.random() * Math.floor(max))
  }

  ras(nn: string){
    this.figure = new Array();
    
    let n = parseInt(nn)
    for (let i = 0; i < n; i++) {
      this.figure.push(new EqualTriangle(
        "Рівобедрений трикутник", 
        this.getRandomInt(10), 
        this.getRandomInt(20),
        this.getRandomInt(30)
        )
      )
      this.figure.push(new SquareTriangle(
        "Прямокутний трикутник", 
        this.getRandomInt(10), 
        this.getRandomInt(20),
        this.getRandomInt(30)
        )
      )
    }

    this.figure.forEach(e=>e.S())
    this.max = Math.max(...(this.figure.map(e => e.pl)));

    console.log(this.max);
    
  }
  
  getColor(e: number, max: number) {
    return (Math.abs(e-max) < 0.01) ? "green" : "";
  }

  ngOnInit() {}

}
