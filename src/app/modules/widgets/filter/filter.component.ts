import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MultiSelectItems } from '../../../types/controls/multi-select.types';
import { RadioListItems } from '../../../types/controls/radio-list.types';
import { FilterType } from './types';


@Component({
  selector: 'widget-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() filters: FilterType;
  @Output() changeEvent: EventEmitter<FilterType> = new EventEmitter();

  changeFilter(filterName: string, value: any) {
    this.changeEvent.emit({
      ...this.filters,
      [filterName]: value
    });
  }

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
      value: 'Cargo',
      text: 'Cargo'
    },
    {
      value: 'Tug',
      text: 'Tug'
    }
  ];
}
