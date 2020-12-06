import { Component } from '@angular/core';

@Component({
  selector: 'controls-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  inputValue: string = '';
  isEmpty = true;

  onInput(e) {
    this.inputValue = e.target.value;
    this.isEmpty = e.target.value.length > 0 ? false : true;
  }

}
