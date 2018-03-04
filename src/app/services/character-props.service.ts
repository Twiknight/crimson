import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

const createDefaultCharacter = () => ({
  attack: 1,
  physicalSkillRate: 1,
  elementalSkillRate: 1
});

@Injectable()
export class CharacterPropsService {
  private source: Subject<Character>;
  public characterProps$: Observable<Character>;
  constructor() {
    this.source = new Subject();
    this.source.next(createDefaultCharacter());
    this.characterProps$ = this.source.asObservable();
  }

}

export interface Character {
  attack: number;
  physicalSkillRate: number;
  elementalSkillRate: number;
}
