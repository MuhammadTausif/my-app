import { Injectable } from '@angular/core';

@Injectable()
export class Message4Service {

  messages4: string[]= [];

  constructor() { }

  add4(message4: string){
    this.messages4.push(message4);
  }

  clear() {
    this.messages4 = [];
  }

}
