import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  name = '';

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.name = params['id'];
    });
  }

}
