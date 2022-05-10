import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.article``;
const CarsImage = styled.img``;
const CardBody = styled.div``;
const CardTitle = styled.h3``;
const CardList = styled.ul``;
const CardListItem = styled.li``;

type CardType = {
  img: string,
  name: string,
  info: any,
  handleOnClick: () => void
}

export const Card = ( { img, name, info, handleOnClick }: CardType ) => {
  return (
    <Wrapper onClick={handleOnClick}>
      <CarsImage/>
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map(( el:any )=> {
            <CardListItem key={el.title}>
              <b>{el.title}:</b>{el.discription}
            </CardListItem>
          } )}
        </CardList>
      </CardBody>

    </Wrapper>
  );
};

