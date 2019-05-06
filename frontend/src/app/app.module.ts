import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatDividerModule,
  MatExpansionModule,
  MatIconModule,
} from '@angular/material'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ToursComponent } from './tours/tours.component'
import { TourDetailComponent } from './tour-detail/tour-detail.component'
import { PlanDetailComponent } from './plan-detail/plan-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    ToursComponent,
    TourDetailComponent,
    PlanDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
