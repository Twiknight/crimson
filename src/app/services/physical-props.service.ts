import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { PhysicalEhance } from '../models/state.model';
import { Decimal } from 'decimal.js';

@Injectable()
export class PhysicalEhancePropsService {
  private source: BehaviorSubject<PhysicalEhance> = new BehaviorSubject(new PhysicalEhance());
  public enhanceProps$: Observable<PhysicalEhance>;
  constructor() {
    this.enhanceProps$ = this.source.asObservable();
  }

  public update = (state: PhysicalEhance, id: string, value: Decimal.Value) => {
    state[id] = state[id].modify(value)
    this.source.next(state)
  }
}
