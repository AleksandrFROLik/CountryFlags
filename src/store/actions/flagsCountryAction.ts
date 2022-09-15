import { AppDispatch } from '../index';
import { flagCountryAppSlice } from '../slices/flagSlices';
import { ResponseGetFlagsType } from '../../models/models';
import { ALL_COUNTRIES } from '../../config';
import { instance } from '../../api/flagsCountriesAPI';

export const fetchFlagsCountries = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(flagCountryAppSlice.actions.fetching)
      const response = await instance.get<ResponseGetFlagsType[]>(ALL_COUNTRIES)
      dispatch(flagCountryAppSlice.actions.fetchGetFlagsCountry({
        flagsCountry: response.data,
      }))

    } catch (e) {
      dispatch(flagCountryAppSlice.actions.fetchError(e as Error))
    }
  }
}