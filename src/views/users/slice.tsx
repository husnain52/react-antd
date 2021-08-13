import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface DataState {
  data: any,
  loader: boolean
}

const initialState: DataState = {
  data: null,
  loader: false
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    fetchData: (state, action: PayloadAction<any>) => {
      state.data = action.payload
    },
    loader: (state, action : PayloadAction<any>) => {
      state.loader = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { fetchData, loader } = dataSlice.actions

export default dataSlice.reducer