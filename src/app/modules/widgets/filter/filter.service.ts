import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filtersState = {
    search: '',
    multi: [],
    radio: null
  };

  public getSearch() {
    return this.filtersState.search;
  }
  public setSearch(value) {
    this.filtersState.search = value;
    console.log(this.filtersState.search);
  }
  public getRadio() {
    return this.filtersState.radio;
  }
  public setRadio(value) {
    this.filtersState.radio = value;
    console.log(this.filtersState.radio);
  }
  public getMulti() {
    return this.filtersState.multi;
  }
  public setMulti(value) {
    this.filtersState.multi = value;
    console.log(this.filtersState.multi);
  }

}
