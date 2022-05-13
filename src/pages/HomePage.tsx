import React, { useEffect, useState } from 'react';
import { flagsCountriesAPI, ResponseGetFlagsType } from 'api/flagsCountriesAPI';
import { Controls } from 'components/Controls';
import { List } from 'components/List';
import { Card } from 'components/Card';


export const HomePage = () => {
  const [countries, setCountries] = useState<ResponseGetFlagsType[]>( [] )

  useEffect( () => {
    flagsCountriesAPI.getFlags()
      .then( ( data ) => setCountries( data.data ) )

  }, [] )
  console.log( countries )


  return (
    <>
      <Controls/>
      <List>
        {countries.map( country => {
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
            return <Card key={country.name} countryInfo={countryInfo}/>
          }
        )
        }
      </List>
    </>
  );
};
