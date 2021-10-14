import { Header, Footer, Nav } from 'components';
import { useState } from 'react';
import styled, { keyframes } from 'styled-components/macro';

export const App = () => {
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <Nav menuActive={menuActive} toggleMenu={toggleMenu} />
      <Wrapper menuActive={menuActive}>
        <Header />
        <Footer />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  > * {
        animation-name: ${({ menuActive }) =>
          menuActive ? backdropBlur : backdropClear};
        animation-duration: 0.2s;
        animation-timing-function: ease-in;
        animation-fill-mode: forwards;
`;

const backdropBlur = keyframes`
    0% {
      filter: blur(0px);
    }
    100% {
      filter: blur(4px);
    }
`;

const backdropClear = keyframes`
    0% {
      filter: blur(4px);
    }
    100% {
      filter: blur(0px);
    }
`;
