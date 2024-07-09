import { useAppDispatch, useAppSelector } from '../hooks/useRedux'
import { RemoveFilterItem, DeleteAll } from '../../store/filters/filters.slice'

import styles from './Filter.module.scss'

const Filter = () => {
  const filters = useAppSelector((state) => state.filter.value)

  const dispatch = useAppDispatch()

  const BtnAddFnc = (name: string) => {
    dispatch(RemoveFilterItem(name))
  }
  const ClearAllBtn = () => {
    dispatch(DeleteAll())
  }

  return (
    <>
      {filters.length !== 0 && (
        <div className={styles.wrap}>
          <div className={styles.wrap_button}>
            {filters.map((filter: string) => (
              <button key={filter}>
                {filter}
                <span
                  className={styles.close_icon}
                  onClick={() => BtnAddFnc(filter)}
                >
                  <img src='/images/icon-remove.svg' alt='icon-remove' />
                </span>
              </button>
            ))}
          </div>
          <div className={styles.remove__all}>
            <button onClick={ClearAllBtn}>Clear</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Filter
