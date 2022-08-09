import React from 'react';
import styled from 'styled-components';
import { countryInfoType } from 'App';

const Wrapper = styled.article`
  border-radius: var(--radii);
  background-color: car(--colors-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;

const CardBody = styled.div`
  padding: 1rem 1.5rem 2rem;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`;

const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1rem 0 0;
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
  handleOnClick: (name: string) => void
}

export const Card = ({countryInfo, handleOnClick}: CardType) => {

  return (
    <Wrapper onClick={() => handleOnClick(countryInfo.name)}>
      <CardImage src={countryInfo.img} alt={countryInfo.name}/>
      <CardBody>
        <CardTitle>{countryInfo.name}</CardTitle>
        <CardList>
          {countryInfo.info.map(info => (
            <CardListItem key={info.title}>
              <b>{info.title}:</b>{info.description}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  );
};

