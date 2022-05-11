import React from 'react';
import styled from 'styled-components';
import { countryInfoType } from 'App';

const Wrapper = styled.article`
  border-radius: var(--radii);
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
`;

const CarsImage = styled.img`
  display: block;
  width: 100%;
  height: 150%;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;
const CardTitle = styled.h3`
  margin: 0;
  font-size: var(--fs-sd);
  font-weight: var(--fw-bold);
`;
const CardBody = styled.div`
  padding: 1rem 1.5rem 2rem;
`;
const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 1.5rem 2rem;
`;
const CardListItem = styled.li`
  font-size: var(--fs-sm);
  line-height: 1.5;
  font-weight: var(--fw-light);

  & > b {
    font-weight: var(--fw-bold);

  }
`;

type CardType = {
  countryInfo: countryInfoType
}

export const Card = ( { countryInfo }: CardType ) => {
  return (
    <Wrapper >
      <CarsImage src={countryInfo.img} alt="flag this country"/>
      <CardBody>
        <CardTitle>{countryInfo.name}</CardTitle>
        <CardList>
          {countryInfo.info.map(info => {
            <CardListItem key={info.title}>
              <b>{info.title}:</b>{info.discription}
            </CardListItem>
          })}
        </CardList>
      </CardBody>

    </Wrapper>
  );
};

