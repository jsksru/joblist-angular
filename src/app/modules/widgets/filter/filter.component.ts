import { Component } from '@angular/core';
import { MultiSelectItems } from '../../../types/controls/multi-select.types';
import { RadioListItems } from '../../../types/controls/radio-list.types';

@Component({
  selector: 'widget-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  filter: MultiSelectItems = [
    {
      value: '#000',
      text: 'Black'
    },
    {
      value: 'rgb(255,0,0)',
      text: 'Red'
    },
    {
      value: 'fam',
      text: 'Family'
    }
  ];
  radios: RadioListItems = [
    {
      value: '#000',
      text: 'Black'
    },
    {
      value: 'rgb(255,0,0)',
      text: 'Red'
    },
    {
      value: 'fam',
      text: 'Family'
    }
  ];
}
