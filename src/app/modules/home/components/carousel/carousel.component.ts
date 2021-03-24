import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'slides',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [
    {
      provide: CarouselConfig, useValue: { interval: 4000, noPause: true, showIndicators: true, pauseOnFocus: true}
    }
  ]
})
export class CarouselComponent implements OnInit {
  ngOnInit(): void {
  }

}
