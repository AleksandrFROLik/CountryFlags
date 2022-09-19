import React from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { filterByCodeAction } from '../store/actions/countryBorderAction';

const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;
  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;

const ItemImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ItemTitle = styled.h1`
  margin: 0;
  font-weight: var(--fw-normal);
`;

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  line-height: 1.8;

  & > b {
    font-weight: var(--fw-bold);
  }
`;

const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: flex-start;

  & > b {
    font-weight: var(--fw-bold);
  }

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`;

const TagGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 1.5;
  cursor: pointer;
`;

export const DetailItem = React.memo(() => {

  const country = useAppSelector(state => state.reducer.country)
  const countryBorders = useAppSelector(state => state.reducer.countryBorders)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (country?.borders?.length) {
      dispatch(filterByCodeAction(country?.borders))
    }
  }, [dispatch, country?.borders])

  return (

    <Wrapper>
      <ItemImage src={country?.flag}/>
      <div>
        <ItemTitle>{country?.name}</ItemTitle>
        <ListGroup>
          <List>
            <ListItem>
              <b>Native Name:</b> {country?.name}
            </ListItem>
            <ListItem>
              <b>Population:</b> {country?.population}
            </ListItem>
            <ListItem>
              <b>Region:</b> {country?.region}
            </ListItem>
            <ListItem>
              <b>SubRegion:</b> {country?.subregion}
            </ListItem>
            <ListItem>
              <b>Capital:</b> {country?.capital}
            </ListItem>
          </List>
          <List>
            <ListItem>
              <b>TopLevel Domain</b> {country?.topLevelDomain.map(
              domain => (<span key={domain}>{domain}</span>))}
            </ListItem>
            <ListItem>
              <b>Currency</b> {country?.currencies.map(
              currency => (<span key={currency.code}>{currency.name}</span>))}
            </ListItem>
            <ListItem>
              <b>Languages</b> {country?.languages.map(
              language => (<span key={language.name}>{language.name}</span>))}
            </ListItem>
          </List>
        </ListGroup>
        <Meta>
          <b>Border Countries</b>
          {!country?.borders?.length ? (
            <span>There is not border countries</span>
          ) : (
            <TagGroup>
              {countryBorders && countryBorders.map(countryBorder => (
                <Tag key={countryBorder}
                     onClick={() => navigate(`/country/${countryBorder}`)}>
                  {countryBorder}
                </Tag>))}
            </TagGroup>
          )}
        </Meta>
      </div>
    </Wrapper>
  )
})