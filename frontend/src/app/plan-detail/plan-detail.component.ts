import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import * as moment from 'moment'
import * as _ from 'lodash'

import { Plan } from '../types'
import { TourService } from '../tour.service'

@Component({
  selector: 'toh-plan-detail',
  templateUrl: './plan-detail.component.html',
  styleUrls: ['./plan-detail.component.scss'],
})
export class PlanDetailComponent implements OnInit {
  plan: Plan

  constructor(
    private tourService: TourService,
    private route: ActivatedRoute,
  ) {}

  get styleObj(): any {
    return {
      backgroundImage: `url(${this.plan.imgUrl})`,
    }
  }

  get time(): any {
    let t: string
    const s = moment(this.plan.startAt)
    const e = moment(this.plan.endAt)
    if (s.isSame(e, 'day')) {
      const d = s.format('MM月DD日(ddd)')
      const st = s.format('H:mm')
      const et = e.format('H:mm')
      t = `${d} ${st} ~ ${et}`
    } else {
      const st = s.format('MM月DD日(ddd) H:mm')
      const et = e.format('MM月DD日(ddd) H:mm')
      t = `${st} ~ ${et}`
    }
    return t
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.plan = this.tourService.getPlan(Number(id))
  }
}
