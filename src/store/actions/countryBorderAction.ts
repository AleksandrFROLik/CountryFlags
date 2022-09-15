import { AppDispatch } from '../index';
import { flagCountryAppSlice } from '../slices/flagSlices';
import { instance } from '../../api/flagsCountriesAPI';
import { ResponseCountryType } from '../../models/models';
import { filterByCode } from '../../config';

export const filterByCodeAction = (codes: string[] | undefined) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(flagCountryAppSlice.actions.fetching)
      const response = await instance.get<ResponseCountryType[]>(filterByCode + codes?.join(','))
      dispatch(flagCountryAppSlice.actions.fetchCountryBorders({
        countryBorders: response.data.map(country => country.name)
      }))

    } catch (e) {
      dispatch(flagCountryAppSlice.actions.fetchError(e as Error))
    }
  }
}