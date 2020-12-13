import { Injectable } from '@angular/core';
import { FilterType } from '../../widgets/filter/types';
import { Apollo, gql } from 'apollo-angular';
import { pluck, map } from 'rxjs/operators';
import { ShipResult } from './main.types';

const QUERY = gql`
{
  ships {
    id
    name
    type
    home_port
  }
}
`;



@Injectable({
  providedIn: 'root'
})
export class MainService {
  private filters: FilterType = {
    search: '',
    multi: [],
    radio: null
  };

  constructor(private apollo: Apollo) {}

  loadShips() {
    return this.apollo.query({ query: QUERY })
      .pipe(pluck('data', 'ships'))
      .pipe(map((ships: ShipResult[]) => ships.map(i => ({
        id: i.id,
        name: i.name,
        type: i.type,
        port: i.home_port
      })))).toPromise();
  }

  setFilters(filters: FilterType) {
    this.filters = filters;
  }
  getFilters() {
    return this.filters;
  }
}
