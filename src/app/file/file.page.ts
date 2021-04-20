import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-file',
  templateUrl: './file.page.html',
  styleUrls: ['./file.page.scss'],
})

export class FilePage implements OnInit {
  data: any = []
  showDetails: boolean[] = new Array(1000).fill(false)
  
  // remoteUrl = 'https://api.jsonbin.io/b/607c5effee971419c4dc58f0'
  remoteUrl = 'https://api.jsonbin.io/b/607c810d0ed6f819beaeff92'
  loading: any;

  max: number = 0;
  min: number = 100;

  constructor(public loadingController:LoadingController) {}


  getGreenColor(a:number) {
    return a == 0 ? '' : "green";
  }

  // getYes (b: boolean){
  //   return b == true ? 'Одружений' : "Неодружений";
  // }

  // getDog (b: boolean){
  //   return b == null ? 'Немає собаки' : `Є собака ${b}`;
  // }
  

  // getMaxAge(){
  //   this.max = Math.max(...this.data.map(e => e.age));
  // }

  // getMinAge(){
  //   this.min = Math.min(...this.data.map(e => e.mother.age));
  // }

  toggleDetails(i:number) {
    if (this.showDetails[i]) this.showDetails[i] = false;
    else this.showDetails[i] = true
  }


  async load() {
    this.loading = await this.loadingController.create({
      message: 'Loading...',
      spinner: 'bubbles'
    });
    await this.loading.present();

    fetch(this.remoteUrl).then(res => res.json())
    .then(json => {
        this.data = json.data;
        console.log(this.data);
        // this.getMaxAge();
        // this.getMinAge();
        this.loading.dismiss();
      }
    )
  }
  ngOnInit() {}
}
