import { AppDispatch } from '../index';
import { flagsSlice } from '../slices/flagSlices';
import { instance } from '../../api/flagsCountriesAPI';
import { ResponseCountryType} from '../../models/models';
import {  BASE_URL } from '../../config';


export const searchByCountryAction = (name: string | undefined) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(flagsSlice.actions.fetching)
      const response = await instance.get<ResponseCountryType[]>(BASE_URL + 'name/' + name)
      dispatch(flagsSlice.actions.fetchSearch({
        country: response.data[0],
      }))

    } catch (e) {
      dispatch(flagsSlice.actions.fetchError(e as Error))
    }
  }
}