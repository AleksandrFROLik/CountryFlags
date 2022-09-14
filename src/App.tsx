import { Route, Routes } from 'react-router-dom';
import { MainHeader } from 'components/MainHeader';
import { Main } from 'components/Main';
import { HomePage } from 'pages/HomePage';
import { Details } from 'pages/Details';
import { NotFound } from 'pages/NotFound';

const App = () => {

  return (
    <>
      <MainHeader/>
      <Main>
        <Routes>
          <Route path="/"
                 element={<HomePage/>}/>
          <Route path="/country/:name" element={<Details/>}/>
          <Route element={<NotFound/>}/>
        </Routes>
      </Main>
    </>
  )
};

export default App;
