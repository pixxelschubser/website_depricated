import styled, { keyframes } from 'styled-components/macro';
import { MenuContent } from 'components';

export const Nav = ({ menuActive, toggleMenu }) => {
  return (
    <Menu onClick={toggleMenu} menuActive={menuActive}>
      <SwipeHint menuActive={menuActive}>menu</SwipeHint>
      <MenuContent LinkClick={toggleMenu} menuActive={menuActive} />
    </Menu>
  );
};

const Menu = styled.nav`
  width: 100%;
  height: 100vh;

  position: fixed;
  left: calc(-100% + 20px);
  z-index: 3;

  background: rgba(0, 0, 0, 0.8);
  border: 20px solid rgba(220, 220, 220, 1);

  transition: 0.5s;
  opacity: ${({ menuActive }) => (menuActive ? 1 : 0.3)};
  &:hover {
    opacity: 1;
  }

  animation-name: ${({ menuActive }) =>
    menuActive ? openMenu : menuActive === '' ? '' : closeMenu};
  animation-duration: 0.7s;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
`;

const SwipeHint = styled.p`
  writing-mode: sideways-lr;
  color: rgba(15, 15, 15, 1);
  font-size: 0.6rem;
  font-weight: 400;
  letter-spacing: 0.03rem;

  position: absolute;
  right: -17.5px;
  top: 50%;
  transform: translateY(-150%);

  transition: 0.7s;
  opacity: ${({ menuActive }) => (menuActive ? 0 : 1)};
`;

const openMenu = keyframes`
    0% {
      left: calc(-100% + 20px);
    }
    100% {
      left: 0;
    }
`;

const closeMenu = keyframes`
    0% {
      left: 0;
    }
    100% {
      left: calc(-100% + 20px);
    }
`;
