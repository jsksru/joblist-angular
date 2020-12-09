import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'controls-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent{
  @Input() title: string;
  @Input() value: string;
  @Output() inputEmitter: EventEmitter<string> = new EventEmitter();

  get isEmpty() {
    return this.value.length === 0;
  }

  onInput(e) {
    this.inputEmitter.emit(e.target.value);
  }

}
