import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MultiSelectItems } from '../../../types/controls/multi-select.types';

@Component({
  selector: 'controls-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent {
  @Input() items: MultiSelectItems;
  @Output() selectEmitter: EventEmitter<string[]> = new EventEmitter();

  inputValue = '';
  isEmpty = true;
  isOpen = false;

  filteredItems: string[] = [];

  onInput(e) {
    this.inputValue = e.target.value;
    this.isEmpty = e.target.value.length > 0 ? false : true;
  }

  filterItems(value: string, status: boolean) {
    if (status) {
      this.filteredItems.push(value);
    } else {
      this.filteredItems = this.filteredItems.filter(i => i !== value);
    }
    this.selectEmitter.emit(this.filteredItems);
  }

  toggleHandler() {
    this.isOpen = !this.isOpen;
  }

}
