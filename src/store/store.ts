import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { PositionReducer } from './positions/positions.slice'
import FilterReducer from './filters/filters.slice'

const rootReducer = combineReducers({
  position: PositionReducer,
  filter: FilterReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch