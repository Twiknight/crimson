import { Component } from '@angular/core';
import { CharacterPropsService } from './services/character-props.service';
import { Character } from './models/state.model';
import { PhysicalEhancePropsService } from './services/physical-props.service';
import { DamageService } from './services/damage.service';
import { MediaService, MediaChange, ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colspan = 1;
  rowspan = 3;
  title = 'app';
  constructor(public charService: CharacterPropsService,
    public phyService: PhysicalEhancePropsService,
    public damageService: DamageService,
    private _media$: ObservableMedia,
    private mediaService: MediaService
  ) { 
    this._media$.subscribe((e:MediaChange) => {
      if(this.mediaService.isActive('gt-md')) {
        this.colspan = 2;
        this.rowspan = 1;
      }
      if(this.mediaService.isActive('gt-sm')) {
        this.colspan = 2;
        this.rowspan = 4;
      } else if (this.mediaService.isActive('gt-xs')) {
        this.colspan = 6;
        this.rowspan = 4;
      } else {
        this.colspan = 6;
        this.rowspan = 12;
      }
    });
  }
}
