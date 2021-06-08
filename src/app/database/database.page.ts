import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../services/firebase.service";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-database',
  templateUrl: './database.page.html',
  styleUrls: ['./database.page.scss'],
})
export class DatabasePage implements OnInit {

  constructor(public firebaseService: FirebaseService) { }
  
  goods = this.firebaseService.getGoodsList('goods')


  ngOnInit() {}
  // added = this.firebaseService.createGoods({
  //   "name" : "Вороний клюв",
  //   "price" : 400,
  //   "quantity" : 0
  // })

  // goods = this.firebaseService.getGoodsList('goods')
  added = this.firebaseService.createGoods({
    "name" : "Водичка",
    "price" : 15,
    "quantity" : 20
  })
  // goods = []
  
  // a = this.firebaseService.getGoodsList('goods').valueChanges().subscribe(res => {
  //   // console.log(res);
  //   this.goods.push(res)
  // });
  
  // console.log(goods2);
  
  
}
