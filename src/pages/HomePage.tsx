import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { flagsCountriesAPI } from 'api/flagsCountriesAPI';
import { Controls, RegionType } from 'components/Controls';
import { List } from 'components/List';
import { Card } from 'components/Card';
import { ResponseGetFlagsType } from '../models/models';

type HomePageType = {
  countries: ResponseGetFlagsType[]
  setCountries: (countries: ResponseGetFlagsType[]) => void
}

export const HomePage = React.memo(({countries, setCountries}: HomePageType) => {

  const [filteredCountries, setFilteredCountries] = useState<ResponseGetFlagsType[]>(countries)
  const navigate = useNavigate()

  useEffect(() => {
    if (!countries.length) {
      flagsCountriesAPI.getFlags()
                       .then((data) => {
                         setCountries(data.data)
                         setFilteredCountries(data.data)
                       })
    }
  }, [countries.length])


  const handleSearch = useCallback((search: string, region: RegionType | null) => {
    let data = [...countries];

    if (region) data = data.filter(c => c.region.includes(region.value))
    if (search) data = data.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))

    setFilteredCountries(data)
  },[setFilteredCountries, countries])

  const navigateToDetails = (name: string) => navigate(`/country/${name}`)

  return (
    <>
      <Controls onSearch={handleSearch}/>
      <List>
        {filteredCountries.map(country => {
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
            return <Card key={country.name}
                         countryInfo={countryInfo}
                         handleOnClick={navigateToDetails}/>
          }
        )
        }
      </List>
    </>
  );
});
