import { Component } from '@angular/core';
import { MultiSelectItems } from '../../../types/controls/multi-select.types';
import { RadioListItems } from '../../../types/controls/radio-list.types';
import { FilterService } from './filter.service';


@Component({
  selector: 'widget-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  constructor(private filterService: FilterService) {}

  getSearch() {
    return this.filterService.getSearch();
  }
  setSearch(value) {
    this.filterService.setSearch(value);
  }
  getRadio() {
    return this.filterService.getRadio();
  }
  setRadio(value) {
    this.filterService.setRadio(value);
  }
  getMulti() {
    return this.filterService.getMulti();
  }
  setMulti(value) {
    this.filterService.setMulti(value);
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
