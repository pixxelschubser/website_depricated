import styled, { keyframes } from 'styled-components';

export const MenuContent = ({ menuActive }) => {
  return (
    <Wrapper>
      <List menuActive={menuActive}>
        <Item>
          <a href="#start">START</a>
        </Item>
        <Item>
          <a href="#about">ABOUT ME</a>
        </Item>
        <Item>
          <a href="#projects">PROJECTS</a>
        </Item>
        <Item>
          <a href="#contact">CONTACT</a>
        </Item>
        <Item>
          <a href="#legals">LEGALS</a>
        </Item>
      </List>
      <CloseHint menuActive={menuActive}>
        click anywhere to close
      </CloseHint>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  overflow: hidden;
`;
const List = styled.ul`
  width: 100%;
  padding: var(--100rem);

  text-align: right;
  letter-spacing: 0.2rem;
  font-weight: 500;

  list-style: none;

  position: relative;
  left: calc(100% + var(--100rem));

  animation-name: ${({ menuActive }) =>
    menuActive ? openMenu : menuActive === '' ? '' : closeMenu};
  animation-duration: 0.7s;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
`;

const openMenu = keyframes`
	0% {
		left: calc(100% + var(--100rem));
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
		left: calc(100% + var(--100rem));
	}
`;

const Item = styled.li`
  float: right;
  clear: right;

  cursor: pointer;

  &:not(:last-of-type) {
    margin-bottom: 50px;
  }

  a {
    text-decoration: none;
    padding: 2px 0;

    font-size: 2rem;
    font-weight: 600;

    position: relative;

    transition: 0.7s;
    opacity: 0.3;

    &:hover {
      opacity: 1;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      width: 100%;
      background-color: var(--col-white);
      transform: scaleX(0);
      transform-origin: bottom right;
      transition: transform 0.7s;
    }

    &:hover {
      opacity: 1;
      &::after {
        transform: scaleX(1);
      }
    }
  }
`;

const CloseHint = styled.p`
  font-size: 0.6rem;
  font-weight: 400;
  letter-spacing: 0.05rem;

  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;
