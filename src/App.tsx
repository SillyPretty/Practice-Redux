import { FC, useEffect, useState } from 'react'
import axios from 'axios'

import { useAppDispatch, useAppSelector } from './components/hooks/useRedux'
import { AddItem } from './store/positions/positions.slice'

import Header from './components/Header/Header'
import { IItem } from './model/interface'

import './App.scss'
import Card from './components/Card/Card'
import Filter from './components/Filter/Filter'

const App: FC = () => {
  useEffect(() => {
    FetchFnc()
  }, [])

  const [newCard, setNewCard] = useState<IItem[]>([])
  const dispatch = useAppDispatch()

  const FetchFnc = async () => {
    const { data } = await axios.get('http://localhost:3000/0')
    const value = data.data.map((item: IItem) => {
      return {
        ...item,
        filter: [...item.languages, item.level, item.role, ...item.tools],
      }
    })
    dispatch(AddItem(value))
    setNewCard(value)
  }

  const cards = useAppSelector((state) => state.position.card)

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
    setNewCard(item)
  }, [filters])

  return (
    <>
      <Header />
      <main className='main'>
        <div className='container'>
          <Filter />
        </div>
        <div className='container'>
          {newCard.map((card: IItem, index: number) => (
            <Card card={card} key={index} />
          ))}
        </div>
      </main>
    </>
  )
}

export default App
