import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { combineLatest } from "rxjs/operators/combineLatest";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CharacterPropsService } from './character-props.service';
import { PhysicalEhancePropsService } from './physical-props.service';
import { Character, PhysicalEhance } from '../models/state.model';

@Injectable()
export class DamageService {
    public damage$: Observable<Decimal>;
    constructor(private charService: CharacterPropsService,
        private phyService: PhysicalEhancePropsService) {
        this.damage$ = this.charService.characterProps$.pipe(
            combineLatest(this.phyService.enhanceProps$,
                (ch: Character, phy: PhysicalEhance) => ch.rate.times(phy.rate)))
    }
}