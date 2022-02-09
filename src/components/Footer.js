import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 5rem;
  .container {
    display: flex;
    gap: 3rem;
    // text-align: center;
    // justify-content: center;
    // align-items: center;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: right;

    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  const fecha = new Date();
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Gabriel Méndez Chirinos</h1>
          <PText>
            Ingeniero de sistemas y Desarrollador freelance. Realizamos Sistemas
            Web y App con modelo de negocios, que sean intuitivos y de fácil
            manejo.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Enlaces Importantes"
            links={[
              {
                title: 'Inicio',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'Mi Info',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Proyectos',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contacto',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Más Información"
            links={[
              {
                title: '+591-73420100',
                path: 'tel:+88012312',
              },
              {
                title: 'gabriel.mendez.ch@gmail.com',
                path: 'mailto:webcifar@gmail.com',
              },
              {
                title: 'Sucre, Bolivia',
                path: 'http://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="REdes Sociales"
            links={[
              {
                title: 'Facebook',
                path: 'http://facebook.com',
              },
              {
                title: 'Twitter',
                path: 'http://twitter.com',
              },
              {
                title: 'Instagram',
                path: 'http://instagram.com',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>©{fecha.getFullYear()} - gmch</PText>
        </div>
      </div>
    </FooterStyle>
  );
}
