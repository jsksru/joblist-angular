import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:import-spacing
import { MainService } from  './main.service';
import { FilterType } from '../../widgets/filter/types';
import { Ship } from './main.types';
import _ from 'lodash';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{
  ships: Ship[];
  limit = 5;
  currentPage = 1;
  totalPages = 0;
  loading = true;

  constructor(private mainService: MainService) {}

  ngOnInit() {
    this.mainService.loadShips().then((result: Ship[]) => {
      this.ships = result;
      this.totalPages = Math.ceil(this.ships.length / this.limit);
      this.loading = false;
    });
  }

  get filters() {
    return this.mainService.getFilters();
  }

  setFilters(filters: FilterType) {
    this.mainService.setFilters(filters);
  }

  changePage(pageNum: number) {
    this.currentPage = pageNum;
  }

  getItems(pageNum: number): Ship[] {
    let filteredShips: Ship[] = [...this.ships];
    if (this.filters.search) {
      filteredShips = filteredShips.filter((i: Ship) => i.name.toLowerCase().indexOf(this.filters.search) !== -1);
    }
    if (this.filters.radio) {
      filteredShips = filteredShips.filter((i: Ship) => i.type === this.filters.radio);
    }
    if (this.filters.multi.length > 0) {
      filteredShips = filteredShips.filter((i: Ship) => this.filters.multi.includes(i.port));
    }
    return _.chunk(filteredShips, this.limit)[pageNum - 1];
  }

}
