import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  private initialRoute: string = "assets/imgs/";
  private actualImg: number;
  private arrayImgs: string[];

  constructor() {
    this.actualImg = 0;
    this.arrayImgs = [
      `${this.initialRoute}fullstack.png`,
      `${this.initialRoute}MEAN.png`,
      `${this.initialRoute}mobile.png`
    ];
  }

  ngOnInit(): void {
  }

  prevImg(): void{
    if(this.actualImg != 0) {
      this.actualImg --;
    }else{
      this.actualImg = this.arrayImgs.length -1;
    }
  }

  nextImg():void{
    if(this.actualImg != this.arrayImgs.length - 1) {
      this.actualImg ++;
    }else{
      this.actualImg = 0;
    }
  }

  img(): string{
    return this.arrayImgs[this.actualImg];
  }

}
