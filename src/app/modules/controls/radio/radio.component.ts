import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-controls-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent {
  @Input() name: string;
  @Input() checked: boolean = false;
  @Output() changeEmitter: EventEmitter<boolean> = new EventEmitter();

  changeHandler(e) {
    if (e.target.checked) {
      this.changeEmitter.emit(true);
    }
  }
}
