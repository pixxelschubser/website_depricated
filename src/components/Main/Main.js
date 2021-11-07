import { Switch, Route, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components/macro';

export const Main = () => {
  return (
    <Wrapper>
      <Section id="start"></Section>
      <Section id="about">
        <Headline>ABOUT ME</Headline>
        <Paragraph>Moin! Ich bin Lars.</Paragraph>
        <Paragraph>
          Ich arbeite als Freelance Mediengestalter und Web Developer in
          Hamburg.
        </Paragraph>
      </Section>
      <Section id="projects">
        <Headline>PROJECTS</Headline>
        <Switch>
          <Route exact path="/">
            <ProjectWrapper>
              <ProjectLink to="/buerokaffee">DER BÜROKAFFEE</ProjectLink>
              <ProjectLink to="/cellparc">CELLPARC</ProjectLink>
              <ProjectLink to="/evian">EVIAN</ProjectLink>
              <ProjectLink to="/derspiegel">DER SPIEGEL</ProjectLink>
              <ProjectLink to="/jankecoste">JANKECOSTE DESIGN</ProjectLink>
            </ProjectWrapper>
          </Route>
          <Route path="/buerokaffee">
            <StyledLink to="/#projects">zurück</StyledLink>
            <ProjectContent>
              <ProjectDetails>
                <ProjectTitle>Jacobs Douwe Egberts</ProjectTitle>
                <ProjectClient>Der Bürokaffee</ProjectClient>
                <ProjectTasks>
                  <li>Umsetzung Unternehmens-Kommunikation</li>
                  <li>
                    Konzeption und Umsetzung von Social-Media-Content
                  </li>
                  <li>
                    Konzeption, Umsetzung und Reinzeichnung von Printmedien
                  </li>
                  <li>Retusche und Bildaufbereitung</li>
                </ProjectTasks>
                <ProjectWork>
                  DRID Kommunikation und Design GmbH
                </ProjectWork>
                <ProjectDate>Zeitraum: 2017 - 2019</ProjectDate>
              </ProjectDetails>
              <ProjectInfo>
                <ProjectText>
                  <h4>
                    Eine Kaffeemaschine als Mitarbeiter – genau so
                    präsentiert JDE Schweiz seinen Rundum-sorglos-Service
                    für Firmen.
                  </h4>
                  <p>
                    Neben der Entwicklung der Marke inklusive CI, Kampagne
                    und eines Portals zur Lead-Generierung wurden für das
                    Projekt eine Vielzahl diverser Vertriebsmittel und
                    Social Media Ads umgesetzt.
                  </p>
                  <p>
                    Während Marke, Visuals und CI bereits vor meinem
                    Dazustoßen entwickelt worden waren, galt es für mich
                    auf dieser Grundlage Vertriebsmittel wie Sortimenter,
                    Factsheets, Visitenkarten und Formulare zu konzipieren
                    und umzusetzen sowie Assets und Ads für die
                    Social-Media-Plattformen zu gestalten.
                  </p>
                </ProjectText>
                <ProjectImages>
                  <img
                    src="images/JDE_Sofa.jpg"
                    alt="Der Bürokaffee Key Visuals"
                  />
                  <img
                    src="images/buerokaffee-social-mockups.png"
                    alt="Der Bürokaffee Social Media Ads"
                  />
                  <img
                    src="images/buerokaffee-print-mockups.png"
                    alt="Der Bürokaffee Vertriebsmittel"
                  />
                </ProjectImages>
              </ProjectInfo>
            </ProjectContent>
          </Route>
          <Route path="/cellparc">
            <StyledLink to="/#projects">zurück</StyledLink>
            <ProjectContent>
              <ProjectDetails>
                <ProjectTitle>cellparc</ProjectTitle>
                <ProjectClient>Unternehmens-Website</ProjectClient>
                <ProjectTasks>
                  <li>Erstellung und Bearbeitung von Bildmaterial</li>
                  <li>Umsetzung eines Website-Dummys in HTML und CSS</li>
                </ProjectTasks>
                <ProjectWork>
                  DRID Kommunikation und Design GmbH
                </ProjectWork>
                <ProjectDate>Zeitraum: 2019</ProjectDate>
              </ProjectDetails>
              <ProjectInfo>
                <ProjectText>
                  <h4>
                    Innovatives und nachhaltiges Fassaden- und
                    Energiekonzept
                  </h4>
                  <p>
                    Für das Forschungsunternehmen SSC wurde im Zuge seiner
                    Realisation einer Bioenergie-Fassade die Biotec-Marke
                    cellparc entwickelt, unter der die Vermarktung und
                    Kommunikation dieser stattfindet.
                  </p>
                  <p>
                    Neben der Positionierung, der Entwicklung des Namens
                    und des Logos wurde außerdem der Web-Auftritt für die
                    Marke geschaffen.
                  </p>
                  <p>
                    Zu den von mir übernommenen Aufgaben zählen das
                    aufbereiten von Bildmaterial, die Bildbearbeitung sowie
                    die Umsetzung eines funktionellen Click-Dummys in HTML
                    und CSS auf Basis von zuvor gestalteten Wireframes und
                    Mock Ups. Der Dummy wurde dann vom Entwickler-Team als
                    Basis zur Programmierung der tatsächlichen Website
                    herangezogen.
                  </p>
                </ProjectText>
                <ProjectImages>
                  <img src="images/cellparc-macbook.png" alt="" />
                  <CellparcImage>
                    <img
                      src="images/v3-Home-5@2x.png"
                      alt="cellparc Website MockUp auf einem Macbook-Screen"
                    />
                  </CellparcImage>
                </ProjectImages>
              </ProjectInfo>
            </ProjectContent>
          </Route>
          <Route path="/evian">
            <StyledLink to="/#projects">zurück</StyledLink>
            <ProjectContent>
              <ProjectDetails>
                <ProjectTitle>Danone Waters Switzerland</ProjectTitle>
                <ProjectClient>HTML5-Werbemittel</ProjectClient>
                <ProjectTasks>
                  <li>Konzeption</li>
                  <li>Layoutadaption</li>
                  <li>Sprachadaption</li>
                  <li>Bildbearbeitung</li>
                  <li>Videobearbeitung</li>
                  <li>Assetgenerierung</li>
                  <li>Programmierung</li>
                </ProjectTasks>
                <ProjectWork>
                  Freelance & {<br />}DRID Kommunikation und Design GmbH
                </ProjectWork>
                <ProjectDate>Zeitraum: 2019-2021</ProjectDate>
              </ProjectDetails>
              <ProjectInfo>
                <ProjectText>
                  <h4>Werbemittelerstellung evian</h4>
                  <p>
                    Danone ist eines der weltweit führenden Unternehmen in
                    der Lebensmittelindustrie und auch im
                    Mineralwassermarkt mit der Marke Evian vertreten.
                  </p>
                  <p>
                    Für evian habe Ich auf mehreren Werbemittel-Projekten
                    mitgewirkt und HTML5-Banner in diversen Formaten und
                    Sprachen konzipiert, gestaltet und umgesetzt; Die
                    dargestellten Grafiken spiegeln einen kleinen Teil
                    dessen wieder.
                  </p>
                </ProjectText>
                <ProjectImages>
                  <img
                    src="images/Evian-NewYear-Scribble.gif"
                    alt="evian new year Banner, animiertes Scribble"
                  />
                  <EvianVideos>
                    <video autoPlay loop muted>
                      <source
                        src="videos/evian-rpet.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <video autoPlay loop muted>
                      <source
                        src="videos/evian-superiority.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <video autoPlay loop muted>
                      <source
                        src="videos/evian-carbon-neutral.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <video autoPlay loop muted>
                      <source
                        src="videos/evian-pure.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </EvianVideos>
                </ProjectImages>
              </ProjectInfo>
            </ProjectContent>
          </Route>
          <Route path="/derspiegel">
            <StyledLink to="/#projects">zurück</StyledLink>
            <ProjectContent>
              <ProjectDetails>
                <ProjectTitle>DER SPIEGEL</ProjectTitle>
                <ProjectClient>Abonnentenwerbung</ProjectClient>
                <ProjectTasks>
                  <li>Aufbereitung von Bildmaterial</li>
                  <li>Anzeigenkonzeption</li>
                  <li>Text</li>
                  <li>Reinzeichnung</li>
                  <li>Assetsgenerierung für Onlinegrafiken</li>
                  <li>Erstellung von Icons</li>
                </ProjectTasks>
                <ProjectWork>
                  Freelance & DRID Kommunikation und Design GmbH
                </ProjectWork>
                <ProjectDate>Zeitraum: 2018 - 2021</ProjectDate>
              </ProjectDetails>
              <ProjectInfo>
                <ProjectText>
                  <h4>Abomarketing Digital und Print</h4>
                  <p>
                    DER SPIEGEL ist seit über 70 Jahren eines der führenden
                    Nachrichten-Magazine Deutschlands. Jede Woche erscheint
                    eine neue Ausgabe mit neuen Anzeigen und Beilagen zur
                    Abonnentengewinnung, mit aufmerksamkeitsstarken
                    Werbemitteln und dadurch bemerkenswerten Conversions
                    als Ergebnis.
                  </p>
                  <p>
                    Über mehrere Jahre hinweg durfte Ich diese Anzeigen
                    erstellen und war dabei nicht nur auf den SPIEGEL
                    beschränkt, sondern betreute auch weitere Titel der
                    Dachmarke, unter anderem DEIN SPIEGEL und SPIEGEL
                    GESCHICHTE. Zusätzlich zu den Print-Werbemitteln war
                    Ich zuständig für viele Grafiken der digitalen
                    Werbemittel und Online-Angebote des SPIEGELS.
                  </p>
                </ProjectText>
                <ProjectImages>
                  <img
                    src="images/spiegel-1.png"
                    alt="Verschiedene DER SPIEGEL Print-Anzeigen"
                  />
                </ProjectImages>
              </ProjectInfo>
            </ProjectContent>
          </Route>
          <Route path="/jankecoste">
            <StyledLink to="/#projects">zurück</StyledLink>
            <ProjectContent>
              <ProjectDetails>
                <ProjectTitle>JankeCoste Design</ProjectTitle>
                <ProjectClient>Showcase Website</ProjectClient>
                <ProjectTasks>
                  <li>Projektmanagement</li>
                  <li>Aufbereiten von Bildmaterial</li>
                  <li>Website Design</li>
                  <li>Wireframing</li>
                  <li>Prototyping</li>
                  <li>Wordpress</li>
                </ProjectTasks>
                <ProjectWork>
                  DRID Kommunikation und Design GmbH
                </ProjectWork>
                <ProjectDate>Zeitraum: 2018</ProjectDate>
              </ProjectDetails>
              <ProjectInfo>
                <ProjectText>
                  <h4>Klares Design für klare Designs</h4>
                  <p>
                    Das Designer-Duo Gil Coste und Holger Janke wünschten
                    ein Redesign Ihrer gemeinsamen Website, auf welcher Sie
                    Ihre Projekte und Designs präsentieren. Entsprechend
                    Ihrem Anspruch hatte das neue Design hohe Anforderungen
                    zu erfüllen.
                  </p>
                  <p>
                    Meine Aufgaben auf diesem Projekt waren neben dem
                    Projektmanagement das Screendesign sowie das
                    Prototyping und Aufbereiten des bis dahin verfügbaren
                    Bildmaterials. Die spätere Website wurde dann mit dem
                    Content Management System Wordpress entwickelt.
                  </p>
                </ProjectText>
                <ProjectImages>
                  <img src="images/cellparc-macbook.png" alt="" />
                  <CellparcImage>
                    <img
                      src="images/gilcoste.png"
                      alt="Gil Coste Website Mock Up"
                    />
                  </CellparcImage>
                </ProjectImages>
              </ProjectInfo>
            </ProjectContent>
          </Route>
        </Switch>
      </Section>
      <Section id="contact">
        <Headline>CONTACT</Headline>
      </Section>
      <FooterSpacer id="legals" />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

const Section = styled.section`
  min-height: 50vh;
  background-color: var(--col-black);
  padding: 4rem 1rem 2rem 3rem;
  font-size: 2rem;
  font-weight: 100;

  &:last-of-type {
    border-bottom: 2px solid rgb(76, 76, 76);
    min-height: 0;
  }

  :first-of-type {
    height: 100vh;
    border-bottom: 2px solid rgb(76, 76, 76);
    background-image: url(images/start_portrait.jpg);
    @media (orientation: landscape) {
      background-image: url(images/start_landscape.jpg);
    }
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
  }
`;

const Headline = styled.h2`
  font-weight: 100;
  font-size: 30px;
  margin-bottom: 30px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: 500;

  :not(:last-child) {
    margin-bottom: 30px;
  }

  a {
    text-decoration: none;

    position: relative;

    transition: 0.7s;
    opacity: 0.3;

    &:hover {
      opacity: 1;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -1px;
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

const StyledLink = styled(HashLink)`
  font-size: 18px;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 30px;

  position: relative;

  transition: 0.7s;
  opacity: 0.3;

  &:hover {
    opacity: 1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
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
`;

const ProjectContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 1001px) {
    grid-template-columns: 380px 1fr;
    gap: 50px;
  }

  font-size: 16px;
`;

const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const ProjectTitle = styled.h3`
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 1px;
`;

const ProjectClient = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
`;

const ProjectTasks = styled.ul`
  margin-bottom: 30px;

  li {
    margin-bottom: 5px;
  }
`;

const ProjectWork = styled.p``;

const ProjectDate = styled.p``;

const ProjectInfo = styled.div`
  width: 100%;

  @media (min-width: 1001px) {
    width: calc(100% - 50px);

    ::before {
      content: '';
      height: 93px;
      width: 100%;
    }
  }

  display: grid;
  gap: 10px;
`;

const ProjectText = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 30px;
`;

const ProjectImages = styled.div`
  display: grid;
  position: relative;

  img {
    width: 100%;
  }
`;

const FooterSpacer = styled.div`
  height: 290px;
  width: 100%;
  pointer-events: none;
`;

const CellparcImage = styled.div`
  position: absolute;
  width: 50%;
  height: 58%;
  top: 20%;
  left: 25%;
  overflow-y: auto;
`;

const EvianVideos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  video {
    width: 180px;
  }
`;

const ProjectWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const ProjectLink = styled(Link)`
  display: flex;
  justify-items: center;
  align-content: center;
  border: 1px solid white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
`;
