import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SlotPickerPageComponent } from './pages/slot-picker-page/slot-picker-page.component';


const routes: Routes = [
  {
    component: HomePageComponent,
    path: ''
  },
  {
    component: SlotPickerPageComponent,
    path: 'slots'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
