import { Component, OnInit, Output } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
})
export class InputFormComponent implements OnInit {

  constructor() { }
  rows=3;
  cols=3;
  @Output() form = new FormArray([]);

  ngOnInit() {
    for (let i = 0; i < this.rows; i++) {
      this.form.push(new FormArray([]))
      for (let j = 0; j < this.cols; j++) {
        (this.form.at(i) as FormArray).push(new FormControl())
      }
  }
  }

}
