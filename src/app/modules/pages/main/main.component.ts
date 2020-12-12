import { Component } from '@angular/core';
import { MainService } from  './main.service';
import { FilterType } from '../../widgets/filter/types';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor(private mainService: MainService) {}

  get filters() {
    return this.mainService.getFilters();
  }
  setFilters(filters: FilterType) {
    this.mainService.setFilters(filters);
  }

}
