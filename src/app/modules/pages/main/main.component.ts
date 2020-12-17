import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainService } from  './main.service';
import { FilterType } from '../../../types/filter';
import { Ship } from '../../../types/ship.types';
import { Apollo, gql } from 'apollo-angular';
import {Subscription} from 'rxjs';

const GET_SHIPS_BY_FILTER = gql`
query GetShips($shipName: String!, $shipType: String!, $shipPorts: String!, $limit: Int!, $offset: Int!) {
  shipsResult(find: {name: $shipName, type: $shipType, home_port: $shipPorts}, limit: $limit, offset: $offset) {
    result {
      totalCount
    }
    data {
      id
      name
      type
      port: home_port
    }
  }
}
`;


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {
  ships: Ship[];
  limit = 5;
  currentPage = 1;
  totalPages = 0;
  loading = true;
  querySubscription: Subscription;

  constructor(private mainService: MainService, private apollo: Apollo) {}

  fetchShips() {
    this.loading = true;
    this.querySubscription = this.apollo.watchQuery<any>({
      query: GET_SHIPS_BY_FILTER,
      variables: {
        shipName: this.filters.search || '',
        shipType: this.filters.radio || '',
        shipPorts: this.filters.multi.length > 0 ? this.filters.multi.join('|') : '',
        limit: this.limit,
        offset: this.limit * (this.currentPage - 1)
      }
    }).valueChanges.subscribe(result => {
      this.totalPages = Math.ceil(result.data.shipsResult.result.totalCount / this.limit);
      this.ships = result.data.shipsResult.data;
      this.loading = result.loading;
    });
  }

  get filters() {
    return this.mainService.getFilters();
  }

  ngOnInit() {
    this.fetchShips();
  }
  ngOnDestroy() {
    this.querySubscription.unsubscribe();
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
