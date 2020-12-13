import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-controls-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckBoxComponent {
  @Input() checked: boolean;
  @Output() changeEmitter: EventEmitter<boolean> = new EventEmitter();

  changeHandler(e) {
    this.changeEmitter.emit(e.target.checked);
  }
}
