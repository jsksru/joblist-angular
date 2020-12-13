import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-controls-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {
  @Input() current: number;
  @Input() max: number;
  @Output() changePage: EventEmitter<number> = new EventEmitter();

  handlePrev() {
    if (this.current > 1) {
      this.changePage.emit(this.current - 1);
    }
  }

  handleNext() {
    if (this.current < this.max) {
      this.changePage.emit(this.current + 1);
    }
  }
}
