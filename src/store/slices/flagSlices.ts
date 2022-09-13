import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResponseCountryType, ResponseGetFlagsType } from '../../models/models';

type FlagType = {
  loading: boolean,
  flagsCountries: ResponseGetFlagsType[],
  country: ResponseCountryType[],
  error: string
}

type FlagsPayload = {
  flagsCountries: ResponseGetFlagsType[]
}

const initialState: FlagType = {
  loading: false,
  flagsCountries: [],
  country: [],
  error: ''
}


export const flagsSlice = createSlice({
  name: 'flags',
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true
    },
    fetchSuccess(state, action: PayloadAction<FlagsPayload>) {
      state.loading = false
      state.error = ''
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false
      state.error = action.payload.message
    }
  }
})

export const {} = flagsSlice.actions
export default flagsSlice.reducer