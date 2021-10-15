import styled from 'styled-components/macro';

export const Header = () => {
  return (
    <LogoWrapper>
      <Logo>PIXXELSCHUBSER</Logo>
    </LogoWrapper>
  );
};

const LogoWrapper = styled.header`
  width: 100%;
  padding: 10px 20px 30px 40px;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  background: linear-gradient(
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0) 90%,
      rgba(0, 0, 0, 0) 100%
    )
    no-repeat;
`;

const Logo = styled.h1`
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 0.06rem;
  display: inline-block;
  padding: 10px 0;
  cursor: pointer;
`;
