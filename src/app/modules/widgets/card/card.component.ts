import { Component, Input } from '@angular/core';

@Component({
  selector: 'widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() id: string;
  @Input() name: string;
  @Input() type: string;
  @Input() home_port: string;

  constructor() { }

}
