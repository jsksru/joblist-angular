import { Component, Input } from '@angular/core';
import { RadioListItems } from '../../../types/controls/radio-list.types';

@Component({
  selector: 'controls-radio-list',
  templateUrl: './radio-list.component.html',
  styleUrls: ['./radio-list.component.scss']
})
export class RadioListComponent {
  @Input() title: string;
  @Input() all: string = 'Все';
  @Input() name: string;
  @Input() items: RadioListItems;
  @Input() value: string | null;

  handler(value) {
    console.log(value);
  }

}
