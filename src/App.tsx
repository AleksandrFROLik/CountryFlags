import { Route, Routes } from 'react-router-dom';
import { MainHeader } from 'components/MainHeader';
import { Main } from 'components/Main';
import { HomePage } from 'pages/HomePage';
import { Details } from 'pages/Details';
import { NotFound } from 'pages/NotFound';
import { useAppSelector } from './hooks/reduxHooks';
import React from 'react';

const App = () => {
  const error = useAppSelector(state => state.reducer.error)

  return (
    <>
      <MainHeader/>
      <Main>
        {error === '' &&
        <Routes>
            <Route path="/"
                   element={<HomePage/>}/>
            <Route path="/country/:name" element={<Details/>}/>
            <Route element={<NotFound/>}/>
        </Routes>
        }
        {error !== '' && <NotFound/>}
      </Main>

    </>
  )
};

export default App;
