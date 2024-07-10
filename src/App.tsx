import { FC, useEffect } from 'react'
import axios from 'axios'

import { useAppDispatch, useAppSelector } from './components/hooks/useRedux'
import { AddCard, AddFilterCard } from './store/positions/positions.slice'

import Card from './components/Card/Card'
import Filter from './components/Filter/Filter'
import Header from './components/Header/Header'

import { FilterCardFnc } from './model'
import { IItem } from './model/interface'

import './App.scss'

const App: FC = () => {

  const dispatch = useAppDispatch()
  const cards = useAppSelector((state) => state.position.filterCard)
  const filters = useAppSelector((state) => state.filter.value)

  const ResponseDataFnc = async () => {
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

  useEffect(() => {
    ResponseDataFnc()
  }, [])

  useEffect(() => {
    dispatch(AddFilterCard(FilterCardFnc(cards, filters)))
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
