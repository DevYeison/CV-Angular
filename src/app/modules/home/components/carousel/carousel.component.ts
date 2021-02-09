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
      `${this.initialRoute}ia.png`,
      `${this.initialRoute}zorro.png`,
      `${this.initialRoute}toxic.png`
    ];
  }

  ngOnInit(): void {
  }

  prevImg(): void{
    if(this.actualImg != 0) {
      this.actualImg --;
    }else if(this.actualImg == 0){
      this.actualImg = this.arrayImgs.length;
    };
  }

  nextImg():void{
    if(this.actualImg != 2) {
      this.actualImg ++
    }else if(this.actualImg == 2){
      this.actualImg = 0;
    };
  }

  img(): string{
    return this.arrayImgs[this.actualImg];
  }

}
