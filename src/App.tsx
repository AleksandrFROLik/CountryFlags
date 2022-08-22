import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ResponseGetFlagsType } from 'api/flagsCountriesAPI';
import { MainHeader } from 'components/MainHeader';
import { Main } from 'components/Main';
import { HomePage } from 'pages/HomePage';
import { Details } from 'pages/Details';
import { NotFound } from 'pages/NotFound';
import { useSearchFlagsQuery } from './store/flags.api.ts/flags.api';

type InfoItemType = {
  title: string,
  description: string
}

export type countryInfoType = {
  img: string,
  name: string,
  info: InfoItemType[]
}

const App = () => {
  const [countries, setCountries] = useState<ResponseGetFlagsType[] >([])

  const {isLoading, isError, data} = useSearchFlagsQuery([])
  return (
    <>
      <MainHeader/>
      <Main>
        <Routes>
          <Route path="/"
                 element={<HomePage countries={data ? data : []} setCountries={setCountries}/>}/>
          <Route path="/country/:name" element={<Details/>}/>
          <Route element={<NotFound/>}/>
        </Routes>
      </Main>
    </>
  )
};

export default App;
