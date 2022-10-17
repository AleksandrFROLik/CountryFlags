import { AppDispatch } from '../index';
import { flagCountryAppSlice } from '../slices/flagSlices';
import { instance } from '../../api/flagsCountriesAPI';
import { ResponseCountryType } from '../../models/models';
import { searchByCountry } from '../../config';


export const searchByCountryAction = (name: string | undefined) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(flagCountryAppSlice.actions.fetching)
      const response = await instance.get<ResponseCountryType[]>(searchByCountry + name)
      dispatch(flagCountryAppSlice.actions.fetchSearch({
        country: response.data[0],
      }))

    } catch (e) {
      dispatch(flagCountryAppSlice.actions.fetchError(e as Error))
    }
  }
}