import { Component, OnInit, Input } from '@angular/core';
import { Hero4 } from '../hero4';

@Component({
  selector: 'app-hero-detail4',
  templateUrl: './hero-detail4.component.html',
  styleUrls: ['./hero-detail4.component.css']
})
export class HeroDetail4Component implements OnInit {

  @Input() hero4: Hero4;

  constructor() { }

  ngOnInit() {
  }

  a: any=9;

}
