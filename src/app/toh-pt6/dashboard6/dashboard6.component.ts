import { Component, OnInit } from '@angular/core';
import { Hero6Service } from '../hero6.service';

@Component({
  selector: 'app-dashboard6',
  templateUrl: './dashboard6.component.html',
  styleUrls: ['./dashboard6.component.css']
})
export class Dashboard6Component implements OnInit {

  constructor(private hero6Service: Hero6Service) { }

  ngOnInit() {
    this.getHeroes6();
  }

  getHeroes6(){
    
  }

}
