import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResponseGetFlagsType } from '../../api/flagsCountriesAPI';

type FlagType = {
  loading: boolean
  flags: ResponseGetFlagsType []
  error: string
}

const initialState: FlagType = {
  loading: false,
  flags: [],
  error: ''
}


export const flagsSlice = createSlice({
  name: 'flags',
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true
    },
    fetchSuccess(state, action:PayloadAction) {
      state.loading = false


    },
    fetchError(state, action:PayloadAction<Error>) {
      state.loading = false
      state.error = action.payload.message
    }
  }
})

export default flagsSlice.reducer