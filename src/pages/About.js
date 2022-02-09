import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/gabo1.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hola, soy <span>Gabriel</span>
              </p>
              <h2 className="about__heading">Desarrollador Web freelance</h2>
              <div className="about__info">
                <PText>
                  Actualmente radico en la ciudad Blanca de Bolivia, con mi
                  trabajo trato de ayudar y facilitar el trabajo de las
                  personas, automatizando sus procesos, de tal manera que se
                  pueda tener mejores resultados.
                  <br /> <br />
                  Desde niño estuve compromometido con la sociedad, brindando mi
                  ayuda. En la Universidad descubri qeu una manera eficiente de
                  ayudar a la sociedad es brindando soluciones a traves del
                  codigo.
                  <br />
                  <br />
                  mi vision es el el mundo sea un mejor lugar para vivir. Mi
                  objetivo es brindar soluciones tecnologicas para un mejor
                  vivir. es poco mi aporte para lograr una mejor soliedad y sin
                  complicaciones.
                </PText>
              </div>
              <Button btnText="Descargar CV" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Educación</h1>

              <AboutInfoItem
                title="Colegio"
                items={['Colegio NAcional Aniceto Arce']}
              />

              <AboutInfoItem
                title="Universidad"
                items={['Universidad San Francisco Xavier de Chuquisaca']}
              />
              <AboutInfoItem
                title="Posgrados"
                items={['Universidad Andina Simón Bolivar, CEPI']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Habilidadess</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node', 'Express', 'ASP .NET']}
              />
              <AboutInfoItem
                title="Design"
                items={['Photoshop', 'After Effects', 'Figma']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiencia</h1>

              <AboutInfoItem
                title="2010-2012"
                items={['junior developer at web Cifar']}
              />
              <AboutInfoItem
                title="2012-2016"
                items={['Front end developer at web Cifar ']}
              />
              <AboutInfoItem
                title="2016-"
                items={['Freelance web Developer']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
