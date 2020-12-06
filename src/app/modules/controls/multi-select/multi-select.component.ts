import { Component } from '@angular/core';

@Component({
  selector: 'controls-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent {

  inputValue: string = '';
  isEmpty = true;

  onInput(e) {
    this.inputValue = e.target.value;
    this.isEmpty = e.target.value.length > 0 ? false : true;
  }

}
