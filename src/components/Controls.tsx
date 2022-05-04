import { Search } from 'components/Search';
import { useState } from 'react';
import { CustomSelect } from 'components/CustomSelect';
import styled, { StyledComponentBase } from 'styled-components';

const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europa', label: 'Europa' },
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

export const Controls = () => {
  const [search, setSearch] = useState<string>( '' )
  const [region, setRegion] = useState<string>( '' )
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

