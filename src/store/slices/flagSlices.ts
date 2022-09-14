import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResponseCountryType, ResponseGetFlagsType } from '../../models/models';

type FlagType = {
  loading: boolean,
  flagsCountries: ResponseGetFlagsType[],
  country: ResponseCountryType | null,
  error: string
}

type FlagsPayload = {
  flagsCountries: ResponseGetFlagsType[],
}

type CountryPayload = {
  country: ResponseCountryType | null
}

const initialState: FlagType = {
  loading: false,
  flagsCountries: [],
  country: null,
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
      state.flagsCountries = action.payload.flagsCountries

      state.error = ''
    },
    fetchSearch(state, action: PayloadAction<CountryPayload>) {
      state.country = action.payload.country
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false
      state.error = action.payload.message
    }
  }
})


export default flagsSlice.reducer