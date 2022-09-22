import styled from 'styled-components';
import { Container } from 'components/Container';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

`;

const Title = styled(Link).attrs({
  to: '/',
})`
  color: var(--color-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
  color: var(--color-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  font-weight: var(--fw-bold);
  text-transform: capitalize;
`;

export const MainHeader = () => {

  const [theme, setTheme] = useState('dark');
  const navigate = useNavigate();
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme]);

  const backToMain = () => {
    navigate('/')
  }

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title onClick={backToMain}>Where is the world?</Title>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === 'light' && <IoMoonOutline/>}
            {theme === 'dark' && <IoMoon size="14px"/>}
            <span style={{marginLeft: '0.75rem'}}>{theme} Theme</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};

