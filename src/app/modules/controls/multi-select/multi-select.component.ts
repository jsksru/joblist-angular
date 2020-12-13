import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MultiSelectItems } from '../../../types/controls/multi-select.types';



@Component({
  selector: 'app-controls-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit{
  @Input() items: MultiSelectItems;
  @Input() title: string;
  @Input() values: string[];
  @Output() selectEmitter: EventEmitter<string[]> = new EventEmitter();

  inputValue = '';
  isEmpty = true;
  isOpen = false;

  filteredItems: string[] = [];

  ngOnInit() {
    this.filteredItems = [...this.values];
    this.printTotal();
  }

  isChecked(value: string): boolean {
    return this.values.some(i => i === value);
  }

  printTotal() {
    if (this.filteredItems.length > 0) {
      this.isEmpty = false;
      this.inputValue = 'Выбраны ' + this.filteredItems.length;
    } else {
      this.isEmpty = true;
      this.inputValue = '';
    }
  }

  filterItems(value: string, status: boolean) {
    if (status) {
      this.filteredItems.push(value);
    } else {
      this.filteredItems = this.filteredItems.filter(i => i !== value);
    }
    this.printTotal();
    this.selectEmitter.emit(this.filteredItems);
  }

  toggleHandler() {
    this.isOpen = !this.isOpen;
  }

}
