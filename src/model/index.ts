import { TypeFilterCardFnc } from './interface'

export const FilterCardFnc: TypeFilterCardFnc = (cards, filters) => {
  let counter = 0
  return cards.filter((card) => {
    card.filter.map((filterCard) => {
      if (filters.includes(filterCard)) return counter++
    })
    if (counter === filters.length) {
      counter = 0
      return card
    }
    counter = 0
  })
}
