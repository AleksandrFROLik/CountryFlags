import { MainHeader } from 'components/MainHeader';
import { Main } from 'components/Main';
import { Controls } from 'components/Controls';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ALL_COUNTRIES } from 'config';
import { List } from 'components/List';
import { Card } from 'components/Card';

type InfoItemType = {
  title: string,
  description:string
}

type countryInfoType = {
  img:string,
  name:string,
  info: InfoItemType[]
}

const App = () => {

  const [countries, setCountries] = useState( [] )

  useEffect( () => {
    axios.get( ALL_COUNTRIES )
      .then( ( { data } ) => setCountries( data ) )
  } )
  return (
    <>
      <MainHeader/>
      <Main>
        <Controls/>
        <List>
          {
            countries.map( (country:countryInfoType) => {
                const countryInfo = {
                  img: country.flags.png,
                  name: country.name,
                  info: [
                    {
                      title: 'Population',
                      description: country.population.toLocalString()
                    },
                    {
                      title: 'Region',
                      description: country.region
                    },
                    {
                      title: 'Capital',
                      description: country.capital
                    }
                  ]
                }
                return (
                  <Card key={country.name}{...countryInfo}/>
                )
              }
            )
          }
        </List>
      </Main>
    </>
  )
};

export default App;
