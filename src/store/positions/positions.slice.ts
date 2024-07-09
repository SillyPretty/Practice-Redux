import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IItem } from '../../model/interface'

const initialState: IItem[] = []

const positionSlice = createSlice({
  name: 'position',
  initialState: {
    card: initialState,
  },
  reducers: {
    AddItem(state, action: PayloadAction<IItem[]>) {
      state.card = action.payload
    },
  },
})

export const { AddItem } = positionSlice.actions

export const PositionReducer = positionSlice.reducer
