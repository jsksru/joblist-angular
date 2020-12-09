import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { CardComponent } from './card/card.component';
import { CardsListComponent } from './cards-list/cards-list.component';
import { ControlsModule } from '../controls/controls.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FilterComponent,
    CardComponent,
    CardsListComponent,
  ],
  exports: [
    FilterComponent,
    CardComponent,
    CardsListComponent,
  ],
  imports: [
    CommonModule,
    ControlsModule,
    RouterModule,
  ],
})
export class WidgetsModule { }
