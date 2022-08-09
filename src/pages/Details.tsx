import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { IoArrowBack } from 'react-icons/io5'
import { searchByCountry } from 'config';
import { Button } from 'components/Button';
import { DetailItem } from 'components/DetailItem';
import { ResponseCountryType } from 'api/flagsCountriesAPI';

export const Details = () => {
  const [country, setCountry] = useState<ResponseCountryType | null>(null)

  const navigate = useNavigate()
  const params = useParams<'name'>()
  const name = params.name

  useEffect(() => {
    console.log('Details')
    axios.get(searchByCountry(name))
      .then(( data ) => {
        setCountry(data.data[0])
        console.log(data.data)
      })

  }, [name])

  const handleOnClick = () => {
    navigate('/')
  };

  return (
    <div>
      <Button onClick={handleOnClick}>
        <IoArrowBack/> Back
      </Button>
      {country && <DetailItem country={country}/>}
    </div>
  );
};

