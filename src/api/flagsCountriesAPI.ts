import axios from 'axios';
import { ALL_COUNTRIES, BASE_URL } from '../config';
import { ResponseGetFlagsType } from '../models/models';

export const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
})

export const flagsCountriesAPI = {
  getFlags() {
    return instance.get<ResponseGetFlagsType[]>(ALL_COUNTRIES)
  }
}