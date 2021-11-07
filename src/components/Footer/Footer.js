import styled from 'styled-components/macro';

export const Footer = () => {
  const phone = '+1573 33 8 33 71';
  const mail = 'mail@pixxelschubser.com';

  return (
    <Wrapper>
      <Address>
        <Icon src="/icons/letter_white.svg" alt="Postal address" />
        <PostalAddress>
          Lars Radtke
          <br />
          Am Landpflegeheim 38
          <br />
          22549 Hamburg
          <br />
        </PostalAddress>
        <Icon src="/icons/phone_white.svg" alt="Phone number" />
        <div>
          <Link afterContent={phone} href="tel:+15733383371">
            {phone}
          </Link>
        </div>
        <Icon src="/icons/email_white.svg" alt="Email" />
        <div>
          <Link afterContent={mail} href="mailto:mail@pixxelschubser.com">
            {mail}
          </Link>
        </div>
      </Address>
      <p>© 2021 pixxelschubser. All rights reserved.</p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  width: 100%;
  padding: 1rem 1rem 2rem 3rem;

  display: flex;
  flex-direction: column;
  gap: 20px;

  position: fixed;
  bottom: 0;

  font-size: var(--150rem);
  letter-spacing: 0.04rem;
  font-style: normal;
  font-weight: 400;
  white-space: nowrap;

  z-index: -1;

  > * {
    width: 100%;
    font-size: 0.8rem;
  }
`;

const Address = styled.address`
  letter-spacing: 0.04rem;
  font-style: normal;
  font-weight: 400;
  white-space: nowrap;

  display: grid;
  grid-template-columns: 30px auto;
  gap: 20px 10px;
  margin-bottom: 10px;
`;

const Icon = styled.img`
  position: relative;
  top: 3px;
`;

const PostalAddress = styled.p`
  line-height: 2.5;
`;

const Link = styled.a`
  position: relative;
  top: 5px;
  padding: 10px 0;
  text-decoration: none;
  opacity: 0.3;
  transition: 0.7s;

  &::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: rgba(220, 220, 220, 1);
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
