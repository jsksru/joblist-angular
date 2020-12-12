import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import {from, Observable} from 'rxjs';
import { pluck, map } from 'rxjs/operators';
import { FilterType } from '../filter/types';

type Ship = {
  id: string;
  name: string;
  type: string;
  home_port: string;
};

@Component({
  selector: 'widget-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnChanges {
  @Input() filters: FilterType;
  ships: any[];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) { }

  fetchShips() {
    this.apollo.watchQuery({
      query: gql`
      {
        shipsResult(limit: 5, offset: 0, find: {type: "${this.filters.radio || ''}"}) {
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
      }
      `
    }).valueChanges
      .pipe(pluck('data', 'shipsResult', 'data'))
      .pipe(
        map((ships: Ship[]) => {
          if (this.filters.radio) {
            return ships.filter(i => i.type === this.filters.radio);
          }
          return ships;
        })
      )
      .subscribe((result: any) => {
        this.ships = result;
        this.loading = result.loading;
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.fetchShips();
  }
}
