import { Component, OnInit } from '@angular/core';

/**

У зоопарку виникла необхідність обліку птахів для побудови нових
вольєрів, 

так для птахів які вміють літати(наприклад, голуби) необхідні вольєри з сіткою площиною 5 на 10 метрів,
для птахів які лише плавають(наприклад, пінгвіни) вольєри з озером та землею розміри озера 3 на 3 метри суші 2 на 4 метри, 
для птахів які бігають(наприклад, страуси) вольєри з високою огорожею розміром 15 на 3 метри. 

Необхідно спланувати список вольєрів для як мінімум для 3 видів птахів та обрахувати як площину

кожного з вольєрів так і сумарну площину. Результати такого планування
необхідно виводити на екран.

**/

abstract class Room {
  name: string;
  a: number; 
  b: number;

  atribute : string;
  pl: number;

  constructor() {}

  getName() : string {
    return `${this.name} ${this.a} x ${this.b} м.`
  }
  
  getParams() : string {
    return `Площа: ${this.pl.toFixed(2)}, Особливості: ${this.atribute}`
  }

  abstract S () : void;
}


class FlyingRoom extends Room {
  
  constructor( 
    public name: string, 
    public a: number,
    public b: number
  ) {
    super()
    this.atribute = 'Сітка';
  }
  
  S() {
    this.pl = this.a * this.b
  }

}

class WaterRoom extends Room {
  
  constructor( 
    public name: string, 
    public a: number,
    public b: number,
    public wa: number,
    public wb: number
  ) {
    super()
    this.atribute = `Озеро ${this.wa} x ${this.wb} м.`
    this.wa = wa;
    this.wb = wb;
  }
  
  S() {
    this.pl = this.a * this.b + this.wa * this.wb
  }
}

class RunningRoom extends Room {
  
  constructor( 
    public name: string, 
    public a: number,
    public b: number
  ) {
    super()
    this.atribute = 'Висока огорожа'
  }
  
  S() {
    this.pl = this.a * this.b;
  }
}




@Component({
  selector: 'app-module-one',
  templateUrl: './module-one.page.html',
  styleUrls: ['./module-one.page.scss'],
})
export class ModuleOnePage implements OnInit {

  figure : Room[];
  max: number = 0;

  constructor() { }

  getRandomInt(max : number) : number {
    return Math.floor(Math.random() * Math.floor(max))
  }

  ras(nn: string,){
    this.figure = new Array();
    
    let n = parseInt(nn)

    for (let i = 0; i < n; i++) {
      this.figure.push(new FlyingRoom('Вольєр для літаючих', 5, 10));
      this.figure.push(new WaterRoom('Вольєр для плаваючих', 2, 4, 3, 3));
      this.figure.push(new RunningRoom('Вольєр для бігаючих', 2, 4));
    }

    this.figure.forEach(e=>e.S())
    this.max = Math.max(...(this.figure.map(e => e.pl)));
    // totalArea = this.figure.map(e=>e.pl).reduce((a, b) => a + b).toString();
    document.getElementById('totalArea').innerHTML = `Загальна площа: ${this.figure.map(e=>e.pl).reduce((a, b) => a + b)}`;

    console.log(this.max);
    
  }
  
  getColor(e: number, max: number) {
    return (Math.abs(e-max) < 0.01) ? "green" : "";
  }


  ngOnInit() {}

}
