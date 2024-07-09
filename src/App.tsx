import { FC, useEffect } from 'react'
import axios from 'axios'

import { useAppDispatch, useAppSelector } from './components/hooks/useRedux'
import { AddCard, AddFilterCard } from './store/positions/positions.slice'

import Header from './components/Header/Header'
import { IItem } from './model/interface'

import './App.scss'
import Card from './components/Card/Card'
import Filter from './components/Filter/Filter'

const App: FC = () => {
  useEffect(() => {
    FetchFnc()
  }, [])

  const dispatch = useAppDispatch()

  const FetchFnc = async () => {
    const { data } = await axios.get('http://localhost:3000/0')
    const value = data.data.map((item: IItem) => {
      return {
        ...item,
        filter: [...item.languages, item.level, item.role, ...item.tools],
      }
    })
    dispatch(AddCard(value))
    dispatch(AddFilterCard(value))
  }

  const cards = useAppSelector((state) => state.position.filterCard)
  const filters = useAppSelector((state) => state.filter.value)

  useEffect(() => {
    let counter = 0
    const item = cards.filter((card) => {
      card.filter.map((filterCard) => {
        if (filters.includes(filterCard)) return counter++
      })
      if (counter === filters.length) {
        counter = 0
        return card
      }
      counter = 0
    })
    dispatch(AddFilterCard(item))
  }, [filters])

  return (
    <>
      <Header />
      <main className='main'>
        <div className='container'>
          <Filter />
        </div>
        <div className='container'>
          {cards.map((card: IItem, index: number) => (
            <Card card={card} key={index} />
          ))}
        </div>
      </main>
    </>
  )
}

export default App
