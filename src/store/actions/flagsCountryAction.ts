import { AppDispatch } from '../index';
import { flagsSlice } from '../slices/flagSlices';
import { ResponseGetFlagsType } from '../../models/models';
import { ALL_COUNTRIES } from '../../config';
import { instance } from '../../api/flagsCountriesAPI';

export const fetchFlagsCountries = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(flagsSlice.actions.fetching)
      const response = await instance.get<ResponseGetFlagsType[]>(ALL_COUNTRIES)
      dispatch(flagsSlice.actions.fetchSuccess({
        flagsCountries: response.data,
      }))

    } catch (e) {
      dispatch(flagsSlice.actions.fetchError(e as Error))
    }
  }
}