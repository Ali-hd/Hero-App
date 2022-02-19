import { Component, OnInit, Input } from '@angular/core';
import { HerosService } from '../../services/heros.service';
import { Hero } from '../../Hero';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  @Input() heros: Array<Hero> = [];
  @Input() filterHeros: Array<Hero> = [];
  @Input() searchTerm: string = "";
  @Input() sortByPower: boolean = false;
  checkFilter: boolean = true;

  constructor(private heroService: HerosService) { }

  ngOnInit(): void {
    
  }

  ngOnChanges(): void{
    if(this.searchTerm != "" && this.sortByPower != true){
      //show filtered result
      this.checkFilter = false
    }else if(this.sortByPower == true){
      this.checkFilter = false
    }else{
      this.checkFilter = true
    }
  }

  updateStars(hero: Hero, rating: number){
    //update current heros
    let findHeroIndex = this.heros.findIndex(i => i.id == hero.id)
    this.heros[findHeroIndex].rating = rating;

    //update heros database
    hero.rating = rating;
    this.heroService.rateHero(hero).subscribe()

  }

}
