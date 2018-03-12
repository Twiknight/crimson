import { Component, OnInit, HostBinding } from '@angular/core';
import { Input } from '@angular/core';
import { Decimal } from 'decimal.js';
import { curry } from 'ramda';

import { FormItem } from '../models/formItem.model';
import { State, Character } from '../models/state.model';

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.css'],
})
export class FormCardComponent implements OnInit{
  @Input('state') state: State;
  @Input('update') update: (state: Character, id:string, value: Decimal.Value) => void

  public onChange: (id: string, value: Decimal) => void 
  constructor() {}
  ngOnInit(): void {
    this.onChange = this.update.bind(this.state)
  }
}
