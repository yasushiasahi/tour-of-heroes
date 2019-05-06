import { Injectable } from '@angular/core'
import { Tour, Plan } from './types'

import * as _ from 'lodash'

const TOURSMOCK = [
  {
    id: 1,
    name: '京都旅行',
    plans: [
      {
        id: 1,
        name: 'のぞみ23号',
        type: 'train',
        cost: 14000,
        departure: '博多',
        destination: '新大阪',
        startAt: new Date('2019-05-01T08:00:00').toISOString(),
        endAt: new Date('2019-05-01T11:00:00').toISOString(),
        note1: '8',
        note2: '7号車16D',
        note3: '',
        memo: '寝坊注意',
        imgUrl:
          'https://fakeimg.pl/2000x1000/?retina=1&text=予定写真&font=noto',
      },
      {
        id: 2,
        name: '新快速 野洲行',
        type: 'train',
        cost: 600,
        departure: '新大阪',
        destination: '京都',
        startAt: new Date('2019-05-01T12:00:00').toISOString(),
        endAt: new Date('2019-05-01T13:00:00').toISOString(),
        note1: '5',
        note2: '',
        note3: '',
        memo: 'かなり込み合うので早めにホームに並ぶ',
        imgUrl:
          'https://fakeimg.pl/2000x1000/?retina=1&text=予定写真&font=noto',
      },
      {
        id: 5,
        name: '急行 奈良行',
        type: 'train',
        cost: 550,
        departure: '近鉄京都',
        destination: '近鉄奈良',
        startAt: new Date('2019-05-02T12:00:00').toISOString(),
        endAt: new Date('2019-05-02T13:00:00').toISOString(),
        note1: '5',
        note2: '',
        note3: '',
        memo: '鹿さん楽しみだお',
        imgUrl:
          'https://fakeimg.pl/2000x1000/?retina=1&text=予定写真&font=noto',
      },
    ],
  },
  {
    id: 2,
    name: '奈良旅行',
    plans: [
      {
        id: 3,
        name: 'のぞみ23号',
        type: 'train',
        cost: 14000,
        departure: '博多',
        destination: '新大阪',
        startAt: new Date().toISOString(),
        endAt: new Date().toISOString(),
        note1: '8',
        note2: '7号車16D',
        note3: '',
        memo: '寝坊注意',
        imgUrl:
          'https://fakeimg.pl/2000x1000/?retina=1&text=予定写真&font=noto',
      },
      {
        id: 4,
        name: '新快速 野洲行',
        type: 'train',
        cost: 600,
        departure: '新大阪',
        destination: '京都',
        startAt: new Date().toISOString(),
        endAt: new Date().toISOString(),
        note1: '5',
        note2: '',
        note3: '',
        memo: 'かなり込み合うので早めにホームに並ぶ',
        imgUrl:
          'https://fakeimg.pl/2000x1000/?retina=1&text=予定写真&font=noto',
      },
    ],
  },
]

@Injectable({
  providedIn: 'root',
})
export class TourService {
  tours: Tour[] = []
  //constructor() {}
  fetchTours() {
    this.tours = TOURSMOCK
  }

  getTours(): Tour[] {
    if (!this.tours.length) {
      this.fetchTours()
    }
    return this.tours
  }

  getTour(id: number): Tour {
    if (!this.tours.length) {
      this.fetchTours()
    }
    return this.tours.find(tour => tour.id === id)
  }

  getPlan(id: number): Plan {
    if (!this.tours.length) {
      this.fetchTours()
    }
    return _(this.tours)
      .reduce((acc, { plans }) => [...acc, ...plans], [])
      .find(p => p.id === id)
  }
}
