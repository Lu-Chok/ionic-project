import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss'],
})

export class CustomHeaderComponent implements OnInit {
  @Input() name: string = "Лабораторні Роботи"
  constructor() { }

  ngOnInit() {
  }

}
