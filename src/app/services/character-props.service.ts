import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Character } from '../models/state.model';

@Injectable()
export class CharacterPropsService {
  private source: BehaviorSubject<Character> = new BehaviorSubject(new Character());
  public characterProps$: Observable<Character>;
  constructor() {
    this.characterProps$ = this.source.asObservable();
  }

  public update = (state: Character, id: string, value: Decimal.Value) => {
    state[id] = state[id].modify(value)
    this.source.next(state)
  }
}
