import styled, { keyframes } from 'styled-components/macro';

export const Nav = ({ menuActive, toggleMenu }) => {
  return (
    <Menu onClick={toggleMenu} menuActive={menuActive}>
      <SwipeHint>{menuActive ? 'close' : 'menu'}</SwipeHint>
    </Menu>
  );
};

const Menu = styled.nav`
  width: 0%;
  height: 100vh;

  position: fixed;
  animation-name: ${({ menuActive }) =>
    menuActive ? openMenu : menuActive === '' ? '' : closeMenu};
  z-index: 3;

  background: rgba(0, 0, 0, 0.8);
  border-right: 20px solid rgba(220, 220, 220, 1);

  animation-duration: 0.2s;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
`;

const SwipeHint = styled.p`
  color: rgba(15, 15, 15, 1);
  font-size: 0.6rem;
  font-weight: 400;
  letter-spacing: 0.03rem;

  position: absolute;
  right: -25px;
  top: 50%;
  transform: translateY(-25%) rotate(-90deg);
`;

const openMenu = keyframes`
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
`;

const closeMenu = keyframes`
    0% {
      width: 100%;
    }
    100% {
      width: 0%;
    }
`;
