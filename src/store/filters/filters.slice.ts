import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: string[] = []

const filtersSlice = createSlice({
  name: 'filter',
  initialState: {
    value: initialState,
  },
  reducers: {
    AddFilterItem(state, action: PayloadAction<string>) {
      if (state.value.includes(action.payload)) return
      state.value = state.value.concat(action.payload)
    },
    RemoveFilterItem(state, action: PayloadAction<string>) {
      state.value = state.value.filter((filter) => filter !== action.payload)
    },
    DeleteAll(state) {
      state.value = initialState
    },
  },
})

export const { AddFilterItem, RemoveFilterItem, DeleteAll } =
  filtersSlice.actions

export default filtersSlice.reducer
