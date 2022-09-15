import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ResponseCountryType, ResponseGetFlagsType } from '../../models/models';

type FlagType = {
  loading: boolean,
  flagsCountry: ResponseGetFlagsType[],
  country: ResponseCountryType | null,
  countryBorders: string[],
  error: string
}

type FlagsPayload = {
  flagsCountry: ResponseGetFlagsType[],
}

type CountryPayload = {
  country: ResponseCountryType | null
}

type countryBordersPayload = {
  countryBorders: string[]
}

const initialState: FlagType = {
  loading: false,
  flagsCountry: [],
  country: null,
  countryBorders: [],
  error: ''
}


export const flagCountryAppSlice = createSlice({
  name: 'flagCountryApp',
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true
    },
    fetchGetFlagsCountry(state, action: PayloadAction<FlagsPayload>) {
      state.loading = false
      state.flagsCountry = action.payload.flagsCountry
      state.error = ''
    },
    fetchSearch(state, action: PayloadAction<CountryPayload>) {
      state.country = action.payload.country
    },
    fetchCountryBorders(state, action: PayloadAction<countryBordersPayload>) {
      state.countryBorders = action.payload.countryBorders
    },
    fetchError(state, action: PayloadAction<Error>) {
      state.loading = false
      state.error = action.payload.message
    }
  }
})


export default flagCountryAppSlice.reducer