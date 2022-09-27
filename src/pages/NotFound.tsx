import { useAppSelector } from '../hooks/reduxHooks';
import styled from 'styled-components';

const ErrorTitle = styled.h1`
  margin: 0;
  font-size: var(--fs-sd);
  font-weight: var(--fw-bold);
  text-align: center;
  color: red;
`;

export const NotFound = () => {
  const error = useAppSelector(state => state.reducer.error)
  return (
    <div>
      <ErrorTitle>{error}</ErrorTitle>
    </div>
  );
};

