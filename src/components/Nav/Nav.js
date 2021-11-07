import styled, { keyframes } from 'styled-components/macro';
import { MenuContent } from 'components';

export const Nav = ({ menuActive, toggleMenu }) => {
  return (
    <Menu onClick={toggleMenu} menuActive={menuActive}>
      <SwipeHint menuActive={menuActive}>MENU</SwipeHint>
      <MenuContent LinkClick={toggleMenu} menuActive={menuActive} />
    </Menu>
  );
};

const Menu = styled.nav`
  width: 100%;
  height: 100vh;
  padding: 20px;

  position: fixed;
  left: calc(-100% + 20px);
  z-index: 3;

  background: var(--col-black-trans);
  border: 20px solid rgba(220, 220, 220, 1);

  transition: 0.5s;
  border: ${({ menuActive }) =>
    menuActive
      ? '20px solid var(--col-white)'
      : '20px solid var(--col-grey)'};
  &:hover {
    border: 20px solid var(--col-white);
  }

  animation-name: ${({ menuActive }) =>
    menuActive ? openMenu : menuActive === '' ? '' : closeMenu};
  animation-duration: 0.7s;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
`;

const SwipeHint = styled.p`
  color: var(--col-black);
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.05rem;

  position: absolute;
  right: -28px;
  top: 42.5%;
  transform: rotate(-90deg);

  transition: 0.7s;
  opacity: ${({ menuActive }) => (menuActive ? 0 : 1)};
`;

const openMenu = keyframes`
    0% {
      left: calc(-100% + 1rem);
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
      left: calc(-100% + 1rem);
    }
`;
