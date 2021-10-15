import styled, { keyframes } from 'styled-components';

export const MenuContent = ({ menuActive, LinkClick }) => {
  return (
    <Wrapper>
      <List menuActive={menuActive}>
        <Item onClick={LinkClick}>START</Item>
        <Item onClick={LinkClick}>ABOUT ME</Item>
        <Item onClick={LinkClick}>PROJECTS</Item>
        <Item onClick={LinkClick}>CONTACT</Item>
        <Item onClick={LinkClick}>LEGAL NOTICE</Item>
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
  padding: 20px;

  text-align: right;
  font-size: 1.5rem;
  letter-spacing: 0.075rem;
  font-weight: 500;

  list-style: none;

  position: relative;
  left: calc(100% + 20px);

  animation-name: ${({ menuActive }) =>
    menuActive ? openMenu : menuActive === '' ? '' : closeMenu};
  animation-duration: 0.7s;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
`;

const openMenu = keyframes`
	0% {
		left: calc(100% + 20px);
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
		left: calc(100% + 20px);
	}
`;

const Item = styled.li`
  padding: 2px 0;

  float: right;
  clear: right;

  cursor: pointer;

  font-weight: 600;

  position: relative;

  &:not(:last-of-type) {
    margin-bottom: 30px;
  }

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
    background-color: rgba(220, 220, 220, 1);
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
`;

const CloseHint = styled.p`
  font-size: 0.6rem;
  font-weight: 400;
  letter-spacing: 0.03rem;

  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;
