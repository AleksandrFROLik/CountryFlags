import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { ResponseCountryType } from 'api/flagsCountriesAPI';
import { filterByCode } from 'config';
import { useNavigate } from 'react-router-dom';

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
type DetailItemType = {
  country: ResponseCountryType | null
}

export const DetailItem = ( { country }: DetailItemType ) => {

  const [neighbors, setNeighbors] = useState<string[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    if (country?.borders?.length)
      axios.get<Array<ResponseCountryType>>(filterByCode(country?.borders))
        .then(( data ) => setNeighbors(data.data.map(country => country.name)))
  }, [country?.borders])
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
              d => (<span key={d}>{d}</span>))}
            </ListItem>
            <ListItem>
              <b>Currency</b> {country?.currencies.map(
              c => (<span key={c.code}>{c.name}</span>))}
            </ListItem>
            <ListItem>
              <b>Languages</b> {country?.languages.map(
              l => (<span key={l.name}>{l.name}</span>))}
            </ListItem>
          </List>
        </ListGroup>
        <Meta>
          <b>Border Countries</b>
          {!country?.borders?.length ? (
            <span>There is not border countries</span>
          ) : (
            <TagGroup>
              {neighbors && neighbors.map(neighbor => (<Tag key={neighbor}
                                                            onClick={() => navigate(
                                                              `/country/${neighbor}`)}>{neighbor}</Tag>))}
            </TagGroup>
          )}
        </Meta>
      </div>
    </Wrapper>

  )
}