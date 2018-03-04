import { Component } from '@angular/core';

import { createFormItem } from './models/formItem.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  formList1 = [createFormItem('test', 'test_name', 0)];
}
