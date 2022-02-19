import { Component, OnInit } from '@angular/core';
import { HerosService } from '../../services/heros.service';
import { Hero } from '../../Hero';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  heros: Hero[] = [];
  filterHeros: Hero[] = [];
  searchTerm: string = "";
  sortByPower: boolean = false;

  constructor(private heroService: HerosService) { }

  ngOnInit(): void {
    this.heroService.getHeros().subscribe((heros) => (this.heros = heros.sort((a,b)=>{
      var nameA = a.name.toUpperCase(); 
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      return 0;
    })));
  }

  onFilter(filter: any){
    let sortByPower = filter.sortByPower;
    let searchValue = filter.searchValue.toLowerCase();
    let condition = new RegExp(searchValue);
    let result = [...this.heros].filter(function (hero){
      let name = hero.name.toLowerCase();
      return condition.test(name)
    })

    if(sortByPower)
    result = [...this.heros].sort((a,b)=>{
      return b.powers.length - a.powers.length 
    })

    this.filterHeros = result
    this.searchTerm = filter.searchValue
    this.sortByPower = filter.sortByPower
  }

}
