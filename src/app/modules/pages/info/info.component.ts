import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { pluck, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

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

  constructor(private route: ActivatedRoute, private apollo: Apollo, private router: Router) { }

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
        ).subscribe(result => {
          if (result && result.name && result.name.length > 0) {
            this.info = {
              ...result,
              missions: result.missions.map(i => i.name),
            };
            this.loading = false;
          } else {
            this.router.navigate(['../404'], { relativeTo: this.route.parent });
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
    this.paramsSubscription.unsubscribe();
  }

}
