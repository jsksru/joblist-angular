import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { pluck, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

interface ShipResult {
  name: string;
  type: string;
  home_port: string;
  weight_kg: number;
  year_built: number;
  missions: Array<{name: string}>;
}
interface ShipMapped {
  name: string;
  type: string;
  home_port: string;
  weight_kg: number;
  year_built: number;
  missions: string[];
}

const GET_SHIP_BY_ID = gql`
query GetShipById ($shipID: ID!) {
  ship(id: $shipID) {
    name
    type
    home_port
    weight_kg
    year_built
    missions{
    name
    }
  }
}
`;



@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit, OnDestroy {
  info: any;
  loading = true;
  paramsSubscription: Subscription;
  querySubscription: Subscription;

  constructor(private route: ActivatedRoute, private apollo: Apollo) { }

  ngOnInit(): void {
    this.paramsSubscription = this.route.params.subscribe(params => {
      const id = params.id;
      if (id && id.length > 0) {
        this.querySubscription = this.apollo.watchQuery<any>({
          query: GET_SHIP_BY_ID,
          variables: {
            shipID: id,
          }
        }).valueChanges.pipe(
          pluck('data', 'ship'),
          map((ship: ShipResult) => {
            return {
              ...ship,
              missions: ship.missions.map(i => i.name)
            };
          })
        ).subscribe((result: ShipMapped) => {
          this.info = result;
          this.loading = false;
        });
      }
    });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
    this.paramsSubscription.unsubscribe();
  }

}
