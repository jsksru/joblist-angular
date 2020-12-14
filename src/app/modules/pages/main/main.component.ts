import { Component, OnInit } from '@angular/core';
import { MainService } from  './main.service';
import { FilterType } from '../../../types/filter';
import { Ship } from '../../../types/ship.types';
import { Apollo, gql } from 'apollo-angular';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  ships: Ship[];
  limit = 5;
  currentPage = 1;
  totalPages = 0;
  loading = true;

  constructor(private mainService: MainService, private apollo: Apollo) {}

  queryBuilder() {
    const searchText = this.filters.search || '';
    const shipType = this.filters.radio || '';
    const homePorts = this.filters.multi.length > 0 ? this.filters.multi.join('|') : '';
    const queryFilter = `
      find: {
        name: "${searchText}",
        type: "${shipType}",
        home_port: "${homePorts}"
      },
      limit: ${this.limit},
      offset: ${this.limit * (this.currentPage - 1)}
    `;
    return queryFilter;
  }

  fetchShips() {
    this.loading = true;
    this.apollo.query<any>({
      query: gql`
      {
        shipsResult(${this.queryBuilder()}) {
          result {
            totalCount
          }
          data {
            id
            name
            type
            home_port
          }
        }
      }`
    }).toPromise().then(({ data }) => {
      this.totalPages = Math.ceil(data.shipsResult.result.totalCount / this.limit);
      this.ships = data.shipsResult.data.map(i => ({
        id: i.id,
        name: i.name,
        type: i.type,
        port: i.home_port,
      }));
      this.loading = false;
    });
  }

  get filters() {
    return this.mainService.getFilters();
  }

  ngOnInit() {
    this.fetchShips();
  }

  setFilters(filters: FilterType) {
    this.mainService.setFilters(filters);
    this.fetchShips();
  }

  changePage(pageNum: number) {
    this.currentPage = pageNum;
    this.fetchShips();
  }

}
