import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { faSortAmountDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { style, state, trigger, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  animations: [
    trigger("grow", [
      transition(":enter", [
        style({ height: "0", overflow: "hidden" }),
        animate(300, style({ height: "*" }))
      ]),
      transition(":leave", [
        animate(300, style({ height: 0, overflow: "hidden" }))
      ])
    ])
  ]
})
export class FilterComponent implements OnInit {

  @Output() currentFilter: EventEmitter<object> = new EventEmitter();
  faSortAmountDown = faSortAmountDown;
  faSearch = faSearch;
  sortByPower:boolean = false;
  searchValue:string = "";
  filterOpen:boolean = false;
  @ViewChild('searchRef', { static: false }) searchRef!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onChangeFilter(){
    const filter = {
      sortByPower : this.sortByPower,
      searchValue : this.searchValue
    }

    this.currentFilter.emit(filter)
  }

  openFilter(){
    if(this.filterOpen == false){
      this.filterOpen = true;
      setTimeout(() => this.searchRef.nativeElement.focus(), 300);
      
    }else{
      this.filterOpen = false;
    }
  }

}
