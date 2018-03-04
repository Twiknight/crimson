import { Component, OnInit, HostBinding } from '@angular/core';
import { Input } from '@angular/core';

import { FormItem } from '../models/formItem.model';

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.css'],
})
export class FormCardComponent implements OnInit {
  @Input('title') title: string;
  @Input('items') items: FormItem[];

  constructor() { }

  ngOnInit() {
    console.log(this.items);
  }

}
