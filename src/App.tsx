import { MainHeader } from 'components/MainHeader';
import { Main } from 'components/Main';
import { Controls } from 'components/Controls';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ALL_COUNTRIES } from 'config';
import { List } from 'components/List';
import { Card } from 'components/Card';
import { flagsCountriesAPI, ResponseGetFlagsType } from 'api/flagsCountriesAPI';

type InfoItemType = {
  title: string,
  description:string
}

export type countryInfoType = {
  img:string,
  name:string,
  info: InfoItemType[]
}

const App = () => {

  const [countries, setCountries] = useState<ResponseGetFlagsType[]>( [] )
  console.log(countries)
  useEffect( () => {
    // axios.get( ALL_COUNTRIES )
    //   .then( ( { data } ) => setCountries( data ) )
    flagsCountriesAPI.getFlags()
      .then((data)=>setCountries(data))
  },[countries] )

  return (
    <>
      <MainHeader/>
      <Main>
        <Controls/>
        <List>
          {
            countries.map( country => {
                const countryInfo = {
                  img: country.flags.png,
                  name: country.name,
                  info: [
                    {
                      title: 'Population',
                      description: country.population.toLocaleString()
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
                  <Card key={country.name} countryInfo={countryInfo} />
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
