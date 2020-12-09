import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./modules/pages/main/main.module').then(m => m.MainModule),
  },
  {
    path: 'info',
    loadChildren: () => import('./modules/pages/info/info.module').then(m => m.InfoModule),
  },
  // { path: '**', component: PageNotFoundComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
