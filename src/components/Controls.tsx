import { Search } from 'components/Search';
import React, { useEffect, useState } from 'react';
import { CustomSelect } from 'components/CustomSelect';
import styled from 'styled-components';

const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
]
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

type ControlsType = {
  onSearch: ( search: string, region: RegionType | null ) => void
}

export type RegionType = {
  value: string,
  label: string
}

export const Controls = ( { onSearch }: ControlsType ) => {
  const [search, setSearch] = useState<string>( '' )
  const [region, setRegion] = useState<RegionType | null>( null )

  useEffect( () => {
    onSearch( search, region )
  }, [search, region] )


  // @ts-ignore
  // @ts-ignore
  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch}/>
      <CustomSelect options={options}
                    placeholder="Filter by Region"
                    isClearable
                    isSearchable={false}
                    value={region}
                    onChange={setRegion}
      />
    </Wrapper>
  );
};

