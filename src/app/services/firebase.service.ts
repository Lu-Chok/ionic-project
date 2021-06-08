import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map'

import { AngularFireDatabase, AngularFireList, AngularFireObject} from "@angular/fire/database";
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  goodsList : AngularFireList<any>;
  bdRef : AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  createGoods(goods: any) {
    return this.goodsList.push(goods)
  }

  getGoodsById(id: string, bd: string) {
    this.bdRef = this.db.object(`/${bd}${id}`);
    return this.bdRef;
  }
  
  getGoodsList(bd: string) {
    this.goodsList = this.db.list(`/${bd}`);
    console.log(this.goodsList);
    
    // this.goodsList = this.db.list(`/${bd}`).snapshotChanges().pipe(
    //   map(actions => actions.map(a => {

    //       const data = a.payload.doc.data();
    //       const id = a.payload.doc.id;


    //       return { id, ...data };

    //   }))

    // }
      // this.goodsList= this.db.list(`/${bd}`).snapshotChanges().map( changes => { return changes.map(c=>({ key: c.payload.key, ...c.payload.val() }));});
        

  // );
    return this.goodsList.snapshotChanges();
  }
}


