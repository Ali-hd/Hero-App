import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  
  @Input() rating!: number;
  @Output() onUpdateStars: EventEmitter<number> = new EventEmitter()
  faStar = faStar;
  emptyStar = emptyStar;
  styleChanged = false;

  iconClass = {
    '0': emptyStar,
    '0.5': faStarHalfAlt,
    '1': faStar,
  };

  stars: number[] = [0, 0, 0, 0, 0];

  constructor() {}

  ngOnInit(): void {
    this.fillStars();
  }

  //update stars
  updateStars(e: Event, index: number) {
    this.onUpdateStars.emit(index+1)
    // if(e.type == 'mouseover' && this.stars[index] != 1){
    //   this.stars[index] = 1
    //   this.styleChanged = true
    // }else if(e.type == 'mouseout' && this.styleChanged){
    //   console.log('changed')
    //   this.stars[index] = 0
    //   this.styleChanged = false
    // }
  }


  ngOnChanges() {
    this.fillStars();
  }

  fillStars() {
    let starsToFill = Math.round(this.rating * 2) / 2; //round to nearest 0.5

    //fill stars by rating
    let i = 0;
    while (starsToFill > 0.5) {
      this.stars[i] = 1;
      i++;
      starsToFill--;
    }

    //unfill remaining stars
    while(i < 5){
      this.stars[i] = 0
      i++
    }
    if (starsToFill === 0.5) {
      this.stars[i] = 0.5;
    }
  }
}
