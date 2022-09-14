import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { fetchFlagsCountries } from '../store/actions/flagsCountryAction';
import { List } from 'components/List';
import { Card } from 'components/Card';
import { Controls, RegionType } from 'components/Controls';
import { ResponseGetFlagsType } from '../models/models';


export const HomePage = React.memo(() => {

  const countries = useAppSelector(state => state.reducer.flagsCountries)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [filteredCountries, setFilteredCountries] = useState<ResponseGetFlagsType[]>(countries)

  useEffect(() => {
    if (!countries.length) {
      dispatch(fetchFlagsCountries())
    }
  }, [dispatch, countries])


  const handleSearch = useCallback((search: string, region: RegionType | null) => {
    let data = [...countries];

    if (region) data = data.filter(c => c.region.includes(region.value))
    if (search) data = data.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))

    setFilteredCountries(data)
  }, [setFilteredCountries, countries])

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
