import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HerosService } from '../../services/heros.service';
import { Hero } from '../../Hero';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.css']
})
export class HeroProfileComponent implements OnInit {

  hero!: Hero;
  faChevronLeft = faChevronLeft;

  constructor(private route: ActivatedRoute, private heroService: HerosService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.heroService.getSingleHero(params['id']).subscribe((hero) => (this.hero = hero));
      ;
    });

  }

}
