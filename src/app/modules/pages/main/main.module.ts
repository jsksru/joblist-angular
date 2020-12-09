import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { WidgetsModule } from '../../widgets/widgets.module';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  }
];



@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    WidgetsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class MainModule { }
