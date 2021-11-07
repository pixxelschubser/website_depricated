import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export const Header = () => {
  return (
    <LogoWrapper>
      <Link to="/">
        <Logo>PIXXELSCHUBSER</Logo>
      </Link>
    </LogoWrapper>
  );
};

const LogoWrapper = styled.header`
  width: 100%;
  padding: 1rem 1rem 2rem 3rem;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  background: linear-gradient(rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)
    no-repeat;
`;

const Logo = styled.a`
  font-size: var(--125rem);
  font-weight: 600;
  letter-spacing: 0.125rem;
  display: inline-block;
  padding: 5px 0;
  cursor: pointer;
  position: relative;
  text-decoration: none;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: var(--col-white);
    transform: scaleX(0);
    transform-origin: bottom left;
    transition: transform 0.7s;
  }

  &:hover {
    opacity: 1;
    &::after {
      transform: scaleX(1);
    }
  }
`;
