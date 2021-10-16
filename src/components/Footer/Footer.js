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
        <Icon src="/icons/email_white.svg" alt="Phone number" />
        <div>
          <Link afterContent={mail} href="mailto:mail@pixxelschubser.com">
            {mail}
          </Link>
        </div>
      </Address>
      © 2021 pixxelschubser. All rights reserved.
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  width: 100%;
  padding: 20px 20px 20px 40px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  position: fixed;
  bottom: 0;

  font-size: 0.8rem;
  letter-spacing: 0.04rem;
  font-style: normal;
  font-weight: 400;
  white-space: nowrap;

  > * {
    width: 100%;
  }
`;

const Address = styled.address`
  font-size: 0.8rem;
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
