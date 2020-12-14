import { Injectable } from '@angular/core';
import { FilterType } from '../../../types/filter';



@Injectable({
  providedIn: 'root'
})
export class MainService {
  private filters: FilterType = {
    search: '',
    multi: [],
    radio: null
  };

  setFilters(filters: FilterType) {
    this.filters = filters;
  }
  getFilters() {
    return this.filters;
  }
}
