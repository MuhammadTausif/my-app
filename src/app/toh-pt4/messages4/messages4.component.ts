import { Component, OnInit } from '@angular/core';
import { Message4Service } from '../message4.service';

@Component({
  selector: 'app-messages4',
  templateUrl: './messages4.component.html',
  styleUrls: ['./messages4.component.css']
})
export class Messages4Component implements OnInit {

  constructor(public message4Service: Message4Service) { }

  ngOnInit() {
  }

}
