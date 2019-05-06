import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import * as moment from 'moment'
import * as _ from 'lodash'

import { Tour } from '../types'
import { TourService } from '../tour.service'

const hourHeight = 35
const dayHeight = hourHeight * 24
const hours = _(_.times(23))
  .map(n => String(n + 1).padStart(2, '0') + ':00')
  .value()
const icons = {
  train: 'train',
}

@Component({
  selector: 'toh-tour-detail',
  templateUrl: './tour-detail.component.html',
  styleUrls: ['./tour-detail.component.scss'],
})
export class TourDetailComponent implements OnInit {
  tour: Tour

  constructor(
    private tourService: TourService,
    private route: ActivatedRoute,
  ) {}

  get days(): string[][] {
    const hoge = _(this.tour.plans)
      .map(({ startAt }) => moment(startAt).format('YY/MM/DD'))
      .sortedUniq()
      .map(val => [val, ...hours])
      .value()
    return hoge
  }

  get plans(): any {
    const ps = _(this.tour.plans)
      .map(p => {
        const s = moment(p.startAt)
        const e = moment(p.endAt)
        const diff = e.diff(s, 'hour')
        const height = String(diff * hourHeight) + 'px'
        const d = moment(p.startAt).format('YY/MM/DD')
        const idx = _.findIndex(this.days, h => _.head(h) === d)
        const dDiff = s.diff(moment(p.startAt).hour(0), 'hour')
        const top =
          String(hourHeight * dDiff + dayHeight * idx + hourHeight / 2) + 'px'
        const icon = icons[p.type]

        return {
          ...p,
          icon,
          styleObj: { height, top },
          classObj: { [p.type]: true },
        }
      })
      .value()
    console.log('plans', ps)
    return ps
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.tour = this.tourService.getTour(Number(id))
  }
}
