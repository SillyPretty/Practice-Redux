import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IItem } from '../../model/interface'

const initialState: IItem[] = []

const positionSlice = createSlice({
  name: 'position',
  initialState: {
    card: initialState,
    filterCard: initialState,
  },
  reducers: {
    AddCard(state, action: PayloadAction<IItem[]>) {
      state.card = action.payload
    },
    AddFilterCard(state, action: PayloadAction<IItem[]>) {
      state.filterCard = action.payload
    },
  },
})

export const { AddCard, AddFilterCard } = positionSlice.actions

export const PositionReducer = positionSlice.reducer
