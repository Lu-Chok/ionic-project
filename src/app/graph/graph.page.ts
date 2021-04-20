import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
})

export class GraphPage implements OnInit {
  
  @ViewChild('lineCanvas') private lineCanvas : ElementRef;
  
  lineChart : any;
  xn: number;
  xk: number;
  h: number;
  a: number;
  xx: string[];
  yy: number[];

  data = []

  constructor() {}
  ngOnInit() {}

  lineChartMethod() {
    let data = {
      labels: this.xx,
      datasets: [
        {
          label: "Графік функції",
          fill: false,
          data: this.yy,
          borderColor: 'rgb(38, 194, 129)',
          borderWidth: 1
        }
      ]
    };
    
    try {
      this.lineChart = new Chart( this.lineCanvas.nativeElement, { type: 'line', data: data } )
    } catch (e) {
      this.lineChart.data = data
      this.lineChart.update()
    }
  }


  graphas(xn: string, xk: string, h:string, a:string){
    this.xn = parseFloat(xn);
    this.xk = parseFloat(xk);
    this.h = parseFloat(h);
    this.a = parseFloat(a);

    let x: number, y: number, i: number;

    x = this.xn;
    this.xx = new Array();
    this.yy = new Array();

    while (x < this.xk) {
      
      if (x <= 0) {
        // y = x*x+ Math.sin(7*x)
        y = x**4 + (2 * x**3) - x
      }

      else if (x <= this.a) {
        // y = Math.abs(Math.pow(x, 3) + Math.pow(10, x))
        y = - Math.exp(x * -1) + x**0.25
      }

      else {
        // y = Math.pow(2 * Math.pow(x, 4) + Math.pow(x, 2) + 1, 1.0 / 7.0)
        y = Math.log(x**3 + x**2)
      }
      this.xx.push(x.toFixed(1));
      this.yy.push(parseFloat(y.toFixed(1)));

      x = x + this.h
    }
    console.log(this.xx);
    console.log(this.yy);
    this.lineChartMethod();
  }

}

