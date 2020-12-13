import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MultiSelectItems } from '../../../types/controls/multi-select.types';
import { RadioListItems } from '../../../types/controls/radio-list.types';
import { FilterType } from '../../../types/filter';


@Component({
  selector: 'app-widget-filter',
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
      value: 'Port of Los Angeles',
      text: 'Port of Los Angeles'
    },
    {
      value: 'Port Canaveral',
      text: 'Port Canaveral'
    },
    {
      value: 'Fort Lauderdale',
      text: 'Fort Lauderdale'
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
    },
    {
      value: 'Barge',
      text: 'Barge'
    },
    {
      value: 'High Speed Craft',
      text: 'High Speed Craft'
    }
  ];
}
