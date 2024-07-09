import { FC } from 'react'
import clsx from 'clsx'

import { useAppDispatch } from '../hooks/useRedux'
import { AddFilterItem } from '../../store/filters/filters.slice'

import { ICard } from '../../model/interface'

import styles from './Card.module.scss'

const Card: FC<ICard> = ({ card }) => {
  const {
    new: newBool,
    logo,
    featured,
    postedAt,
    contract,
    location,
    company,
    position,
    filter
  } = card

  const dispatch = useAppDispatch()

  const BtnAddFnc = (name: string) => {
    dispatch(AddFilterItem(name))
  }

  return (
    <>
      <div className={clsx(styles.wrap, featured && styles.wrap__active)}>
        <div className={styles.img}>
          <img src={logo} alt={company} />
        </div>
        <div className={styles.content}>
          <div className={styles.company}>
            <p className={styles.name}>{company}</p>
            {newBool && <p className={styles.new}>NEW!</p>}
            {featured && <p className={styles.featured}>FEATURED</p>}
          </div>
          <div className={styles.position}>{position}</div>
          <div className={styles.time}>
            <p>{postedAt}</p>
            <p>{contract}</p>
            <p>{location}</p>
          </div>
        </div>
        <div className={styles.wrap_button}>
          {filter.map((filter) => (
            <button key={filter} onClick={() => BtnAddFnc(filter)}>
              {filter}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default Card
