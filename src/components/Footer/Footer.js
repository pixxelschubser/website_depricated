import styled from 'styled-components/macro';

export const Footer = () => {
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
        <ContactLink href="tel:+15733383371">+1573 33 8 33 71</ContactLink>
        <Icon src="/icons/email_white.svg" alt="Phone number" />
        <ContactLink href="mailto:mail@pixxelschubser.com">
          mail@pixxelschubser.com
        </ContactLink>
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
  gap: 20px 0;
`;

const Icon = styled.img`
  position: relative;
  top: 3px;
`;

const PostalAddress = styled.p`
  line-height: 2.5;
`;

const ContactLink = styled.a`
  padding: 10px 0;
  position: relative;
  top: -5px;
`;
