import { Injectable } from '@angular/core';
import { Hero4 } from './hero4';
import { Observable } from 'rxjs/Observable';
import { Message4Service } from './message4.service';
import { HEROES4 } from './mock-heroes4';
import { of } from 'rxjs/observable/of';

@Injectable()
export class Hero4Service {

  constructor(private message4Service: Message4Service) { }

  getHeroes4(): Observable<Hero4[]>{
     // TODO: send the message _after_ fetching the heroes
    this.message4Service.add4("Hero4Service: fetched heroes");
    return of(HEROES4)
  }

}
