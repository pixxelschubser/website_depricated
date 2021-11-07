import { Header, Main, Footer, Nav } from 'components';
import { useState } from 'react';
import styled, { keyframes } from 'styled-components/macro';

export const App = () => {
  const [menuActive, setMenuActive] = useState('');

  const toggleMenu = () => {
    if (menuActive === '') {
      setMenuActive(true);
    } else {
      setMenuActive(!menuActive);
    }
  };

  const toggleScroll = () => {
    if (!menuActive) {
      document.body.style.overflow = 'scroll';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <Scrollhandler onWheel={toggleScroll}>
      <Nav menuActive={menuActive} toggleMenu={toggleMenu} />
      <Wrapper menuActive={menuActive}>
        <Header />
        <Main />
        <Footer />
      </Wrapper>
    </Scrollhandler>
  );
};

const Scrollhandler = styled.div``;

const Wrapper = styled.div`
  height: 100vh;

  > * {
    animation-name: ${({ menuActive }) =>
      menuActive ? backdropBlur : menuActive === '' ? '' : backdropClear};
    animation-duration: 0.7s;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
  }
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
