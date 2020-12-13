import { Component, Input } from '@angular/core';
import { Ship } from '../../../types/ship.types';

@Component({
  selector: 'app-widget-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent {
  @Input() items: Ship[];
}
