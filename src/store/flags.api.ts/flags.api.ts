import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { ResponseGetFlagsType } from '../../api/flagsCountriesAPI';

export const flagsApi = createApi({
  reducerPath: 'flags/api', // по этому адресу будут храниться кэшированные данные
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://restcountries.com/v2/' //базовый фдрес
  }),
  endpoints: build => ({ //настройка базовых эндпоитов
    searchFlags: build.query<ResponseGetFlagsType[],any>({ //параметр query необходим для получения данных
      query: () => ({
        url: `all?fields=name,capital,flags,population,region`,
      })
    })
  })
})

export const {useSearchFlagsQuery} = flagsApi