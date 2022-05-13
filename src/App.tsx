import { MainHeader } from 'components/MainHeader';
import { Main } from 'components/Main';
import { Controls } from 'components/Controls';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ALL_COUNTRIES } from 'config';
import { List } from 'components/List';
import { Card } from 'components/Card';
import { flagsCountriesAPI, ResponseGetFlagsType } from 'api/flagsCountriesAPI';
import {  Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { Details } from 'pages/Details';
import { NotFound } from 'pages/NotFound';

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


  return (
    <>
      <MainHeader/>
      <Main>
        <Routes>
          <Route  path='*' element={<HomePage/>}/>
          <Route path='/country/:name' element={<Details/>}/>
          <Route element={<NotFound/>}/>
        </Routes>
      </Main>
    </>
  )
};

export default App;
