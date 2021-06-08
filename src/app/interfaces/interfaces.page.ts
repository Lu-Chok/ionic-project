import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';


@Component({
  selector: 'app-interfaces',
  templateUrl: './interfaces.page.html',
  styleUrls: ['./interfaces.page.scss'],
})
export class InterfacesPage implements OnInit {

  constructor(public toast: HotToastService) { }
  show: ShowInterface;
  ngOnInit() { }
  ras()
  {
    this.show = new Show_Console(this.toast);
    let reactiveEngine = new ReactiveEngine("Реактивний двигун", 40, 1000, 7000, 2000, this.show, this.toast);
    reactiveEngine.power_calc();
    reactiveEngine.show();
    reactiveEngine.horsepower_calc();
    let diesel = new Diesel("Дизельний двигун", 2, 200, 8,  this.show);
  
    diesel.volume_calc();
    diesel.exist();
    diesel.type_eng();
  }
}


const getRandomInt = (max) => { return Math.floor(Math.random() * Math.floor(max)); }

interface EngineInterface { name: string; volume: number;}
interface ProduceInterface { produce() : void}
interface ShowInterface { show(s: string) : void; }

export class Show_Console implements ShowInterface
{
  constructor(public toastController: HotToastService) {}
  async show(s: string)
  {
    this.toastController.success(s, {dismissible: true, duration: 3000, position: "bottom-center"})
    console.log(s);
  }
}

export class ReactiveEngine implements EngineInterface, ShowInterface
{
  name: string;
  volume: number;
  power: number;
  impulse: number;
  horsepower: number;
  
  constructor(name: string, volume: number, power: number, impulse: number, horsepower: number, show:ShowInterface, public toastController: HotToastService)
  {
    this.name = name;
    this.volume = volume;
    this.power = power;
    this.impulse = impulse;
    this.horsepower = horsepower

    show.show(`Двигун: ${this.name}\nОб'єм: ${this.volume}\nПотужність: ${this.power}\nІмпульс: ${this.impulse}\nКінських сил: ${this.horsepower}`);
  }
  power_calc()
  {
    this.power = this.volume * this.horsepower;
    console.log("Розрахована потужність: " + this.power)
  }
  horsepower_calc() {
    if (this.horsepower < 180)
    {
      console.log("Двигун недостатньо потужний!");
    }
  }
  async show()
  {
    console.log("Такий двигун існує");
  }
}

export abstract class Internal_Engine implements EngineInterface
{
  name: string;
  volume: number;
  horsepower: number;
  cylinders: number;
  constructor(name: string, volume: number, horsepower: number, cylinders: number)
  {
    this.name = name;
    this.volume = volume;
    this.horsepower = horsepower;
    this.cylinders = cylinders
  }
  exist()
  {
    console.log("Такий двигун існує")
  }
  volume_calc()
  {
    this.volume = this.horsepower / this.cylinders;
    console.log("Розрахований об'єм: " + this.volume)
  }

}

export class Diesel extends Internal_Engine implements ProduceInterface
{

  constructor(name: string, volume: number, horsepower: number, cylinders: number,  show: ShowInterface)
  {
    super(name, volume, horsepower, cylinders);
    show.show(`Двигун: ${this.name}\nОб'єм: ${this.volume}\nКінські сили: ${this.horsepower}\Циліндри: ${this.cylinders}`);

    // show.show("Двигун: " + this.name + "Об'єм: " + this.volume + "Кінські сили: " + this.horsepower + "Циліндри: " + this.cylinders)
  }

  produce() {
    throw new Error('Method not implemented.');
  }

  type_eng()
  {
    if (this.cylinders < 8)
    {
      return "Підтверджено, що двигун дизельний";
    }
  }
  exist()
  {
    console.log("Такий дизельний двигун існує");
  }

  volume_calc()
  {
    this.volume = this.horsepower / this.cylinders;
    console.log("Розраховано об'єм двигуна: " + this.volume)
  }
}
