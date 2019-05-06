interface Tour {
  id: number
  name: string
  plans: Plan[]
}

interface Plan {
  id: number
  name: string
  type: string
  cost: number
  departure: string
  destination: string
  startAt: string
  endAt: string
  note1: string
  note2: string
  note3: string
  memo: string
  imgUrl: string
}

export { Tour, Plan }
