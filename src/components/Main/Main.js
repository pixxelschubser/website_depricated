import styled from 'styled-components/macro';

export const Main = () => {
  return (
    <Wrapper>
      <Section id="start"></Section>
      <Section id="about">ABOUT ME</Section>
      <Section id="projects">PROJECTS</Section>
      <Section id="contact">CONTACT</Section>
      <FooterSpacer id="legals" />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

const Section = styled.section`
  height: 100vh;
  background-color: var(--col-black);
  padding: 4rem 1rem 2rem 3rem;
  font-size: 2rem;
  font-weight: 100;

  &:last-of-type {
    border-bottom: 2px solid rgb(76, 76, 76);
  }
`;

const FooterSpacer = styled.div`
  height: 290px;
  width: 100%;
  pointer-events: none;
`;
