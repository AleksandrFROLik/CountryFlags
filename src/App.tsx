import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainHeader } from 'components/MainHeader';
import { Main } from 'components/Main';
import { HomePage } from 'pages/HomePage';
import { Details } from 'pages/Details';
import { NotFound } from 'pages/NotFound';
import { ResponseGetFlagsType } from './models/models';


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

  return (
    <>
      <MainHeader/>
      <Main>
        <Routes>
          <Route path="/"
                 element={<HomePage countries={countries} setCountries={setCountries}/>}/>
          <Route path="/country/:name" element={<Details/>}/>
          <Route element={<NotFound/>}/>
        </Routes>
      </Main>
    </>
  )
};

export default App;
