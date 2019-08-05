import {Injectable} from '@angular/core';
import {HEROES} from '../mock-heroes';

@Injectable({
  // chung ta khai bao rang service nay nen duoc tao ra tu ung dung injector goc
  providedIn: 'root'
})
export class HeroService {
  getHeroes() {
    return HEROES;
  }

  constructor() {
  }
}
