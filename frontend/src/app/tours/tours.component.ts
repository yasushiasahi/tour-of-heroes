import { Component, OnInit } from '@angular/core'

import * as moment from 'moment'

import { Tour } from '../types'
import { TourService } from '../tour.service'

@Component({
  selector: 'toh-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss'],
})
export class ToursComponent implements OnInit {
  tours: Tour[] = []

  constructor(private tourService: TourService) {}

  gettourImg(tour: Tour) {
    return tour.plans[Math.floor(Math.random() * this.tours.length)].imgUrl
  }

  getStartToEnd(tour: Tour) {
    const start = tour.plans.reduce((acc, { startAt }, idx) => {
      if (idx === 0) {
        return startAt
      }
      return moment(startAt).isBefore(acc) ? startAt : acc
    }, '')

    const end = tour.plans.reduce((acc, { startAt }, idx) => {
      if (idx === 0) {
        return startAt
      }
      return moment(startAt).isBefore(acc) ? startAt : acc
    }, '')

    return (
      moment(start).format('YY/MM/DD') + '~' + moment(end).format('YY/MM/DD')
    )
  }

  ngOnInit() {
    this.tours = this.tourService.getTours()
    console.log('tours', this.tours)
  }
}
