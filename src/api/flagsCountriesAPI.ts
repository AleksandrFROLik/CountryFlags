import axios, { AxiosResponse } from 'axios';

export const instance = axios.create( {
  baseURL: 'https://restcountries.com/v2',
  withCredentials: true,
} )

export const flagsCountriesAPI = {
  getFlags() {
    return instance.get<AxiosResponse<AxiosResponse,ResponseGetFlagsType[]>,ResponseGetFlagsType[]>( '/all?fields=name,capital,flags,population,region' )
  }
}


export type ResponseGetFlagsType = {
  name: string,
  capital: string,
  subregion: string,
  region: string,
  population: number,
  area: number,
  flags: {
    svg: string,
    png: string
  },
  flag: string,
}