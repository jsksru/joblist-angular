import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo, gql } from 'apollo-angular';
import { pluck, map } from 'rxjs/operators';

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



@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private apollo: Apollo) { }

  info: any;
  loading = true;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];

      this.apollo.watchQuery({
        query: gql`
          {
            ship(id: "${id}") {
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
        `
      }).valueChanges.pipe(
        pluck('data', 'ship'),
        map((ship: ShipResult) => {
          return {
            ...ship,
            missions: ship.missions.map(i => i.name)
          }
        })
      ).subscribe((result: ShipMapped) => {
        this.info = result;
        this.loading = false;
      });

    });
  }

}
