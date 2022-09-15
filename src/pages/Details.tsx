import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5'
import { Button } from 'components/Button';
import { DetailItem } from 'components/DetailItem';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { searchByCountryAction } from '../store/actions/searchByCountryAction';


export const Details = React.memo(() => {

  const country = useAppSelector(state => state.reducer.country)
  const navigate = useNavigate()
  const params = useParams<'name'>()
  const dispatch = useAppDispatch()
  const name = params.name

  useEffect(()=>{
    dispatch(searchByCountryAction(name))
  },[dispatch, name])

  const handleOnClick = () => navigate('/')

  return (
    <div>
      <Button onClick={handleOnClick}>
        <IoArrowBack/> Back
      </Button>
      {country && <DetailItem />}
    </div>
  );
});

