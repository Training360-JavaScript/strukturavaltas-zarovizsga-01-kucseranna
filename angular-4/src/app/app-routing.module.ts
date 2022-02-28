import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarEditorComponent } from './page/car-editor/car-editor.component';
import { CarComponent } from './page/car/car.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'car',
    component: CarComponent,
  },
  {
    path: 'car/edit/44',
    component: CarEditorComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
