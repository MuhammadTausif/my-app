import { Component, OnInit } from '@angular/core';
import { Hero4 } from '../hero4';
import { Hero4Service } from '../hero4.service';

@Component({
  selector: 'app-heroes4',
  templateUrl: './heroes4.component.html',
  styleUrls: ['./heroes4.component.css']
})
export class Heroes4Component implements OnInit {

  selectedHero4: Hero4;

  heroes4: Hero4[];

  constructor(private hero4Service: Hero4Service) { }

  ngOnInit() {
    this.getHeroes4();
  }

  onSelect4(hero4: Hero4): void{
    this.selectedHero4 = hero4;
  }

  getHeroes4(): void{
    this.hero4Service.getHeroes4()
    .subscribe(heroes4=> this.heroes4 = heroes4);
  }
  
}
