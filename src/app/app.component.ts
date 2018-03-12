import { Component } from '@angular/core';
import { CharacterPropsService } from './services/character-props.service';
import { Character } from './models/state.model';
import { PhysicalEhancePropsService } from './services/physical-props.service';
import { DamageService } from './services/damage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public charService: CharacterPropsService,
    public phyService: PhysicalEhancePropsService,
    public damageService: DamageService
  ) { }
}
