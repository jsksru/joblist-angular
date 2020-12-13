import { Component, Input } from '@angular/core';
import { Ship } from '../../pages/main/main.types';

@Component({
  selector: 'widget-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent {
  @Input() items: Ship[];
}
