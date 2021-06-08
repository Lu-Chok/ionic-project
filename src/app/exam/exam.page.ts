import { Component, OnInit, Output } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.page.html',
  styleUrls: ['./exam.page.scss'],
})
export class ExamPage implements OnInit {
  rows: number =3 ;
  collumns: number =3;
  
  async log (s: string) {this.toastController.success(s, {dismissible: true, duration: 3000, position: "bottom-center"})}
  subtractMatrix()
  {
    let s = `Успішно відняли в матриці ${this.rows} x ${this.collumns}`
    // this.toastController.success(s, {dismissible: true, duration: 3000, position: "bottom-center"})
    console.log(s);
    this.log(s)
    return s
  }
  constructor(public toastController: HotToastService) { }
  
  ngOnInit() {
  }

}


// export class Matrix {
//   rows: number;
//   collumns: number;

//   constructor() {}

//   subtractMatrix() : string {
//     return `Успішно відняли в матриці ${this.rows} x ${this.collumns}`
//   }
// }