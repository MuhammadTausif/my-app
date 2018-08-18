import { Injectable } from '@angular/core';

@Injectable()
export class Message6Service {

  messages6: string[]= [];

  add(message6: string){
    this.messages6.push(message6);
  }

  clear(){
    this.messages6 = [];
  }
  constructor() { }

}
