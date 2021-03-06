import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://restcountries.com/v2',
  withCredentials: true,
})

export const flagsCountriesAPI = {
  getFlags() {
    return instance.get<Array<ResponseGetFlagsType>>(
      '/all?fields=name,capital,flags,population,region')
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
    png: string,
  },
  flag: string,
}

export type ResponseCountryType = {
  name: string,
  nativeName: string,
  flag: string,
  capital: string,
  population: number,
  region: string,
  subregion: string,
  topLevelDomain: string[],
  currencies: CurrenciesType[],
  languages: LanguagesType[],
  borders?: string[]
}

type LanguagesType = {
  iso639_1: string,
  iso639_2: string,
  name: string,
  nativeName: string
}

type CurrenciesType = {
  code: string,
  name: string,
  symbol: string
}