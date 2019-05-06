import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ToursComponent } from './tours/tours.component'
import { TourDetailComponent } from './tour-detail/tour-detail.component'
import { PlanDetailComponent } from './plan-detail/plan-detail.component'

const routes: Routes = [
  { path: 'tours', component: ToursComponent },
  { path: 'tours/:id', component: TourDetailComponent },
  { path: 'plans/:id', component: PlanDetailComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
